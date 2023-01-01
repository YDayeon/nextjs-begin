import NavBar from '../components/NavBar';

export default function CutomApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps}></Component>
      <style jsx global></style>
    </div>
  );
}
