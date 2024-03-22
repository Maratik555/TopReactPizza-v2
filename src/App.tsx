import React, {lazy, Suspense} from 'react'
// import Cart from "./pages/Cart"
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom"
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import MainLayout from './layout/MainLayout'

// export const SearchContext = React.createContext()

const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ "./pages/Cart"));

function App() {
  return (
    <>
      <div className="wrapper">
        {/*<SearchContext.Provider value={{search, setSearch}}>*/}
          <div className="content">
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home/>} />
                <Route path="cart" element={<Suspense fallback={<div>Идёт загрузка корзины...</div>}>
                    <Cart/>
                </Suspense>} />
              </Route>
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </div>
        {/*</SearchContext.Provider>*/}
      </div>
      <Footer/>
    </>
  )
}

export default App
