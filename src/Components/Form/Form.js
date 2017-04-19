import React from 'react';
import Button from './Button';
import Input from './Input';
import './../../Components/Style/Form/Form.css';

const Form = (props) =>
<form onSubmit={props.handleChange} className="form">
  <h3>ADD A COLOR</h3>
  <p>Color Name : </p>
  <Input function={props.handleChange} name='nameColor'/>
  <Input function={props.handleChange} name='color' />
  <p>HEX Color : </p>
  <Button function={props.addColor} type="button" title="add a color" className="button"/>
  <Button function={props.btnDelete} type="button" title="delete the last benjamin button" className="button" />
  {/* <input type='text' name='color' onChange={props.handleChange}></input><br></br> */}
</form>;

export default Form;
