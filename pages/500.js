import Page from "@/components/page/Page";

export default function Custom500() {
  return (
    <Page title="Server Error" description="500 - Server Error">
      <h1>500 - Server Error</h1>
      <p style={{ marginTop: "var(--gap-double)" }}>
        An error occurred on the server.
      </p>
    </Page>
  );
}
