import Seo from '../components/Seo';

export default function Home({ results }) {
  return (
    <div>
      <Seo title='Home' />
      <article>
        {results?.map((movie) => (
          <div key={movie.id} className='container'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
            <p>⭐️ {movie.vote_average}</p>
          </div>
        ))}
      </article>
      <style jsx>{`
        article {
          max-width: 480px;
          margin: 0 auto;
          display: flex;
          justify-content: space-evenly;
          box-sizing: border-box;
          flex-wrap: wrap;
        }
        .container {
          position: relative;
          width: 230px;
          height: 420px;
          margin-bottom: 10px;
          background-color: #def5e58d;
          box-shadow: 2px 2px 4px #8ec3b0;
          border-radius: 20px;
          padding: 20px 10px;
          box-sizing: border-box;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container:hover {
          background-color: #def5e5;
        }
        .container img {
          width: 100%;
          background-size: 100%;
        }
        .container h4 {
          margin: 10px 0 0 0;
        }
        .container p {
          position: absolute;
          bottom: 5px;
          margin: 0;
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
