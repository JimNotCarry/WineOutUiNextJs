import '../styles/globals.scss';
import '@/components/Login/styles/_index.scss';
import '@/components/mypage/styles/_index.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
