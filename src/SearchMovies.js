import React, { useState } from "react"
import MovieCard from './MovieCard'

export default function SearchMovies() {

    const [query, setQuery] = useState('')
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

            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}

            </div>
        </>
    )
}

