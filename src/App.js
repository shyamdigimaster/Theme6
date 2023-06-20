import './App.css';
import Header from './component/Header'
import Home from './component/Home';
import Cart from './component/Card'
import Displaycard from './component/Displaycard';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
   <Header/>
   <div className='Homebanner'>
   <Home/>
   <Cart/>
   <Displaycard/>
   {/* <Footer/> */}
   </div>

    </div>
  );
}

export default App;
