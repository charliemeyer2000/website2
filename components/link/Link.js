import styles from "./Link.module.scss";
import Arrow from "../arrow/Arrow";

export default function Link({ children, ...props }) {
  return (
    <a
      className={styles.link}
      href={props.href}
      rel="noopener noreferer"
      target={props.newWindow ? "_blank" : "_self"}
    >
      {children}
    </a>
  );
}
