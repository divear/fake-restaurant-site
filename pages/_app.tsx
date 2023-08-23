import Nav from '../components/Nav'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPathname = router.pathname;
  console.log(currentPathname)

  const isMain = currentPathname === '/' ? 'navMain' : 'nav';
  return <>
    <Nav />
    <Component {...pageProps} />
  </>
}
