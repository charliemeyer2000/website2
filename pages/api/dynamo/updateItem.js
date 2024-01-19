import dynamodb from "@/utils/config/dynamoConfig";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(400).json({ error: "Method not allowed. Only POST requests." });
    return;
  }

  if (!req.body.slug) {
    res.status(400).json({ error: "Missing slug in request body." });
    return;
  }

  const { slug } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder("utf-8").encode(ip)
  );
  const hash = Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const readParams = {
    TableName: process.env.DYNAMO_TABLE_NAME,
    Key: {
      slug: { S: slug },
    },
  };

  try {
    const data = await dynamodb.getItem(readParams).promise();
    const itemExists = data.Item;

    if (!itemExists) {
      // create the new item if it doesn't exist
      const createParams = {
        TableName: process.env.DYNAMO_TABLE_NAME,
        Item: {
          slug: { S: slug },
          ips: {
            L: [
              {
                M: {
                  ip: { S: hash },
                  visitDate: { N: Date.now().toString() },
                },
              },
            ],
          },
        },
      };
      await dynamodb.putItem(createParams).promise();
      res.status(200).json({
        message: "Successfully created views",
      });
      console.log('created new item');
      return;
    }

    const views = data.Item?.ips?.L || [];
    const now = Date.now();

    const oneSecondAgo = now - 1000; // used for testing
    const fiveMinutesAgo = now - 300000;
    const ipAlreadyExists = views.some((view) => {
      return (
        view.M.ip.S === hash && view.M.visitDate.N > fiveMinutesAgo.toString()
      );
    });

    if (ipAlreadyExists) {
      res.status(200).json({
        message:
          "This user has already visited this page in the last 5 minutes",
      });
      console.log('already viewed within 5 minutes');
      return;
    }


    const newView = {
      M: {
        ip: { S: hash },
        visitDate: { N: now.toString() },
      },
    };

    const updateParams = {
      TableName: process.env.DYNAMO_TABLE_NAME,
      Key: {
        slug: { S: slug },
      },
      UpdateExpression:
        "SET ips = list_append(if_not_exists(ips, :empty_list), :new_view)",
      ExpressionAttributeValues: {
        ":empty_list": { L: [newView] }, // make a new one if it doesn't exist
        ":new_view": { L: [newView] },
      },
    };

    await dynamodb.updateItem(updateParams).promise();
    res.json({
      message: "Successfully updated views",
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      error: "Could not update views due to dynamo error",
    });
  }
};
