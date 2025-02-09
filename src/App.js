import './App.css';
import Hero from './Components/Hero/hero.component';
import ShoppingCart from './Components/ShoppingCart/cart.component';
import Home from './Components/Home/home.component';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Hero />
      {routes}
      {/* <Home /> */}
      {/* <ShoppingCart /> */}
    </div>
  );
}

export default App;
