import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { SneakersList, SneakersInsert, SneakersUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/sneakers/list" exact component={SneakersList} />
        <Route path="/sneakers/create" exact component={SneakersInsert} />
        <Route
          path="/sneakers/update/:id"
          exact
          component={SneakersUpdate} />
      </Switch>
    </Router>
  )
}

export default App;
