import NextHead from 'next/head';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';


export default function Head({
  title = "Charlie Meyer",
  description = "Hey, I'm Charlie. Thanks for stopping by.",
  date,
  children,
}) {
  const path = useRouter().pathname;
  return (
    <NextHead>
      {/* title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* date */}
      {date && <meta name="date" content={date} />}

      {/* description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* canonical */}
      <meta name="og:url" content="https://charliemeyer.xyz" />
      <link key="canonical" rel="canonical" href={path} />

      {/* general */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="apple-mobile-web-app-title" content="Paco" />
      <meta name="author" content="Charlie Meyer" />
      <meta
        name="keywords"
        content="Charlie Meyer, CharlieMeyerXyz, Coding, React, Software Engineering"
      />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="Charlie Meyer" />

      {/* favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://em-content.zobj.net/thumbs/120/apple/325/waving-hand_1f44b.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://em-content.zobj.net/thumbs/120/apple/325/waving-hand_1f44b.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://em-content.zobj.net/thumbs/120/apple/325/waving-hand_1f44b.png"
      />

      {children}
    </NextHead>
  );
}