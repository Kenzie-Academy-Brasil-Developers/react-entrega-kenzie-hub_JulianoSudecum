import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RoutesMain } from './routes';
import { GlobalStyle } from './GlobalStyles'
import { AuthProvider } from './providers/AuthContext';

function App() {

  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <RoutesMain/>
      </AuthProvider>
      <ToastContainer/>
    </>
  )
}

export default App
