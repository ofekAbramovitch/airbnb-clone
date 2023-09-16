import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Stay from './pages/stay/stay'
import { useSelector } from 'react-redux'
import { setIsMobile } from './store/app/app.action'
import './assets/style/main.scss'

export default function App() {
  const isMobile = useSelector((storeState: any) => storeState.appModule.isMobile)

  useEffect(() => {
    function handleResize() {
      if (isMobile && window.innerWidth <= 750) return
      if (!isMobile && window.innerWidth>= 750) return
      else setIsMobile(window.innerWidth <= 750)
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

  return (
    <section className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stays/:id' element={<Stay />} />
      </Routes>
    </section>
  )
}


