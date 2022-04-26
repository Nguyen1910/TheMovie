import MovieList from './../Components/MovieList'
import { CATEGORY, MOVIETYPE, TVTYPE } from '../api/tmdbApi';

const Category = ({category}) => {
    return (
        <>
        <div className="container">
            {category === CATEGORY.movie && 
            (
                <>
                <MovieList category={category} type={MOVIETYPE.popular} />
                <MovieList category={category} type={MOVIETYPE.top_rated} />
                <MovieList category={category} type={MOVIETYPE.upcoming} />
                </>
            )}
            {category === CATEGORY.tv &&
            (
                <>
                <MovieList category={category} type={TVTYPE.popular} />
                <MovieList category={category} type={TVTYPE.top_rated} />
                </> 
            )
            }
        </div>
        </>
    );
};

export default Category;