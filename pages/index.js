import Link from 'next/link';
import { useRouter } from 'next/router';
import Seo from '../components/Seo';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          id: id,
          title: title,
        },
      },
      `/movies/${id}`
    );
  };
  return (
    <div>
      <Seo title='Home' />
      <article>
        {results?.map((movie) => (
          <div
            onClick={() => onClick(movie.id, movie.original_title)}
            className='container'
            key={movie.id}
          >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Link href={`/movies/${movie.id}`}>
              <h4>{movie.original_title}</h4>
            </Link>
            <p>⭐️ {movie.vote_average}</p>
          </div>
        ))}
      </article>
      <style jsx>{`
        article {
          max-width: 480px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          flex-wrap: wrap;
        }
        .container {
          position: relative;
          width: 235px;
          height: 450px;
          margin-bottom: 10px;
          background-color: #ededed78;
          box-shadow: 2px 2px 5px #7d7d7dab;
          padding: 20px 10px;
          box-sizing: border-box;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container:hover {
          scale: 1.05;
          background-color: #ededed;
        }
        .container img {
          width: 100%;
          background-size: 100%;
        }
        .container h4 {
          margin: 10px 0 0 0;
          font-family: fantasy;
        }
        .container p {
          position: absolute;
          bottom: 5px;
          margin: 0;
          font-family: sans-serif;
        }
      `}</style>
    </div>
  );
}

// calles in server
export async function getServerSideProps() {
  const { results } = await (
    await fetch('http://localhost:3000/api/movies')
  ).json();
  return {
    props: {
      results,
    },
  };
}
