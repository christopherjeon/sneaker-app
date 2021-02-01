import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavigationBar } from '../components'
import { SneakersList, SneakersInsert, SneakersUpdate, Home, About } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sneakers/list" exact component={SneakersList} />
          <Route path="/sneakers/create" exact component={SneakersInsert} />
          <Route path="/sneakers/update/:id" exact component={SneakersUpdate} />
          <Route path="/about" exact component={About} />
        </Switch>
    </Router>
  )
}

export default App;
