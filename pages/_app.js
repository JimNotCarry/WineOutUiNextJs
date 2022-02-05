import '../styles/globals.scss';
import '@/components/login/styles/_index.scss';
import '@/components/mypage/styles/_index.scss';
import Layout from '@/components/base-layout.tsx';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
