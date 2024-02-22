import { SnackbarProvider } from 'notistack';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Room } from '../pages/Room';
import './App.css'
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Modal } from '../Components/ModalMenu';
import { JoinSettingsProvider } from '../Context/JoinSettings';
import { useOpenErrorMenu } from '../hooks/OpenErrorMenu';
import { TimerProvider } from '../Context/Timers';
import { RoomSettingsProvider } from '../Context/RoomSettings';
function AppRoutes() {
  return useRoutes([
    { path: '/:api/:id', element: <Room /> },
  ]);
}

function App() {
  useOpenErrorMenu()
  return (


    <JoinSettingsProvider>
      <TimerProvider>
        <RoomSettingsProvider>
          <BrowserRouter>
            <SnackbarProvider />
            <Modal />
            <AppRoutes />
          </BrowserRouter>
        </RoomSettingsProvider>
      </TimerProvider>
    </JoinSettingsProvider>

  )
}

export default App
