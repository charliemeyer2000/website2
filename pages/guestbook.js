import Page from '@/components/page/Page';
import styles from './guestbook.module.scss';


export default function Guestbook() {

    const handleNumberFormatting = (num) => {
        if (typeof num !== "number") return num;
        return new Intl.NumberFormat("en-US").format(num);
    };

    const numViews = 0;
    const dateOptions = { month: "long", day: "numeric", year: "numeric"};
    const date = new Date().toLocaleDateString("en-US", dateOptions);

    return (

        <Page title="Guestbook" description="Leave me a message!">
            <div className={styles.headerContainer}>
                <h1 className={styles.title}>Guestbook</h1>
                <p className={styles.description}>Add a comment to my guestbook!</p>
                {" "}
                <p className={styles.date}>
                    {date.toString()} |{" "}
                    {`${handleNumberFormatting(numViews)} ${numViews !== 1 ? "views" : "view"
                        }`}
                </p>
            </div>
        </Page>
    )
}

