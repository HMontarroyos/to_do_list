import React, { Suspense }  from 'react'
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom'
import { Home, About} from './views'
import { Header } from './components'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<div><p>LOADING ...</p></div>}>
      <Header />
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Router>
    </Suspense>
    </BrowserRouter>
  )
}

export default Routes
