import React from "react"

class AddProperty extends React.Component {
    state = {
        name: null,
        age: null,
        color: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addProperty(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" onChange={this.handleChange} />
                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddProperty;