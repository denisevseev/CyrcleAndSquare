import logo from './logo.svg';
import './App.css';
import LeftMenu from "./components/LeftMenu";
import CheckBoxesWhithHeader from "./components/CheckBoxesWhithHeader/CheckBoxesWhithHeader";
import ContentBody from "./components/ContentBody/ContentBody";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Круги и квадраты v.1.0</h1>
          <CheckBoxesWhithHeader/>
      </header>
        <LeftMenu/>
        <ContentBody/>
    </div>
  );
}

export default App;
