import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import Chat from './components/Chat'

function App() {

  return (
      <div>
        <Sidenav />
        <Main />
        <Work />
        <Projects />
        <Contact />
        {/* <Chat /> */}
      </div>
  )
}

export default App
