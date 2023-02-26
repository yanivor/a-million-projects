import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPendingSelector,
  getPostsSelector,
  getErrorSelector,
} from '../../store/post/selectors';
import { fetchPostRequest } from '../../store/post/actions';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const posts = useSelector(getPostsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchPostRequest());
  }, [dispatch]);

  return (
    <div className='App' style={{ padding: '15px' }}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        posts.map((post) => (
          <div style={{ marginBottom: '10px' }} key={post._id}>
            {post._id} - {post.title} - {post.content}
          </div>
        ))
      )}
    </div>
  );
};

export default App;
