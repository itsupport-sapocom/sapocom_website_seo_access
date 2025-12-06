import { Provider } from 'react-redux';
import Layout from '../layouts/Layout';
import store from '../store/store';
import Script from 'next/script';
import '../styles/globals.css';
import '../styles/fonts.css';
import { useRouter } from 'next/router';
import AdminLayout from '@/layouts/admin/AdminLayout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const adminLayout =
    router.pathname.startsWith('/admin') && router.pathname != '/admin';
  const shouldAddLocalOrganizationSchema =
    router.pathname === '/' ||
    router.pathname === '/about-us' ||
    router.pathname === '/contact-us';

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="hm_HJk6oWbg7rEEEI90QXcNeyefvopyuSNsvq3hCUJQ"
        />
      </Head>
      <Provider store={store}>
        {adminLayout ? (
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Provider>
      {shouldAddLocalOrganizationSchema && (
        <>
          <Script id="organisation" type="application/ld+json">
            {`{
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "SAPOCOM Technologies",
            "url": "https://www.sapocomglobal.com/",
            "logo": "https://www.sapocomglobal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.5a1837bf.png&w=128&q=75",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "95679 30025",
              "contactType": "technical support",
              "contactOption": "HearingImpairedSupported",
              "areaServed": ["US","GB","AE","IN"],
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://www.linkedin.com/in/sapocom-technologies-79382b231/",
              "https://www.sapocomglobal.com/"
            ]
          }`}
          </Script>
          <Script id="local" type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SAPOCOM TECHNOLOGIES",
              "image": "https://lh3.googleusercontent.com/p/AF1QipM6MtfjLesdYhRJjVBGZoxI0A7gikiKqJXoxDGj=s1360-w1360-h1020-rw",
              "@id": "",
              "url": "https://share.google/FArTCPOFWLzmKkKIq",
              "telephone": "095679 30025",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "UNISPACE, Plot no. 128, EPIP Zone, Whitefield",
                "addressLocality": "Bengaluru, Karnataka",
                "postalCode": "560066",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.9766018,
                "longitude": 77.71840329999999
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "10:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.linkedin.com/in/sapocom-technologies-79382b231/",
                "https://www.sapocomglobal.com/"
              ] 
            }`}
          </Script>
        </>
      )}
      <Script id="breadcrumbs" type="application/ld+json">
        {`{
            "@context": "https://schema.org/", 
            "@type": "BreadcrumbList", 
            "itemListElement": [{
              "@type": "ListItem", 
              "position": 1, 
              "name": "Home",
              "item": "https://www.sapocomglobal.com/"  
            },{
              "@type": "ListItem", 
              "position": 2, 
              "name": "About",
              "item": "https://www.sapocomglobal.com/about-us"  
            },{
              "@type": "ListItem", 
              "position": 3, 
              "name": "Support",
              "item": "https://sapocomglobal.com/services/support"  
            },{
              "@type": "ListItem", 
              "position": 4, 
              "name": "Serivce",
              "item": "https://www.sapocomglobal.com/services"  
            },{
              "@type": "ListItem", 
              "position": 5, 
              "name": "Careers",
              "item": "https://www.sapocomglobal.com/careers"  
            }]
          }`}
      </Script>
    </>
  );
}
