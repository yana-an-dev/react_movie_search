import React from "react"
export default function SearchMovies() {
    return (
        <form className="">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Titanic " />
            <button className="button" type="submit">Search</button>
        </form>
    )
}