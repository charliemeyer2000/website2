import dynamodb from "@/utils/config/dynamoConfig";

export default async (req, res) => {
  // Check for missing slug
  if (!req.body.slug) {
    res.status(400).json({ error: "Missing slug" });
    return;
  }
  // must be post request
  if (req.method !== "POST") {
    res.status(400).json({ error: "Method not allowed" });
    return;
  }

  const { slug } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  const params = {
    TableName: process.env.DYNAMO_TABLE_NAME,
    Key: {
      slug: { S: slug },
    },
  };

  try {
    const data = await dynamodb.getItem(params).promise();

    if (!data.Item || !data.Item.ips || !data.Item.ips.L) {
      const buf = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder("utf-8").encode(ip)
      );
      const hash = Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
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
      console.log("created new item");
      return;
    }

    // Extract IP addresses and visit dates
    const ipsData = data.Item.ips.L.map((entry) => ({
      ip: entry.M.ip.S,
      visitDate: parseInt(entry.M.visitDate.N, 10),
    }));
    res.status(200).json({
      views: ipsData,
      numViews: ipsData.length,
      ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: "Could not fetch views" });
  }
};
