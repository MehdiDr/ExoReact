import React from 'react';

const Button = (props) =>
<button onClick={props.function} type={props.type} className={props.className}>{props.title}</button>;

export default Button;
