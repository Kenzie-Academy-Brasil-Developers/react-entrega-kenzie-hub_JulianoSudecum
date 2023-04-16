import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RoutesMain } from './routes';
import { GlobalStyle } from './GlobalStyles'
import { UserProvider } from './providers/UserContext';
import { TechProvider } from './providers/TechContext';

function App() {

  return (
    <>
      <GlobalStyle/>
        <TechProvider>
          <UserProvider>
            <RoutesMain/>
          </UserProvider>
        </TechProvider>
      <ToastContainer/>
    </>
  )
}

export default App
