import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {


  state = {
    colors : [
          {id:1, name:'violet', color:'#f5aafb'},
          {id:2, name:'marin blue', color:'rgb(43, 77, 153)'},
          {id:3, name:'pale green', color:'#aafbde'},
          {id:4, name:'vermillon', color:'#fe532e'},
          {id:5, name:'sky blue', color:'#82c4fa'},
          {id:6, name:'salmon', color:'#fb8b8b'},
    ]
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    event.preventDefault();
    this.setState({[name] : value});
  }

  changeColor(color) {
    this.setState({
      objStyle : {backgroundColor: color}
    });
  }

  addButton(){
    this.setState( (state) => {
      state.colors = state.colors.concat({id:this.state.colors.length+1,name:this.state.nameColor, color:this.state.color});
    });
  }

  btnDelete(){
    this.setState( (state) => {
      state.colors = state.colors.slice(0, state.colors.length-1);
      return state.colors;
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" style={this.state.objStyle}>
          <img src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAsNAAAAJDYzODMwZWFiLWIwYmUtNDE0MC04MTY1LTEwMTE2OWI2NzJkZA.jpg' className="App-logo" alt="logo" />
          <h2>Coloring button avec Davido qui tourne</h2>
        </div>
        <p className="App-intro">
          Quand je clique sur le bouton, je change la couleur
        </p>
        <div className="container">
        <ul className="color-container"> {
          this.state.colors.map(item =>
             <li><button style={{backgroundColor: item.color}} onClick={() => this.changeColor(item.color)}>{item.name}</button></li>
           )
           }
        </ul>
        <form onSubmit={this.handleChange} className="addColor">
          <h3>ADD A NEW COLOR</h3>
          <p>Color Name : </p>
          <input type='text' name='nameColor' onChange={this.handleChange}></input>
          <p>HEX Color : </p>
          <input type='text' name='color' onChange={this.handleChange}></input><br></br>
          <button type='submit' className="btnAdd" onClick={() => this.addButton()}>Add color</button>
          <button className="btnDelete" onClick={() =>this.btnDelete()}> Delete the last color</button>
        </form>
      </div>
      </div>
    );
  }
}

export default App;
