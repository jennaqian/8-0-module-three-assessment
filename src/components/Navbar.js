import "../App.css"
import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/"><img className="logo" src="https://toppng.com/uploads/preview/studio-ghibli-icons1-0008-layer16-so-you-wanna-watch-studio-ghibli-icon-11562941157bywibynlrf.png" alt="Ghibli Logo"/></Link>
                <Link className="link" to="/movies">Movies</Link>
                <Link className="link" to="/people">People</Link>
                <Link className="link" to="/locations">Locations</Link>
            </div>
        )
    }
}

export default Navbar;