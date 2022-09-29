import './App.css';
import Footer from './components/Footer/Footer';
import Gym from './components/Gym/Gym';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App a">
      <Header></Header>
      <Gym></Gym>
      <div className='footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
