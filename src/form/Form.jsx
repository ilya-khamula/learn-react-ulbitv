import React, {useState} from 'react';
import FormButton from "../form-button/FormButton";
import "./form.scss";

const Form = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function addNewPost (e) {
    e.preventDefault();

    if (title && body) {
      const newPost = {
        id: Date.now(),
        title,
        body,
      }

      props.create(newPost);
      setTitle('');
      setBody('');
    }
  }

  return (
    <form className='form'>
      <input value={title} onChange={event => setTitle(event.target.value)} className='form-input' placeholder='Title' type='text'/>
      <input value={body} onChange={event => setBody(event.target.value)} className='form-input' placeholder='Description' type='text'/>
      <FormButton onClick={addNewPost}>Add post</FormButton>
    </form>
  );
};

export default Form;