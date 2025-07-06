import React from "react"

// import { HashRouter, Route, Routes } from "react-router-dom"
// import Navbar from "./componets/Navbar"
// import HomePage from "./componets/HomePage"
// import Products from "./componets/Products"
import Root from "./componets/Root"



function App() {

  return (
      <div>
        <Root></Root>
        {/* <HashRouter>
            <Navbar></Navbar>
          <Routes>
            <Route path="/" element = {<HomePage/>}></Route>
            <Route path="/products" element = {<Products/>}></Route>
          </Routes>
        </HashRouter> */}
      </div>
  )
}

export default App
