import logo from './logo.svg';
import './App.css';
import AddMovie from './components/AddMovie';
import ViewMovie from './components/ViewMovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>

<Route path='/' element={<AddMovie/>}/>
<Route path='/view' element={<ViewMovie/>}/>





   </Routes>
   </BrowserRouter>
  );
}

export default App;
