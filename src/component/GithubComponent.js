// imports the react library and SPECIFICALLY calls out the Component part of
// the react library available by "tree shaking"
import React, { Component } from 'react'
// pulling in entire axios library - both react and axios are being import from
// the node modules folder
import axios from 'axios'

// GithubComponent is created from the Component/React.component. It inherets the
// behavior and methods or react components For Example componentDidMount
class GithubComponent extends Component{
  constructor() {
    super()
    // this.state define a space for the component to store data that we can
    //refernce later
    this.state = {
      // we predefine push for documentation for ppl reading & to clear up the
      // loading error we encountered.
      pushup: ''
    }
  }
  //Lifecycle method - that all react components have. LINE 10 when we extend
  //Component we actually get this as a method as one of the items we inheret.
  componentDidMount () {
    // axios library - google it! super easy RESTful actions
    axios.get('https://radiant-headland-78469.herokuapp.com/api/workouts')
    // what to do when we successfully retrieve data from server
    //.then() is built in method of javascript(Promises) it exepects a function as an argument
    // .then(anonnomous function)
    // within anonnomous res AKA what we get from the server is recived by the
    // anonnomous function - .then() passed what it gets into the anonnomous
    // function insde of it
    .then((res)=>{
      // this refers to the closest parent object in this case it's GithubComponent
      // GithubComponent setState is a method inhereted from the react Component
      this.setState({
        // we tell react "HEY! look in res find me data key, oh it's an array? well get me the first item"
        // res.data[0] and assign that to a key of push up
        pushup: res.data[0]
      })

    })
  }
// boiler plate render method inhereted from React Component what we want to display
// as the end game for this component
  render() {
    // you can ONLY RETURN ONE element in react in this case we are returning the outter
    // div - that div has two other elements inside of it. If you want to know why?
    // Google it and let me know.

    // line 54/55 saying "Hey! look in this component - find me its state - then look for something called pushup
    // - then find me the field called description and place it here" {this.state.pushup.description}
    return(
      <div>
        <h1>{this.state.pushup.description}</h1>
        <h2>{this.state.pushup.name}</h2>
       </div>
    )
  }
}
// export default es6 convention vs module.export ...
// There a couple of ways to export. GTS - google that shit.
export default GithubComponent
