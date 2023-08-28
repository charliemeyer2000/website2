import Page from "@/components/page/Page";

export default function Custom404() {
  return (
    <Page description="404 - Page not found" title="404">
      <h1>404 - Not Found</h1>
      <p style={{ marginTop: "var(--gap-double)", lineHeight: "var(--title)" }}>
        Did you know that the 404 error page originates from a room number at
        CERN?
      </p>
    </Page>
  );
}
