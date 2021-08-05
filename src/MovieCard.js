import React from "react"
export default function MovieCard({ movie }) {
    //const movie = props.movie 
    //const {movie} = props
    return (
        <div className="card">
            <img className="card--image"
                src={`https://www.themoviedb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}

                //  `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}

                alt={movie.title + 'poster'} />

            <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p><small>Release data: {movie.release_date}</small></p>
                <p><small>Rating: {movie.vote_average}</small></p>
                <p className="card--desc">{movie.overview}</p>
            </div>

        </div>
    )
}