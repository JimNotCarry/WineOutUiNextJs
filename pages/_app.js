import '../styles/globals.scss';
import '@/components/login/styles/_index.scss';
import '@/components/mypage/styles/_index.scss';
import '@/components/diary/styles/_index.scss';
import '@/components/upload-image/styles/_index.scss';
import Layout from '@/components/base-layout.tsx';

import { Provider } from 'react-redux';
import store from '@/redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
