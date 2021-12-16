import "../App.css"
import React from "react"

class Movies extends React.Component {
    constructor(){
        super()

        this.state = {
            movies: [],
            selectedMovie: [],
        }
    }

    fetchMovies = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res=> res.json())
            .then((data) => {
                this.setState({movies:data})
            })
    }

    componentDidMount = () => {
        this.fetchMovies()
    }

    handleChange = (e) => {
        let currentMovieObject = this.state.movies.find((movie) => {
            return movie.title === e.target.value;
        });
        
        this.setState({
            selectedMovie:currentMovieObject,
        })
    }

    render() {
        const {movies, selectedMovie} = this.state

        let movie = movies.map((movie) => {
            return <option>{movie.title}</option>
        })

        
        return (
            <div className="movies">
                <h1>Select a Movie</h1>
                <select onChange={this.handleChange}>
                    <option></option>
                    {movie}
                </select>

                {this.state.selectedMovie
                    ? <div>
                        <h1>Title: {selectedMovie.title}</h1>
                        <p>Release Date: {selectedMovie.release_date}</p>
                        <p>Description: {selectedMovie.description}</p>
                    </div> 
                    : null}
            </div>
        )
    }
}

export default Movies;