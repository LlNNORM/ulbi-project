import React from 'react';
import classes from './MyInput.module.css';

// Чтобы передать ссылку ref в кастомный неуправляемый input, 
// нам необходимо обернуть нашу функции в функцию React.forwardRef()
const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref= {ref} {...props} className={classes.myInput}/>
    );
});

export default MyInput;