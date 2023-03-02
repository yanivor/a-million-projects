import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import { getPostsSelector } from '../../store/post/selectors';
import { savePostRequest } from '../../store/post/actions';
import { getCategoriesSelector } from '../../store/category/selectors';
import { fetchCategoryRequest } from '../../store/category/actions';
import 'react-quill/dist/quill.snow.css';

const Edit = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const posts = useSelector(getPostsSelector);
  const categories = useSelector(getCategoriesSelector);

  const [ description, setDescription ] = useState('');
  const [ content, setContent ] = useState('');

  const  modules  = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ script:  'sub' }, { script:  'super' }],
        ['blockquote', 'code-block'],
        [{ list:  'ordered' }, { list:  'bullet' }],
        [{ indent:  '-1' }, { indent:  '+1' }, { align: [] }],
        ['link', 'image', 'video'],
        ['clean'],
        ['showHtml']
    ],
  };

  let relevantPost = posts.filter(({ _id }) => _id === id);
  const currentPost = relevantPost[0];

  useEffect(() => {
    dispatch(fetchCategoryRequest());
  }, [dispatch]);

  useEffect(() => {
    setDescription(currentPost.description);
    setContent(currentPost.content);
  }, [currentPost]);

  const saveData = () => {
    if (id)
      dispatch(savePostRequest({ _id: id, description, content }));
  };

  return (
    <div className='Edit'>
      <h3>Category</h3>
      <select>
        <option></option>
        {categories.map(({_id, title}) => 
          <option value={_id} key={_id}>{title}</option>
        )}
      </select>
      <h3>Title</h3>
      <input type='text' defaultValue={currentPost.title} />
      <h3>Description</h3>
      <textarea
        defaultValue={description}
        onChange={e => setDescription(e.target.value)}>
      </textarea>
      <h3>Content</h3>
      <ReactQuill
        theme='snow'
        modules={modules}
        value={content}
        onChange={setContent}/>
      <div className='buttons'>
        <button onClick={saveData} className='save'>SAVE</button>
      </div>
    </div>
  );
};

export default Edit;
