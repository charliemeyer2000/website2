import { useEffect, useState } from "react";
import axios from "axios";

const useViews = (slug) => {
  const [views, setViews] = useState([]);
  const [numViews, setNumViews] = useState(0);
  const [ip, setIp] = useState("");
  const [shouldRefetch, setShouldRefetch] = useState(false);

  const fetchViews = async () => {
    const res = await axios.post("/api/dynamo/getViews", { slug: slug });
    const data = res.data;
    setViews(data.views);
    setNumViews(data.numViews);
    setIp(data.ip);
  };

  async function updateItem(slug) {
    await axios.post("/api/dynamo/updateItem", { slug: slug });
    setShouldRefetch((prevState) => !prevState);
  }

  useEffect(() => {
    fetchViews();
  }, [slug, shouldRefetch]);

  return { views, numViews, ip, updateItem };
};

export default useViews;
