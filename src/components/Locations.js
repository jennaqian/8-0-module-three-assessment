import "../App.css"
import React from "react"

class Locations extends React.Component {
    constructor(){
        super()
        this.state = {
            show: false,
            loc: [],
        }

    }

    fetchLocation = () => {
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res=> res.json())
            .then(data => {
                this.setState({
                    loc: data,
                })
            })
    }
    componentDidMount = () => {
        this.fetchLocation()
    }

    handleShow = (e) => {
        this.setState({
            show: !this.state.show,
        })
    }

    render() {
        const {loc, show} = this.state
        let locationsArr = loc.map((l) => {
            return <li>
                <p>Name: {l.name}</p>
                <p>Climate: {l.climate}</p>
                <p>Terrain: {l.terrain}</p>
                </li>
        })

        return (
            <div className="locations">
                <h1>List of Locations</h1>
                <button onClick={this.handleShow}>{!show ? "Show Locations" : "Hide Locations"}</button>

                <ul>
                    {show? locationsArr: null}
                </ul>
            </div>
        )
    }
}

export default Locations;