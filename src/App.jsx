import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = ()=>{
  return <>
    <Header></Header>
    <Outlet/>
    <Footer></Footer>
  </>
};

export default App;
