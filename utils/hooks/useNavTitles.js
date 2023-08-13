import { useRouter } from "next/router";
import NavTitlesAndAngles from "@/static/types/NavTitlesAndAngles";

export default function useNavTitles() {
  const router = useRouter();
  const { pathname } = router;

  const matchingObject = NavTitlesAndAngles[pathname];

  return (
    matchingObject || {
      angle: 0,
      text: "Error",
      href: "/error",
    }
  );
}
