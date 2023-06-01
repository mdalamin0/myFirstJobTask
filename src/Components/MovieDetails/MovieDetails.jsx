import { Link, useLoaderData, useParams } from "react-router-dom";


const MovieDetails = () => {
    const loadedMovies = useLoaderData();
    const movieId = useParams();
    const singleMovie = loadedMovies.find(movie => movie.show.id == movieId.movieId);
    const { image, summary, name, language, type, genres, network } = singleMovie.show;

    const handleAddMovie = (movie) => {
        
        let movieData = [movie];
        const storeMovie = localStorage.getItem('movie');
        if (storeMovie) {
            movieData.push(JSON.parse(storeMovie));
        }

        localStorage.setItem('movie', JSON.stringify(movieData));
    }
    return (
        <div className="col w-50 mx-auto my-5">
            <div className="card shadow">
                <img src={image?.original} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title fw-bold">Name: {name}</h3>
                    <h5 className="card-title">Language: {language}</h5>
                    <p>Type: {type}</p>
                    <p>Genres: {genres}</p>
                    <p>Country: {network?.country?.name}</p>
                    <p className="card-text text-secondary"> {summary} </p>
                    <div className="d-flex justify-content-between">
                        <Link to='/'><button className="btn btn-outline-primary">Back to Home</button></Link>
                        <button onClick={() => handleAddMovie(singleMovie.show)} className="btn btn-primary">Add a Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;