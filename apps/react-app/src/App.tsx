import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import List from './pages/List';
import Detail from './pages/Detail';

function App() {

  const goVue = () => {
    window.history.pushState({}, '', '/sub-vue')
  }

  return (
    <div className="App">
      <h2>react 子应用</h2>
      <div className='menu'>
        <Link to={'/'}>list</Link>
        <Link to={'/detail'}>detail</Link>
        <a onClick={goVue}>vue列表页</a>
      </div>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
