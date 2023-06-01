import { useEffect, useState } from "react";
import DataCard from "./DataCard/DataCard";

const Home = () => {
    const [loadedMovies, setLoadedMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setLoadedMovies(data))
    }, [])

    return (
        <div className="my-5">
            <h3 className="my-4 text-center">Our Available Movie: {loadedMovies.length}</h3>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    loadedMovies.map(movie => <DataCard
                        key={movie.show.id}
                        movie={movie.show}
                    ></DataCard>)
                }
            </div>
        </div>
    );
};

export default Home;