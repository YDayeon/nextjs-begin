import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

export default function CutomApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
