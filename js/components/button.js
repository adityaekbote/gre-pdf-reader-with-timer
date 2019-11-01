import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export const Button = ({children, type, onClick, isActive}) => {
    const buttonClasses = ['Button']
    
    type !== null ? buttonClasses.push(`Button--is-${type}`) : buttonClasses.push('Button--is-default')
    isActive ? buttonClasses.push('Button--is-active') : buttonClasses.push('Button--is-inactive')
    
    return (
        <button onClick={onClick} className={buttonClasses.join(' ')}>{children}</button>
    )
}