import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Add from './Add.jsx'
// import Sqr from './Sqr.jsx'
// import Fruits from './Fruits'
import Users from './Users'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Add /> */}
    {/* <Sqr num={5} /> */}
    {/* <Fruits /> */}
    <Users />
  </StrictMode>,
)
