
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './routes/Routes'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <main className="container mt-4">
          <Routes />
        </main>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App