import { useState, useEffect } from "react";
import styles from "./XKCD.module.scss";

export default function XKCD() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api/xkcd/today")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <img src={data.img} alt={data.alt} id="xkcd-image" />
      <p className={styles.title}>{data.title}</p>
    </div>
  );
}
