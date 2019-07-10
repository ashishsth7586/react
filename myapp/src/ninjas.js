import React from 'react';
import './ninjas.css'
/*
// Class Based Component Needs State

class NestedComponent extends Component {
    render(){
        //console.log(this.props)
        const { properties } = this.props;
        const propertyList = properties.map(property => {
            return (
                <div className="property" key={ property.id }>
                    <div>Name: { property.name }</div>
                    <div>Age: { property.age }</div>
                    <div>Color: { property.color }</div>
                </div>
            )
        })
        return (
            <div className="property-list">
                { propertyList }
            </div>
        )
    }
}
export default NestedComponent;
*/
// functional component , Doesn't need state rather values(Data) taken from props

//Alternative to below code. destructuring the arguements of the function.
//const NestedComponent = (props) => {
    //const { properties, deleteProperty } = props;

const NestedComponent = ({ properties, deleteProperty }) => {
    /*const propertyList = properties.map(property => {
        if (property.age > 23) {
            return (
                <div className="property" key={ property.id }>
                    <div>Name: { property.name }</div>
                    <div>Age: { property.age }</div>
                    <div>Color: { property.color }</div>
                </div>
            )
        }
        else {
            return null
        }      
    })    */
    const propertyList = properties.map(property => {
        // syntax: condition ? ( if true ): (false)
        return property.age > 22 ? (
            <div className="property" key={ property.id }>
                <div>Name: { property.name }</div>
                <div>Age: { property.age }</div>
                <div>Color: { property.color }</div>
                <button onClick={() => { deleteProperty(property.id) }}>Delete Property</button>
            </div>
        ) : null;
    })
    return (
        <div className="property-list">
            { propertyList }
        </div>
    )
}
export default NestedComponent