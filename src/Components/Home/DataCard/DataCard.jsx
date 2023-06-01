import { Link } from "react-router-dom";

const DataCard = ({ movie }) => {
    const { name, image, summary, id } = movie;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image.original} className="card-img-top h-50" alt="..."/>
                    <div className="card-body mt-5">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-text text-secondary"> {summary.slice(0, 200)} </p>
                        <Link to={`/details/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
            </div>
        </div>
    );
};

export default DataCard;