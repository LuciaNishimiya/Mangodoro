import { Clock } from '../Components/Clock'
import { Controls } from '../Components/Controls'
import { Layout } from '../Components/Layout'
import { NavBar } from '../Components/NavBar'
import { Sessions } from '../Components/Sessions'
import { Status } from '../Components/Status'
import './App.css'
import { useContext } from "react";
import { PomodoroContext } from "../Context"
function App() {
  const { timer } = useContext(PomodoroContext);
  const { minutes, seconds, status } = timer

  return (
    <>
      <NavBar />
      <Layout>
        <Status status={status} />
        <Clock minutes={minutes} seconds={seconds} />
        <Controls />
        <Sessions />
      </Layout>
    </>
  )
}

export default App