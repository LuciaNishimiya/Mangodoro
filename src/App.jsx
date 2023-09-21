import { useState, useEffect } from 'react'
import './App.css'
import { api } from './services/api'
import Clock from './components/clock.jsx'
import { Tts } from './components/ttsAudio'


function App() {

  const [apiData, setApiData] = useState([]);
  const [apiTtsData, setApiTtsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataLive = await api(`http://localhost:4000/api/timers`);
        setApiData(dataLive);
      } catch (error) {
        setApiData({ error: "Error al consultar la API" });
      }
    };


    const tts = async () => {
      try {
        const dataLive = await api(`http://0.0.0.0:4000/api/tts`);
        setApiTtsData(dataLive);
      } catch (error) {
        setApiData({ error: "Error al consultar la API" });
      }
    };

    tts();

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
      <Tts TtsData={apiTtsData} />
    </div>


  );
}

export default App;
