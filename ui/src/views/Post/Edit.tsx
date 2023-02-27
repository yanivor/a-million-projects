import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getPostsSelector } from '../../store/post/selectors';
import { savePostRequest } from '../../store/post/actions';

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(getPostsSelector);
  const [value, setValue] = useState('');

  const  modules  = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
        ["showHtml"]
    ],
  };

  let relevantPost = posts.filter(({_id}) => _id === id);
  const currentPost = relevantPost[0];
  // currentPost

  useEffect(() => {
    setValue(currentPost.content);
  }, [currentPost]);

  const saveData = () => {
    if (id)
      dispatch(savePostRequest({ _id: id, content: value }));
  };

  return (
    <div className='Edit'>
      <h2>{currentPost.title}</h2>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={setValue}/>
      <button onClick={saveData}>SAVE</button>
    </div>
  );
};

export default Edit;
