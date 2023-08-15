import Arrow from "../arrow/Arrow";
import Link from "../link/Link";
import styles from "./StuffItem.module.scss";

export default function StuffItem({ title, angle, description, href, ...props }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href={href} newWindow={props.newWindow}>
          {title}
        </Link>
        <Arrow angle={angle} height={0.694} className={styles.animatedArrow} />
      </div>
      <p className={styles.text}>{description}</p>
    </div>
  );
}
