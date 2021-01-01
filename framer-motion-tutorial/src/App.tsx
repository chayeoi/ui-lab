import React, { useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Base from './components/Base'
import Header from './components/Header'
import Home from './components/Home'
import Modal from './components/Modal'
import Order from './components/Order'
import Toppings from './components/Toppings'

function App() {
  const location = useLocation()
  const [pizza, setPizza] = useState({ base: '', toppings: [] as string[] })
  const [showModal, setShowModal] = useState(false)

  const addBase = (base: string) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping: string) => {
    let newToppings
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping]
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping)
    }
    setPizza({ ...pizza, toppings: newToppings })
  }

  return (
    <>
      <Header />
      <Modal showModal={showModal} />
      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} setShowModal={setShowModal} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  )
}

export default App
