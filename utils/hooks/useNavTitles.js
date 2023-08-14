import { useRouter } from "next/router";
import NavTitlesAndAngles from "@/static/types/NavTitlesAndAngles";

export default function useNavTitles() {
  const router = useRouter();
  const { pathname } = router;

  const matchingObject = NavTitlesAndAngles[pathname];

  return (
    matchingObject || {
      angle: 180,
      text: "FUCK",
      href: "/",
      pageTransition: {
        initial: {
          x: "100%",
        },
        animate: {
          x: 0,
        },
        exit: {
          x: "-100%",
        },
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    }
  );
}
