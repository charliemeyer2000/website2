import styles from "./SoundToggle.module.scss";
import Image from "next/image";
import volumeOffDark from "@/static/icons/volume-off-dark.svg";
import volumeOffLight from "@/static/icons/volume-off-light.svg";
import volumeOnDark from "@/static/icons/volume-on-dark.svg";
import volumeOnLight from "@/static/icons/volume-on-light.svg";
import { useTheme } from "next-themes";
import useSound from "use-sound";
import { useSoundContext } from "./SoundContext";

export default function SoundToggle() {
  const { theme: activeTheme, systemTheme, setTheme } = useTheme();
  const { soundOn, toggleSound } = useSoundContext();

  const handleToggleSound = () => {
    toggleSound();
    play();
  }

  const soundUrl = "static/audio/wet-click.wav"

  const [play] = useSound(soundUrl, {
    volume: 0.5,
    forceSoundEnabled: true,
  });

  return (
    <div className={styles.soundToggle}>
      {activeTheme === "dark" ||
      activeTheme === undefined ||
      systemTheme === "light" ? (
        <Image
          src={soundOn ? volumeOnDark : volumeOffDark}
          alt="volume toggle"
          width={24}
          height={24}
          onClick={handleToggleSound}
        />
      ) : (
        <Image
          src={soundOn ? volumeOnLight : volumeOffLight}
          alt="volume toggle"
          width={24}
          height={24}
          onClick={handleToggleSound}
        />
      )}
    </div>
  );
}
