import styles from './GitHubLogin.module.scss';
import WhiteGitHub from '@/static/icons/github-mark-white.svg';
import GitHub from '@/static/icons/github-mark.svg';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

export default function GitHubLogin() {

    const { data: session, status } = useSession();

    const [hover, setHover] = useState(false);

    return (
        <button className={styles.button} onClick={session ? signOut: signIn } onMouseLeave={() => setHover(false)} onMouseOver={() => {
            setHover(true);
        }}>
            <Image
                src={hover ? GitHub: WhiteGitHub }
                alt="GitHub Logo"
                className={styles.icon}
                width={16}
                height={16}
            />
            <p className={styles.text}>
                {session ? `Hey, ${session.user.name}!`: "Authenticate with GitHub to leave a note."}
            </p>
        </button>
    )


}
