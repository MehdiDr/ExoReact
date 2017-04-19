import React from 'react';
import './../../Components/Style/List/List.css';

const ListItem = (props) =>
         <li key={props.id}>
           <button style={{backgroundColor: props.color}} onClick={() => props.changeColor(props.color)}>{props.name}</button>
         </li>;

export default ListItem;
