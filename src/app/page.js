"use client" //devtools - renderizar
import {Component} from "react";
import "./stlyles.css" //rekative path
import { Flow_Circular } from "next/font/google";


//Construcotr
class Home extends Component{

  constructor(){
    super();
    //clase padre e hijos
    this.state={
      count: 0
    }
  }


  componentDidMount() {
    console.log("Me Renderizo");
  }
  componentDidUpdate(){
    console.log("Me actualizo")
  }
//estado: todo el Datos/espacio que necesita para funcionar

  aumentar =()=> {
    this.setState({
      count: this.state.count + 1
    })
  }

  decreser =()=>{
    this.setState({
      count: this.state.count - 1
    })
  }

  render(){
    return(
      <div className="container">
        <p> Hola mundo x{this.state.count} </p>
        <button onClick={this.aumentar}>AUMENTAR</button>
        <button onClick={this.decreser}>Deceser</button>
      </div>
    )
  }


}

export default Home;