import { Routes, Route } from 'react-router-dom';
import PostList from '../Post/List';
import PostEdit from '../Post/Edit';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <PostList/> } />
        <Route path='/post-edit/:id' element={ <PostEdit/> } />
      </Routes>
    </div>
  );
};

export default App;
