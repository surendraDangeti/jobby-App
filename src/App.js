import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import AllJobs from './components/AllJobs'
import ProtectedRoute from './components/ProtectedRoute'
import AboutJobItem from './components/AboutJobItem'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/Login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={AllJobs} />
      <ProtectedRoute exact path="/jobs/:id" component={AboutJobItem} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
