import React, { Component } from 'react';
import Header from './Components/Header/Header';
import ColorList from './Components/List/ColorList';
import Form from './Components/Form/Form';
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

// prendre la valeur de l'input
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    event.preventDefault();
    this.setState({[name] : value});
  }

// Modifier la couleur du background
  changeColor = (color)=> {
    this.setState({
      objStyle : {backgroundColor: color}
    });
  }

  addColor = () => {
    this.setState( (state) => {
      state.colors = state.colors.concat({id:this.state.colors.length+1,name:this.state.nameColor, color:this.state.color});
    });
  }
// supprimer la dernière couleur
  btnDelete= () => {
    this.setState( (state) => {
      state.colors = state.colors.slice(0, state.colors.length-1);
      return state.colors;
    });
  }

// Function qui génère une couleur aléatoire
  getRandomColor=() => {
    this.setState((state)=> {
      const random = Math.floor(Math.random(this.state.colors.length) * 10);
      state.colors = state.colors[random];
      console.log(random);
      return state.colors;
    });
  }

  render() {
    return (
      <div className="App">
        <Header objStyle={this.state.objStyle}/>
        <p className="App-intro">
          Quand je clique sur le bouton, je change la couleur
        </p>
        <ColorList colors={this.state.colors} onChange={this.handleCHange} changeColor={this.changeColor}/>
        <Form addColor={this.addColor} btnDelete={this.btnDelete} handleChange={this.handleChange}/>
        <button onClick={this.getRandomColor}>Random !</button>
      </div>
    );
  }
}
export default App;
