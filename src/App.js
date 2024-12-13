import logo from './logo.svg';
import './css/App.css';
import TarjetaPaciente from './components/TarjetaPaciente'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TarjetaPaciente />
      </header>
    </div>
  );
}

export default App;
