import { Switch,Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import ShoppingCart from './Components/ShoppingCart/cart.component'
import Home from './Components/Home/home.component'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/cart' component={ShoppingCart} />
    </Switch>
)