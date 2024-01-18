import NextHead from 'next/head';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';


export default function Head({
    title = "Charlie Meyer",
    description = "Hey, I'm Charlie. Thanks for stopping by.",
    date,
    keywords = [],
    categories = [],
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

            {/* keywords */}
            {keywords.length > 0 && (
                <meta name="keywords" content={keywords.join(", ")} />
            )}

            {/* categories */}
            {categories.length > 0 && (
                <meta name="categories" content={categories.join(", ")} />
            )}

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
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-DE7WPWGVDW" />
            <script>
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-DE7WPWGVDW');`}
            </script>
            {children}
        </NextHead>
    );
}
