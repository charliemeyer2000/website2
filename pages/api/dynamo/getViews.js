import dynamodb from "@/utils/other/dynamoConfig";

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

  const params = {
    TableName: process.env.DYNAMO_TABLE_NAME,
    Key: {
      slug: { S: slug },
    },
  };

  try {
    const data = await dynamodb.getItem(params).promise();

    if (!data.Item || !data.Item.ips || !data.Item.ips.L) {
      res.status(200).json({
        views: [],
        ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
      });
      return;
    }

    // Extract IP addresses and visit dates
    const ipsData = data.Item.ips.L.map((entry) => ({
      ip: entry.M.ip.S,
      visitDate: parseInt(entry.M.visitDate.N, 10),
    }));

    console.log(ipsData);

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
