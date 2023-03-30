import { Route, Routes } from 'react-router-dom';
import '../../App.css';
import AddPage from '../../pages/AddPage';
import ShowPage from '../../pages/ShowPage';
import Header from '../Header';

function App() {

  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<AddPage/>}/>
        <Route path='/show' element={<ShowPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
