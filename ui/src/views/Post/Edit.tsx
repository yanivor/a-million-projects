import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getPostsSelector } from '../../store/post/selectors';

const Edit = () => {
  const { id } = useParams();
  const posts = useSelector(getPostsSelector);
  const [value, setValue] = useState('');

  let relevantPost = posts.filter(({_id}) => _id === id);
  const currentPost = relevantPost[0];
  // currentPost

  useEffect(() => {
    setValue(currentPost.content);
  }, [currentPost]);

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

  return (
    <div className='Edit'>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={setValue}/>
    </div>
  );
};

export default Edit;
