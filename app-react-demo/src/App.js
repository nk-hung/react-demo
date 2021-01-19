import logo from './logo.svg';
import './App.css';

function App() {
  let todos = [
    'Go to market',
    'Buy food',
    'Make dinner'
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          { todos.map(function(x) {
              return <li>{x}</li>;     
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
