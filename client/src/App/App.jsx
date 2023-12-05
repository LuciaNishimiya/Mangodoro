import { Clock } from '../Components/Clock'
import { Layout } from '../Components/Layout'
import { NavBar } from '../Components/NavBar'
import { Status } from '../Components/Status'
import './App.css'
function App() {

  return (
    <>
      <NavBar />
      <Layout>
        <Status status='work' />
        <Clock minutes={60} seconds={'44'} />
      </Layout>
    </>
  )
}

export default App
