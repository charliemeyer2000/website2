import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const useViews = (slug) => {
    const [views, setViews] = useState([]);
    const [numViews, setNumViews] = useState(0);
    const [ip, setIp] = useState('');

    const updateItem = useCallback(async (slug) => {
      await axios.post("/api/dynamo/updateItem", { slug: slug });
    }, []);

    useEffect(() => {
      const fetchViews = async () => {
        const res = await axios.post("/api/dynamo/getViews", { slug: slug });
        const data = res.data;
        setViews(data.views);
        setNumViews(data.numViews);
        setIp(data.ip);
      };
      fetchViews();
    }, [slug, updateItem]);

    return { views, numViews, ip, updateItem };
}

export default useViews;



