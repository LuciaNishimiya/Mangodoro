import { Clock } from '../Components/Clock'
import { ClockIcon } from '../Components/Icons'
import { Layout } from '../Components/Layout'
import { NavBar } from '../Components/NavBar'
import './App.css'
function App() {

  return (
    <>
      <NavBar />
      <Layout>
        <Clock minutes={60} seconds={'44'} />
      </Layout>
    </>
  )
}

export default App
