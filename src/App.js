
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
import PrivateRoute from './Components/PrivateRoute/Private';
import Header from './Pages/Header/Header';
import AuthProvider, { AuthContext } from './Context/AuthProvider';
import Footer from './Pages/Footer/Footer';
import Faq from './Pages/Faq/faq';
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
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/faq'>
          <Faq></Faq>
        </Route>
        <PrivateRoute path="/details">
<Details></Details>
        </PrivateRoute>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
