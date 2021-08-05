import React, { useState } from "react"
export default function SearchMovies() {

    //states - input query, movies
    const [query, setQuery] = useState('')
    //create the state for movies, and update that state approriate
    const [movies, setMovies] = useState([])


    const searchMovies = async (e) => {
        e.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=b815a7882493f20c07e4bd2e5d0604d4&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results) // just like this??
            console.log(data.results)
        } catch (err) {
            console.error(err)
        }


    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurrasic Park"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
                <button className="button" type="submit">Search</button>
            </form>

            <div className="card--list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div key={movie.id} className="card">
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
                ))}

            </div>
        </>
    )
}

