import Page from '@/components/page/Page';
import styles from './guestbook.module.scss';
import useViews from '@/utils/hooks/useViews';
import GuestbookNote from '@/components/guestbookNote/GuestbookNote'
import { useSession, signIn, signOut } from 'next-auth/react'
import GitHubLogin from '@/components/GitHubLogin/GitHubLogin';
import { useState } from 'react';
import useGuestbook from '@/utils/hooks/useGuestbook';

export default function Guestbook() {

    const handleNumberFormatting = (num) => {
        if (typeof num !== "number") return num;
        return new Intl.NumberFormat("en-US").format(num);
    };

    const { numViews } = useViews('guestbook')
    const dateOptions = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date().toLocaleDateString("en-US", dateOptions);

    // next auth session
    const { data: session, status } = useSession();

    // guestbook
    const { addNote } = useGuestbook();

    // note
    const [note, setNote] = useState("");

    const handleNoteTyping = (e) => {
        // if they click enter or return, submit the note
        if (e.key === "Enter") {
            console.log('fuck me');
            addNote({
                author: session.user.name,
                note: note,
            })
        }

        // limit to 50 characters
        const inputText = e.target.value;

        if (inputText.length > 50) return;
        setNote(inputText);
    }
    return (

        <Page title="Guestbook" description="Leave me a message!">
            <div className={styles.headerContainer}>
                <h1 className={styles.title}>Guestbook</h1>
                <GitHubLogin></GitHubLogin>
                {" "}
                <p className={styles.date}>
                    {date.toString()} |{" "}
                    {`${handleNumberFormatting(numViews)} ${numViews !== 1 ? "views" : "view"
                        }`}
                </p>
            </div>
            <div>
                {session && (
                    <div className={styles.formContainer}>
                        <input className={styles.input} type="text" placeholder="Leave a note..."
                            value={note} onKeyPress={(e) => handleNoteTyping(e)} onChange={(e) => handleNoteTyping(e)} />

                        <div className={styles.userContainer}>
                            {note.length > 0 && (
                                <p className={styles.submitNote}>
                                    Press enter to submit.
                                </p>
                            )}
                            <p className={styles.noteLength}>{50 - note.length}</p>
                        </div>

                    </div>
                )}
                <GuestbookNote
                    date="1/18/24"
                    note="Hello from the universe!"
                    author="Charlie Meyer"
                />
            </div>
        </Page>
    )
}

