import Page from '@/components/page/Page';
import styles from './guestbook.module.scss';
import useViews from '@/utils/hooks/useViews';
import GuestbookNote from '@/components/guestbookNote/GuestbookNote'
import { useSession, signIn, signOut } from 'next-auth/react'
import GitHubLogin from '@/components/GitHubLogin/GitHubLogin';
import { useState, useEffect } from 'react';
import useGuestbook from '@/utils/hooks/useGuestbook';

export default function Guestbook() {

    const handleNumberFormatting = (num) => {
        if (typeof num !== "number") return num;
        return new Intl.NumberFormat("en-US").format(num);
    };

    const { numViews, updateItem } = useViews('guestbook')

    useEffect(() => {
        updateItem('guestbook');
    }, [])
    const dateOptions = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date().toLocaleDateString("en-US", dateOptions);

    // next auth session
    const { data: session, status } = useSession();

    // guestbook
    const { addNote, notes, addNoteLocally } = useGuestbook();

    // note
    const [note, setNote] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleNoteTyping = async (e) => {
        // if they click enter or return, submit the note
        if (e.key === "Enter") {
            const res = await addNote({
                author: session.user.name,
                note: note
            })
            if (res.error) {
                setErrorMsg(res.error);
                setTimeout(() => {
                    setErrorMsg("");
                }, 3000)
            }
            setNote(prevNote => "");
        } else {
            // limit to 50 characters
            const inputText = e.target.value;
            if (inputText.length > 50) return;
            setNote(inputText);
        }


    }

    return (

        <Page title="Guestbook" description="Leave me a message!">
            <div className={styles.headerContainer}>
                <h1 className={styles.title}>Guestbook</h1>
                <p className={styles.description}>
                    Leave me a message!
                </p>
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
                            {errorMsg && (
                                <p className={styles.submitNote}>
                                    {errorMsg}
                                </p>
                            )}
                            <p className={styles.noteLength}>{50 - note.length}</p>
                        </div>

                    </div>
                )}
                <div className={styles.listWrapper}>
                {notes.map((note) => (
                    <GuestbookNote
                        key={note.note.S}
                        date={new Date(note.createdAt.S).toLocaleDateString(
                            "en-US",
                            dateOptions
                        )}
                        note={note.note.S}
                        author={note.author.S}
                    />
                ))
                }
                </div>
            </div>
        </Page>
    )
}

