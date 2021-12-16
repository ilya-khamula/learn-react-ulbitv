import React, {useState} from 'react';
import FormButton from "../form-button/FormButton";
import "./form.scss";

const Form = ({create}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function addNewPost (e) {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    }

    create(newPost);
    setTitle('');
    setBody('');
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