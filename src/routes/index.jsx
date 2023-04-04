import { Route , Routes } from 'react-router-dom'
import { Home } from '../pages/home';
import { RegisterPage } from '../pages/register';
import { Login } from '../pages/login';

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/home' element={ <Home/> } />
            <Route path='/register' element={ <RegisterPage/> } />
            <Route path='/' element={ <Login/> } />
        </Routes>
    )
}