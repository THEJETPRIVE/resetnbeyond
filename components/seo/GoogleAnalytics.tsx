import Script from "next/script";

/**
 * GoogleAnalytics - GA4, activated purely by environment.
 *
 * Set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) in Vercel and this renders;
 * leave it unset and the site ships zero Google scripts. Vercel
 * Analytics remains the primary, cookieless measurement layer either way.
 */
export function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
