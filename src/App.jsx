import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RoutesMain } from './routes';
import { GlobalStyle } from './GlobalStyles'

function App() {

  return (
    <>
      <GlobalStyle/>
      <RoutesMain/>
      <ToastContainer/>
    </>
  )
}

export default App
