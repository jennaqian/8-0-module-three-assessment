import "../App.css"
import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component {
    constructor(){
        super()

    }

    render() {
        return (
            <div className="navbar">
                <Link to="/"><img className="logo" src="https://toppng.com/uploads/preview/studio-ghibli-icons1-0008-layer16-so-you-wanna-watch-studio-ghibli-icon-11562941157bywibynlrf.png" alt="Ghibli Logo"/></Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
            </div>
        )
    }
}

export default Navbar;