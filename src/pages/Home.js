import MovieList from './../Components/MovieList'
import Slider from './../Components/Slider'
import { CATEGORY, MOVIETYPE, TVTYPE } from '../api/tmdbApi';

const Home = ({category}) => {
    return (
        <div>
            <Slider/>
            {category === undefined && 
            (
                <>
                    <MovieList category={CATEGORY.movie} type={MOVIETYPE.popular} />
                    <MovieList category={CATEGORY.movie} type={MOVIETYPE.top_rated} />
                    <MovieList category={CATEGORY.movie} type={MOVIETYPE.upcoming} />
                    <MovieList category={CATEGORY.tv} type={TVTYPE.popular} />
                    <MovieList category={CATEGORY.tv} type={TVTYPE.top_rated} />
                </>
            )}
        </div>
    );
};

export default Home;