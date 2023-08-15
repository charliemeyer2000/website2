import { useRouter } from "next/router";
import NavTitlesAndAngles from "@/static/types/NavTitlesAndAngles";

export default function useNavTitles() {
  const router = useRouter();
  const { pathname } = router;

  const matchingObject = NavTitlesAndAngles[pathname];

  return (
    matchingObject || {
      angle: 180,
      text: "Back",
      href: "/",
      pageTransition: {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
        },
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    }
  );
}
