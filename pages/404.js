import Page from "@/components/page/Page";
import { useEffect } from "react";

export default function Custom404() {
  // useEffect(() => {
  //   const unsubscribe = window.addEventListener("click", () => {
  //     window.history.back();
  //   });

  //   return unsubscribe;
  // }, []);


  return (
    <Page description="404 - Page not found" title="404">
      <h1>404 - Not Found</h1>
      <p style={{ marginTop: "var(--gap-double)" }}>
        Did you know that the 404 error page originates from a room number at
        CERN?
      </p>
    </Page>
  );
}
