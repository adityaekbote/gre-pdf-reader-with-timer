import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { default as InputFile } from './components/inputfile'
import '../css/styles.scss';
import Timer from './components/timer';
import Countdown from './components/countdown';

const App = () => {
  const [file, setFile] = useState(null);

  const uploadFileHandler = e => {
    const file = e.target.files[0];
    var path = (window.URL || window.webkitURL).createObjectURL(file);
    setFile(path);
  }
  
  return (<>
        <div style={{ margin: 'auto', width: '10%', color: 'green' }}><h3>GRE Study Site</h3></div>
    <div style={{ width: '20%', padding: '0px 5px 5px 5px' }}>
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
            <hr />
            <h3>Days to go</h3>
            <Countdown date={`2019-11-15T10:00:00`} />
            <hr />
            <div style={{ marginRight: '80px', marginTop: '30px'}}>
          <form target="_blank" action='https://dictionary.cambridge.org/search/british/direct/?utm_source=widget_searchbox_source&utm_medium=widget_searchbox&utm_campaign=widget_tracking' method='post'>
              <table style={{"fontSize":"10px","background":"#292929","borderCollapse":"collapse","borderSpacing":"0","width":"200px"}} >
                <tbody> <tr> <td colspan='2' style={{"padding":"0","background":"none","border":"none"}}>
                  <a href='https://dictionary.cambridge.org/' style={{"display":"block","background":"transparent url(https://dictionary.cambridge.org/external/images/freesearch/sbl.png?version=5.0.56) no-repeat 5px 6px","height":"32px"}} target="blank"></a>
                  </td> </tr> <tr> <td style={{"width":"68px","background":"none","border":"none","padding":"4px"}}>
                    <input style={{"width":"100%","display":"block","fontSize":"10px","padding":"2px","border":"none"}} name='q' />
                    </td> <td style={{"width":"50px","background":"none","border":"none","padding":"0 4px 0 0"}}> 
                    <input style={{"width":"100%","display":"block","fontSize":"10px","padding":"2px","border":"none","float":"right","background":"#d0a44c"}} type='submit' value='Look it up' /> </td> </tr> </tbody> </table> </form>
          </div>
          </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '05px' }}>
        <h2>Learn Repeating Offenders Wordlist!</h2>
        <iframe id="quizlet_iframe" src="https://quizlet.com/297264856/learn/embed?x=1jj1" height="500" width="100%" style={{border:0}}></iframe>
        <button className="button yellow" style={{ width: '120px', height: '40px' }} onClick={() => document.getElementById('quizlet_iframe').contentWindow.location.reload()}>Refresh</button>
      </div>
      </>
    	)
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);