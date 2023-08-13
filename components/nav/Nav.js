import styles from './Nav.module.scss';
import Link from "next/link";
import NavArrow from "../navArrow/NavArrow";
// import useNavTitles from '@/utils/hooks/useNavTitles';

export default function Nav({ children, ...props }) {
  // const { angle, title, href } = useNavTitles();
  const { angle, text, href } = props.navArrowObject;

  return (
    <nav className={styles.nav}>
      <NavArrow href={href} angle={angle}>{text}</NavArrow>
    </nav>
  );
}