import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div className='main'>
      <NavBar />
      <div>{children}</div>
      <style jsx>{`
        .main {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: #222222;
        }
      `}</style>
    </div>
  );
}
