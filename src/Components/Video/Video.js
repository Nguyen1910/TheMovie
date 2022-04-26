import React from "react";
import "./video.css";
import tmdbApi from "../../api/tmdbApi";

function Video(props) {
  const { category, id } = props;
  const [videos, setVideos] = React.useState([]);

  const iframeRef = React.useRef(null);

  React.useEffect(() => {
    const getVideos = async () => {
      const result = await tmdbApi.getVideos(category, id);
      console.log(result.results);
      setVideos(result.results.splice(0, 5));
    };
    getVideos();

    // const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    // console.log(height);
    // iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="container-video">
      {videos.map((item, index) => (
        <div id={index === 0 ? "trailer" : ""} className="video" key={item.key}>
          <div className="video-title">
            <h2>{item.name}</h2>
          </div>
          <iframe
            className="watch-video"
            ref={iframeRef}
            src={`http://www.youtube.com/embed/${item.key}`}
            title="video"
            allowFullScreen="true"
          />
        </div>
      ))}
    </div>
  );
}

export default Video;
