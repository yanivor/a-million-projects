import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Post.scss';
import {
  getPendingSelector,
  getPostsSelector,
  getErrorSelector,
} from '../../store/post/selectors';
import { fetchPostRequest } from '../../store/post/actions';

const List = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const posts = useSelector(getPostsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchPostRequest());
  }, [dispatch]);

  return (
    <div className='List'>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        posts.map((post) => (
          <Link
            key={post._id}
            to={`post-edit/${post._id}`}>
            <div
              className='row'>
              {post.title}
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default List;
