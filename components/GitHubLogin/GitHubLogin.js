import styles from './GitHubLogin.module.scss';
import WhiteGitHub from '@/static/icons/github-mark-white.svg';
import GitHub from '@/static/icons/github-mark.svg';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from "next-themes";

export default function GitHubLogin() {

    const { data: session, status } = useSession();

    const [hover, setHover] = useState(false);


    // get the theme
    const { theme: activeTheme, systemTheme, setTheme } = useTheme();

    const isDarkMode =
        activeTheme === "dark" ||
        activeTheme === undefined ||
        systemTheme === "light";
    return (
        <button className={styles.button} onClick={session ? signOut : signIn} onMouseLeave={() => setHover(false)} onMouseOver={() => {
            setHover(true);
        }}>
            <Image
                src={hover ? (isDarkMode ? GitHub : WhiteGitHub) : (isDarkMode ? WhiteGitHub : GitHub)} // this is so ugly but you get the idea
                alt="GitHub Logo"
                className={styles.icon}
                width={16}
                height={16}
            />
            <p className={styles.text}>
                {session ? `Hey, ${session.user.name}!` : "Authenticate with GitHub to leave a note."}
            </p>
        </button>
    )


}
