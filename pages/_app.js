import Script from 'next/script'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Histats.com START (async) - ID Baru: 5033731 */}
        <script 
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var _Hasync= _Hasync|| [];
              _Hasync.push(['Histats.start', '1,5033731,4,0,0,0,00010000']);
              _Hasync.push(['Histats.fasi', '1']);
              _Hasync.push(['Histats.track_hits', '']);
              (function() {
                var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
                hs.src = ('//s10.histats.com/js15_as.js');
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
              })();
            `
          }}
        />
      </Head>

      <Component {...pageProps} />

      {/* Noscript Fallback ID Baru */}
      <noscript>
        <a href="/" target="_blank">
          <img src="//sstatic1.histats.com/0.gif?5033731&101" alt="histats" border="0" />
        </a>
      </noscript>
    </>
  )
}
