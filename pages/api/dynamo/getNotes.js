import dynamodb from '@/utils/config/dynamoConfig';

export default async (req, res) => {

    if (req.method !== 'GET') {
        res.status(400).json({ message: 'Only GET requests allowed' });
    }

    const params = {
        TableName: process.env.DYNAMO_GUESTBOOK_TABLE_NAME,
    };

    try {
        const data = await dynamodb.scan(params).promise();
        const items = data.Items;

        if (!items) {
            res.status(400).json({ message: 'No notes found' });
        } else {
            res.status(200).json({ notes: items });
        }
        
    } catch (error) {
        console.log(error);
    }
}
