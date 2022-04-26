import {useState, useEffect} from 'react';
import './castlist.css'
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/ApiConfig';

const Index = ({category, id}) => {
    const [casts, setCasts] = useState([])

    useEffect(() =>{
        const getCast = async () => {
            const result = await tmdbApi.getCredit(category, id)
            setCasts(result.cast.splice(0, 10))
        }
        getCast()
    })

    return (
        <div className="cast_container">
            <h2 className="cast_title">Cast</h2>
            <div className="cast">
                {casts.map(cast =>(
                    <div key={cast.id} className="cast_card">
                        <img src={`${apiConfig.w500lImagePath(cast.profile_path)}`} alt=""/>
                        <div className="cast_info">
                            <h4 className="cast_info_name">{cast.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;