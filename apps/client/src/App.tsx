import { Route, Routes } from 'react-router-dom'
import { Actors } from './pages/Actors'
import { Directors } from './pages/Directors'
import { Home } from './pages/Home'
import { Header } from './components/Header'

function App () {
  return (
    <div className='bg-black min-h-screen text-white px-10 py-5 grid content-start gap-10'>
      <Header />
      <main>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/actors' element={<Actors />} />
          <Route path='/directors' element={<Directors />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
