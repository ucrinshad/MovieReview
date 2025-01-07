import { Link } from "react-router-dom"

export const MovieCard = ({movie}) =>{
    return(
        <div className="card card-compact bg-amber-200 w-96 shadow-xl">
            <figure>
                <img src={movie?.image} alt="movie" />
            </figure>
            <dir className="card card-body">
                <h2 className="card-title">{movie?.title}</h2>
                <p>{movie?.duration}</p>
                <span>{movie?.description}</span>
                <div className="card-actions justify-end">
                    <Link to={`movieDetails/${movie?._id}`}>
                    <button className="btn btn-primary">More Details</button></Link>
                </div>
            </dir>
        </div>

    )
}

export const UserCard = ({user}) =>{
    return(
        <div className="card card-compact bg-amber-200 w-96 shadow-xl">
            <figure>
                <img src={user?.profilePic} alt="user" />
            </figure>
            <dir className="card card-body">
                <h2 className="card-title">{user?.name}</h2>
                
                <div className="card-actions justify-end">
                    <Link to={`movieDetails/${movie?._id}`}>
                    <button className="btn btn-primary">More Details</button></Link>
                </div>
            </dir>
        </div>

)
} 
 

export const WishlistCards = ({ item }) => {
    return (
        <div className="flex w-full h-32 items-center gap-20 bg-base-300 mb-10 rounded-md">
            <div>
                <h2>{item?.title}</h2>
                <img src={item?.image} alt="movieIMG" className="w-24 h-20" />
            </div>

            <button className="btn btn-secondary">Remove</button>
        </div>
    );
};



