import { Clock } from '../../Components/Clock'
import { Controls } from '../../Components/Controls'
import { Layout } from '../../Components/Layout'
import { NavBar } from '../../Components/NavBar'
import { Sessions } from '../../Components/Sessions'
import { Status } from '../../Components/Status'
import { useContext } from "react";
import { PlaySound } from '../../Components/PlaySound'
import { TimerContext } from '../../Context/Timers'

export function Home() {
    const { timer } = useContext(TimerContext);
    const { minutes, seconds, status, rounds } = timer
    return (
        <>
            <PlaySound status={status} />
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