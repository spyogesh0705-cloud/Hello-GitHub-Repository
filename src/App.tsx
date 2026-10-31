import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CreativeWorks from './components/CreativeWorks'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar /><main><Hero /><About /><Skills /><Projects /><CreativeWorks /><Certificates /><Contact /></main>
    </>
  )
}
