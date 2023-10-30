import { useEffect, useState } from 'react';
import axios from 'axios';

const useViews = (slug) => {
    const [views, setViews] = useState([]);
    const [numViews, setNumViews] = useState(0);
    const [ip, setIp] = useState('');
    
    useEffect(() => {
        const fetchViews = async () => {
            const res = await axios.post('/api/dynamo/getViews', { slug: slug})
            const data = res.data;
            setViews(data.views);
            setNumViews(data.numViews);
            setIp(data.ip);
        }
        fetchViews();


    }, [slug]);

    return { views, numViews, ip };
}

export default useViews;



