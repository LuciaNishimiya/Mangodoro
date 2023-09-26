import { useState, useEffect } from 'react'
import './App.css'
import { api } from './services/api'
import Clock from './components/clock.jsx'
import Sound from './components/sound.jsx'

function App() {

  const [apiData, setApiData] = useState([]);
  useEffect(() => {



    const fetchData = async () => {
      try {
        const dataLive = await api(`http://localhost:4000/api/timers`);
        setApiData(dataLive);
      } catch (error) {
        setApiData({ error: "Error al consultar la API" });
      }
    };


    fetchData();
    const intervalId = setInterval(fetchData, 1000);

    return () => {
      clearInterval(intervalId);
    };

  }, []);


  return (

    <div>
      <section className="pomodoro-container">

        <div className="timer">
          <Sound status={apiData.status} />
          <p>{apiData.status}</p>
          <Clock
            error={apiData.error}
            minutes={apiData.minutes}
            seconds={apiData.seconds}
          />
          <p>{apiData.error}</p>

        </div>
        <p><span></span></p>
      </section>

    </div>


  );
}

export default App;
