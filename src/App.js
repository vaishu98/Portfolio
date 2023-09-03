import './App.css';
import Sign from './MyComponents/Sign';
import MenuBar from './MyComponents/Menubar';
import Socialmedia from './MyComponents/Socialmedia';


function App() {
  return (
    <>
      <div className="App">
        <MenuBar />
        <Socialmedia />
        <Sign />
      </div>
    </>
  );
}

export default App;
