import dynamodb from "@/utils/other/dynamoConfig";

export default async (req, res) => {
  if (!req.body.slug) {
    res.status(400).json({ error: "Missing slug" });
  }
  if (req.method !== "POST") {
    res.status(400).json({ error: "Method not allowed" });
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
    res.status(200).json({ views: data.Item.ips.SS});
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Could not fetch views" });
  }
};
