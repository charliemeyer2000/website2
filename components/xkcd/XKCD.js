import { useState, useEffect } from "react";
import styles from "./XKCD.module.scss";
import loadingsvg from "@/public/images/loading-svg.svg";

export default function XKCD() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/xkcd/today")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false); // Set isLoading to false when data is fetched
      });
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <img src={loadingsvg} alt="loading" />
      ) : (
        <>
          <img src={data.img} alt={data.alt} id="xkcd-image" />
          <p className={styles.title}>{data.title}</p>
        </>
      )}
    </div>
  );
}
