import { Clock } from '../Components/Clock'
import { Controls } from '../Components/Controls'
import { Layout } from '../Components/Layout'
import { NavBar } from '../Components/NavBar'
import { Sessions } from '../Components/Sessions'
import { Status } from '../Components/Status'
import './App.css'
import { useContext } from "react";
import { PomodoroContext } from "../Context"

import { Modal } from '../Components/ModalMenu'
import { ErrorMsg } from '../Components/ErrorMsg'
import { PlaySound } from '../Components/PlaySound'
function App() {
  const { timer } = useContext(PomodoroContext);
  const { minutes, seconds, status, rounds } = timer
  return (
    <>
      <PlaySound status={status} />
      <ErrorMsg />
      <Modal />
      <NavBar />
      <Layout>
        <Status status={status} />
        <Clock minutes={minutes} seconds={seconds} />
        <Controls />
        <Sessions total={rounds.total} current={rounds.current} />
      </Layout>
    </>
  )
}

export default App
