import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RoutesMain } from './routes';
import { GlobalStyle } from './GlobalStyles'
import { AuthProvider } from './providers/AuthContext';
import { UserProvider } from './providers/UserContext';
import { TechProvider } from './providers/TechContext';

function App() {

  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <TechProvider>
          <UserProvider>
            <RoutesMain/>
          </UserProvider>
        </TechProvider>
      </AuthProvider>
      <ToastContainer/>
    </>
  )
}

export default App
