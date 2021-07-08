import React, { useState} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import FileBase from "react-file-base64";
import { createpost } from "../actions/post";
const CreatePostCrd = () => {
  const [postDate, setPostDate] = useState({
    creator: '',
    title: '',
    Massage: '',
    tags:'',
    selectedFile:'',
  });
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createpost(postDate));
  };

  const clearHandler = (e) => {
    e.preventDefault();
    setPostDate({
      creator:'',
      title: '',
      Massage: '',
      tags: '',
      selectedFile:'',
    });
  };
  return (
    <CreatePostCrdd>
      <form onSubmit={submitHandler}>
        <h3>Create a memory</h3>
        <input
          type="text"
          placeholder="creator"
          value={postDate.creator}
          onChange={(e) => {
            setPostDate({ ...postDate, creator: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Title"
          value={postDate.title}
          onChange={(e) => {
            setPostDate({ ...postDate, title: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Massage"
          value={postDate.Massage}
          onChange={(e) => {
            setPostDate({ ...postDate, Massage: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Tags"
          value={postDate.tags}
          onChange={(e) => {
            setPostDate({ ...postDate, tags: e.target.value });
          }}
        />
        <FileBase
          className="filebase"
          type="file"
          multiple={false}
          onDone={(base64) => {
            setPostDate({ ...postDate, selectedFile: base64 });
          }}
        />
        <Submit type="submit"></Submit>
        <button onClick={clearHandler}>Clear</button>
      </form>
    </CreatePostCrdd>
  );
};

const CreatePostCrdd = styled.div`
  width: 18vw;
  height: 50vh;
  border-radius: 3px;
  overflow: hidden;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  border: 1px solid gray;
  box-shadow: 1px 2px gray;
  input {
    padding: 0.5rem 1.5rem;
    margin: 0.5rem 0rem;
  }
  button {
    width: 90%;
    background-color: red;
    padding: 0.2rem 0rem;
    color: white;
    cursor: pointer;
  }
  FileBase {
    margin-left: 10rem;
    width: 1rem;
  }
`;
const Submit = styled.input`
  width: 90%;
  color: white;
  background-color: rgb(48, 74, 178);
  cursor: pointer;
`;

export default CreatePostCrd;
