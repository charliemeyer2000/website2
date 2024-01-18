import dynamodb from '@/utils/config/dynamoConfig';
import {getServerSession} from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async (req, res) => {

    const session = await getServerSession(req, res )
    
    // if (!session) {
    //     res.status(401).json({ message: 'Unauthorized' });
    // }

    if (req.method !== 'POST') {
        res.status(400).json({ message: 'Only POST requests allowed' });
    }

    if (!req.body.note) {
        res.status(400).json({ message: 'Note is required' });
    }

    if (!req.body.author ) {
        res.status(400).json({ message: 'Author is required' });
    }

    const { note, author } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder('utf-8').encode(ip))
    const hash = Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");

    const params = {
        TableName: process.env.DYNAMO_GUESTBOOK_TABLE_NAME,
        Key: {
            note: { S: note },
        },
    };

    try {
        const data = await dynamodb.getItem(params).promise();
        const item = data.Item;

        if (!item) {
            // add a new note
            const createParams = {
                TableName: process.env.DYNAMO_GUESTBOOK_TABLE_NAME,
                Item: {
                    note: { S: note },
                    ip: { S: hash },
                    createdAt: { S: new Date().toISOString() },
                    author: { S:author }

                }
            };

            await dynamodb.putItem(createParams).promise();
            res.status(200).json({ message: 'Note added successfully' });
        } else {
            res.status(400).json({ message: 'Note already exists' });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
