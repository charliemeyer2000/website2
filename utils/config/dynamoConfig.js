import AWS from "aws-sdk";

const dynamodb = new AWS.DynamoDB({
  region: "us-east-1",
  accessKeyId: process.env.DYNAMO_ACCESS_KEY_ID,
  secretAccessKey: process.env.DYNAMO_SECRET_ACCESS_KEY,
});

export default dynamodb;
