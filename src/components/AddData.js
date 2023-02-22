import { useEffect, useState } from "react";
import {addDoc, collection} from 'firebase/firestore'
import { useNavigate } from "react-router-dom";
import { auth, db } from "../assets/firebase-config";
import '../assets/style.scss'

function AddData({isAuth}) {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const postCollectionRef = collection(db, "data");
  const navigate = useNavigate();

  const onSubmitData = async() => {
      await addDoc(postCollectionRef, {title, 
        text,
         author:{name:auth.currentUser.displayName , id:auth.currentUser.uid}
        });
         navigate('/')
    };

    useEffect(() => {
      if(!isAuth){
        navigate('/login');
      }
    }, [])

    return (
          <div className="create-blog">
            <div className="create-blog-container">
              <h1 className="create-blog-header">Write something new here</h1>
              <div className="input-group">
                  <label>Title: </label>
                  <input placeholder="title..." 
                  onChange={(event) => {setTitle(event.target.value)}}
                  />
              </div>
              <div className="input-group">
              <label>Description: </label>
              <textarea placeholder="description..." className="inp-group-textarea"
              onChange={(event) => {setText(event.target.value)}}
              />
                </div>
                <button onClick={onSubmitData} className='create-btn'>Submit Blog</button>
            </div>
          </div>
    )
}

export default AddData;