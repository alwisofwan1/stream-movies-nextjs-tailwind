/* eslint-disable react/react-in-jsx-scope */
import { DefaultSeo } from 'next-seo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/react-in-jsx-scope
  // return <Component {...pageProps} />
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Alwi Sofwan"
        description="I am a frontend developer who is studying javascript with react js technology. "
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          // url: 'https://alwisofwan.com/',
          site_name: 'Alwi Sofwan',
          images: [
            {
              url: 'https://avatars.dicebear.com/api/avataaars/alwi%20sofwan.svg',
              width: 296,
              height: 330,
              alt: 'Alwi Sofwan'
            }
          ]
        }}
      />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
