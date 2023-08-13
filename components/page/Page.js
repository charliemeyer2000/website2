import classNames from "classnames";
import CustomHead from "../customHead/CustomHead";
import styles from './Page.module.scss'

export default function Page(props) {
  const { title, description, date, children } = props;

  return (
    <div className={classNames(styles.container)}>
      <CustomHead title={title ? `${title} | Charlie Meyer` : "Charlie Meyer"} description={description} date={date}>
        {/* add header here */}

        <main className={classNames(styles.main)}>
            {children}
        </main>

      </CustomHead>
    </div>
  );
}
