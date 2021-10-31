
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
import AddPlaces from './Pages/AddPlaces/AddPlaces';
import Booking from './Pages/Booking/Booking';
import Manage from './Pages/Manage/Manage';
import Notfound from './Pages/NotFound/Notfound';
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
        <PrivateRoute path="/manageall" >
          <Manage></Manage>
        </PrivateRoute>

        <PrivateRoute path='/booking/:placeId'>
          <Booking></Booking>
        </PrivateRoute>
        <PrivateRoute path='/addplace'>
          <AddPlaces></AddPlaces>
        </PrivateRoute>
        <PrivateRoute path="/details">
<Details></Details>
        </PrivateRoute>
        <Route exact path='*'>
          <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
