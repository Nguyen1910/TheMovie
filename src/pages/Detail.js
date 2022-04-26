import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import apiConfig from "../api/ApiConfig";
import tmdbApi from "../api/tmdbApi";
import "./../Components/Button";
import "./detail.css";
import Button from "./../Components/Button";
import CastList from "./../Components/CastList";
import Video from "../Components/Video/Video";

const Detail = () => {
  const { category, id } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const result = await tmdbApi.getMovie(category, id);
      setGenres(result.genres);
      setMovie(result);
      // console.log(result.genres);
    };
    getMovie();
  }, []);

  return (
    <>
      <div
        className="detail_container"
        style={{
          backgroundImage: `url(${apiConfig.originalImagePath(
            movie.backdrop_path
          )})`,
        }}
      >
        <div className="detail_movie">
          <div className="detail__poster">
            <img
              src={`${apiConfig.w500lImagePath(movie.poster_path)}`}
              alt=""
            />
          </div>
          <div className="detail__infor">
            <h2 className="detail_title_movie">
              {movie.original_title || movie.name}
            </h2>
            <p className="detail_overview">{movie.overview}</p>
            <p className="releases_date">
              Release Date: {movie.release_date || movie.first_air_date}
            </p>
            <div className="genre">
              {/* {movie.genres} */}
              {genres.map((genre, index) => (
                <Button key={index} type="btn_no_outline">
                  {genre.name}
                </Button>
              ))}
            </div>
            <div className="vote">
              <div className="vote_average">
                <StarRatings
                  rating={movie.vote_average}
                  starRatedColor="yellow"
                  numberOfStars={10}
                  starSpacing={"1"}
                  starDimension={"25"}
                  name="rating"
                />
              </div>
              <p className="vote_count">({movie.vote_count} vote)</p>
            </div>
            <div className="watch">
              <Button type="btn">
                <a href="#trailer">Watch Now</a>
              </Button>
              <Button type="btn">
                <a href="#trailer">Watch Trailer</a>
              </Button>
              <Button type="btn">
                <a href="#">Add Favorites</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CastList category={category} id={id}></CastList>
      <Video category={category} id={id} />
    </>
  );
};

export default Detail;
