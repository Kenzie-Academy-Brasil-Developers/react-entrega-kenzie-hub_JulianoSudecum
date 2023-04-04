import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RoutesMain } from './routes';
import './GlobalStyles.css'
import './reset.css'

function App() {

  return (
    <>
      <RoutesMain/>
      <ToastContainer/>
    </>
  )
}

export default App
