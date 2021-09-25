import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import ServicePage from './pages/Service/ServicePage'
import SignUpPage from './pages/SignUp/SignUpPage'
import LoginPage from './pages/Login/LoginPage'
import MyPage from './pages/MyPage/MyPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <ServicePage />
          </Route>
          <Route path='/sign-up'>
            <SignUpPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route exact path='/mypage/order'>
            <MyPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
