import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./../Components/MovieCard";
import tmdbApi from "../api/tmdbApi";
import "./viewmore.css";

const ViewMore = () => {
  const { category, type } = useParams();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovieList = async () => {
      const result = await tmdbApi.getMovieList(category, type, { page: page });
      setMovies((prevMovies) => [...prevMovies, ...result.results]);
    };
    getMovieList();
  }, [page]);
  return (
    <div className="container-viewmore">
      <div className="list_movie_type">
        {movies.map((movie) => (
          <MovieCard
            className="m-b-3"
            key={movie.id}
            data={movie}
            category={category}
          />
        ))}
      </div>
      <div className="load_more" onClick={() => setPage(page + 1)}>
        Load More
      </div>
    </div>
  );
};

export default ViewMore;
