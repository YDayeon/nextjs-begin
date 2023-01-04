import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href='/' className={router.pathname === '/' && 'active'}>
        Home
      </Link>
      <span> &nbsp;&nbsp;/&nbsp;&nbsp; </span>
      <Link href='about' className={router.pathname === '/about' && 'active'}>
        About
      </Link>
      <style jsx>{`
        nav {
          max-width: 480px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          padding: 20px 0;
          box-sizing: border-box;
        }
        span {
          color: white;
        }
        nav > :global(a) {
          text-decoration: none;
          color: white;
          font-family: sans-serif;
        }
        nav > :global(a.active) {
          background: rgba(255, 255, 0, 0.299);
        }
      `}</style>
    </nav>
  );
}
