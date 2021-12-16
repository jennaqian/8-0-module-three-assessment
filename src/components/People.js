import "../App.css"
import React from "react"

class People extends React.Component {
    constructor(){
        super()

        this.state = {
            ppl: [],
            inputName: "",
            selectedP: [],
        }
    }

    fetchPeople = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res=> res.json())
            .then((data) => {
                this.setState({
                    ppl: data,
                })
            })
    }

    componentDidMount = () => {
        this.fetchPeople()
    }

    handleInput = (e) => {
        this.setState({
            inputName: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {ppl, inputName} = this.state

        let person = ppl.find((p) => {
            return p.name.toLowerCase() === inputName.toLowerCase()
        })
        this.setState({
            selectedP: person
        })
    }

    render() {
        const {selectedP} = this.state
        return (
            <div className="people">
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Find Your Person" onChange={this.handleInput}/>
                    <button>Submit</button>
                </form>
                {selectedP 
                    ? <div>
                        <p>Name: {selectedP.name}</p>
                        <p>Age: {selectedP.age}</p>
                        <p>Gender: {selectedP.gender}</p>
                    </div>
                    : "Not Found"}
            </div>
        )
    }
}

export default People;