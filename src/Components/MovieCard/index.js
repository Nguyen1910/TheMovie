import React from "react";
import { Link } from "react-router-dom";
import "./moviecard.css";
import apiConfig from "./../../api/ApiConfig";
const index = ({ data, category, className }) => {
  return (
    <div>
      <div className={`movie__card ${className}`}>
        <Link to={`/${category}/detail/${data.id}`}>
          <img
            src={apiConfig.w500lImagePath(data.poster_path)}
            alt="data.original_title"
          />
          <h3 className="movie_title">
            {data.original_title || data.original_name}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default index;
