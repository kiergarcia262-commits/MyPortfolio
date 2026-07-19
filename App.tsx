
import Header from './components/header' 
import AboutMe from './components/AboutMe'
import Certifications from './components/card'
import Education from './components/education'
import Contact from './components/contact'
import footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Education />
      <Certifications />
      <Contact />
      <footer />
    </div>
  )
}

export default App