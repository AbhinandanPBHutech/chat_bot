import { Html, Head, Main, NextScript } from "next/document"; //

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>HTS CHATBOT</title>{" "}
        <meta name="description" content="HTS AI Chatbot " />
        <meta name="og:description" content="HTS AI Chatbot " />
        <meta
          property="og:image"
          content={
            "https://hutechsolutions.com/wp-content/uploads/2023/07/ai.png"
          }
        />
        <meta
          property="og:image:secure_url"
          content={
            "https://hutechsolutions.com/wp-content/uploads/2023/07/ai.png"
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
