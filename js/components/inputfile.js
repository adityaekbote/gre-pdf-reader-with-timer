import { Button } from './button'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class InputFile extends React.Component {
    triggerInput = e => {
        ReactDOM.findDOMNode(this._inputFile).click();
    }
    render() {
        return (
            <div className="InputFile">
              <Button onClick={this.triggerInput} type="primary" style={{ outline: 0 }}>
                  <input 
                      name="file" 
                      type="file" 
                      className="InputFile__input" 
                      ref={c => this._inputFile = c}
                      onChange={this.props.uploadFileHandler}
                  />
                  <label htmlFor="file" className="InputFile__label">{this.props.children}</label>
              </Button>
            </div>
        )
    }
}
