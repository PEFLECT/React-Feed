import React from 'react';
import './App.css';

function App() {

    
    
    
    return (
      <div className="App">
        {/*  JSX  */}
        <table className="Navbar">
          <tbody>
            <tr>
              <td>
                <img src={require('./assets/logo.svg')} width="50"></img>
              </td>
              <tb>
                Tanapat "PEFLECT" Dejpunyawat
              </tb>
            </tr>
          </tbody>
        </table>
        <input style={{fontSize: 24, display: 'block', width: '100%', paddingLeft: 8}} placeholder="Enter Your Movie" onChange={(event) => {console.log(event.target.value)}}></input>
      </div>
    );
  
}

export default App;
