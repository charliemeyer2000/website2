import classNames from "classnames";
import CustomHead from "../customHead/CustomHead";
import styles from './Page.module.scss'
import Nav from "../nav/Nav";
import useNavTitles from "@/utils/hooks/useNavTitles";

export default function Page(props) {
  const { title, description, date, children } = props;
  const navArrowObject = useNavTitles();

  return (
    <div className={classNames(styles.container)}>
      <CustomHead
        title={title ? `${title} | Charlie Meyer` : "Charlie Meyer"}
        description={description}
        date={date}
      />
      {/* add header here */}
      <Nav navArrowObject={navArrowObject} />

      <main className={classNames(styles.main)}>{children}</main>
    </div>
  );
}
