import React from 'react';
import Head from 'next/head';

function SetHeaders({
  title = 'Sapocom',
  description = 'SAPOCOM Technologies, a sap based company to provide asap solutions to be at top in this world',
  canonicalRoute = '/',
  keywords = 'Sapocom',
  image = 'https://sapocomglobal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-sapocom-section.381abdb9.png&w=640&q=75',
}) {
  const url = `https://www.sapocomglobal.com${canonicalRoute}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="og:description" content={description}></meta>
        <meta name="og:url" content={url}></meta>
        <meta name="og:image" content={image}></meta>
        <meta property="og:type" content="website" />

        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
        <meta name="author" content="Sapocom" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="robots" content="index, follow"></meta>

        <link rel="canonical" href={url} />
      </Head>
    </>
  );
}

export default SetHeaders;
