import Hello from './Hello.js';
import Home from './home.js';
import Contact from './contact.js';
import Menu from './menu.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import data from './data.json'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Hello />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/menu" component={Menu}></Route>
      </Switch>
    </BrowserRouter>
    <Parse/>
    </div>
  );
}

function Parse() {
  return (
    data.Pizza.map((pizza, i) => {
      return (
        <div key ={i}>
          <h5>{pizza.name}</h5>
          {pizza.price}
          {pizza.ingredients}
        </div>
      )
    })
  );  
}

export default App;