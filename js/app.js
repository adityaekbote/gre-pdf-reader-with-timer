import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { default as InputFile } from './components/inputfile'
import '../css/styles.scss';
import Timer from './components/timer';

const App = () => {
  const [file, setFile] = useState(null);

  const uploadFileHandler = e => {
    const file = e.target.files[0];
    var path = (window.URL || window.webkitURL).createObjectURL(file);
    setFile(path);
  }
  
  return (<>
    <div style={{ width: '20%', padding: '5px' }}>
      <InputFile uploadFileHandler={uploadFileHandler}>
        Select your study book PDF!
      </InputFile>
    </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '05px' }}>
          <div className="Content">
            {
              !file ? <h2 style={{ marginTop: 0, color: "#efefef" }}>Your PDF file will be viewed here.</h2>
              : <iframe title="myiframe" src={file} width="100%" height="100%" frameBorder="0"></iframe>
            }
          </div>
          <div style={{ marginRight: '80px', marginTop: '-30px'}}>
            <Timer />
          </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '05px' }}>
        <h2>Learn Repeating Offenders Wordlist!</h2>
        <iframe src="https://quizlet.com/297264856/learn/embed?x=1jj1" height="500" width="100%" style={{border:0}}></iframe>
      </div>
      </>
    	)
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);