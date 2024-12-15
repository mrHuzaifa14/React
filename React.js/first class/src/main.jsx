import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello, React!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eligendi, non quaerat excepturi, ad corporis tempora ducimus voluptas commodi, atque minima velit eveniet! Aperiam, commodi recusandae, atque earum omnis rerum praesentium excepturi aut obcaecati adipisci vero laborum? Ducimus eveniet rerum, labore velit reiciendis deleniti deserunt nesciunt, alias quidem laboriosam maiores?</p>
    <img src="/vite.svg" alt="Vite logo" className="logo" />
    
    
  </StrictMode>
)

