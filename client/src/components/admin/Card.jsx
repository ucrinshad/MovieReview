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