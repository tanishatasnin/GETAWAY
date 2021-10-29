
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Details from './Pages/Details/Details';
import Header from './Pages/Header/Header';
import AuthProvider, { AuthContext } from './Context/AuthProvider';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path="/details">
<Details></Details>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
