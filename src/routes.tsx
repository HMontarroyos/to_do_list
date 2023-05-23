import React from 'react'
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom'
import { Home} from './views'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </BrowserRouter>
  )
}

export default Routes
