import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        {/* stylesheet for syntax highlighting */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
        {/* stylesheet for katex */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
          crossOrigin="anonymous"
        />
        {/* add openGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://charliemeyer.xyz" />
        <meta property="og:title" content="Charlie Meyer" />
        <meta
          property="og:description"
          content="Hey, I'm Charlie. Thanks for stopping by."
        />
        {/* add favicon */}
        {/* <link rel="shortcut icon" href="/static/images/arrow.png" />
        <link rel="apple-touch-icon" href="/static/images/arrow.png" /> */}

        <link rel="shortcut icon" href={"/main-img.png"} />
        {/* <link
          rel="icon"
          type="image/png"
          sizes="29x36"
          href="/static/images/arrow-dark.png"
          id="dark-scheme-favicon"
        /> */}

        {/* OG image */}
        <meta property="og:image" content="/main-img.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
