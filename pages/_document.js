import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
         {/* Script that must be inside <head> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4CKQSZF4DS"
        ></script>
      </Head>
      <body>
         {/* Script that must load after <body> starts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-4CKQSZF4DS', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
