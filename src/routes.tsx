import React, { Suspense }  from 'react'
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom'
import { Home, About, ToDoListId} from './views'
import { Header, Loading } from './components'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<Loading/>}>
      <Header />
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo/:id" element={<ToDoListId/>} />
      </Router>
    </Suspense>
    </BrowserRouter>
  )
}

export default Routes
