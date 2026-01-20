import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BooksComponent from './components/BooksComponent.tsx'
import HeaderComponent from './components/HeaderComponent.tsx'
function App() {

  return (
    <><HeaderComponent title={"My Book App"} />
 <section>
<BooksComponent/>
 </section>
    </>
  )
}

export default App
