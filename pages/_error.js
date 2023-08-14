const { default: Page } = require("@/components/page/Page");

function Error({ statusCode }) {
  return (
    <Page description="An error occured" title="Error">
      <h1>An error occurred</h1>
      <p style={{ marginTop: "var(--gap-double)" }}>{statusCode}</p>
    </Page>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
