import React, { useEffect, useState } from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./movielist.css";
import MovieCard from "./../MovieCard";
import tmdbApi, { movieType } from "../../api/tmdbApi";

const Index = ({ category, type }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getList = async () => {
      const result = await tmdbApi.getMovieList(category, type, { page: 1 });
      setItems(result.results);
    };
    getList();
  }, [category]);

  return (
    <div className="container_list">
      <div className="title-list">
        <h2 className="title-list-movie">
          {category} {type}
        </h2>
        <span className="view-more">
          <Link to={`/${category}/${type}`}>View More</Link>
        </span>
      </div>
      <div className="movie_list">
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          slidesPerGroup={1}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
              slidesPerGroup: 4,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
              slidesPerGroup: 5,
            },
          }}
        >
          {items.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard data={movie} category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Index;
