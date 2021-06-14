import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
// import './index.css';
import { Grit } from "./components/Grit.js"

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Grit />
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
)