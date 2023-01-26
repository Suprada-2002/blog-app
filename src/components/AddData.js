import { useState } from "react";
import { db } from '../firebase-config';
import { addDoc,collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function AddData() {

const [newTitle, setNewTitle] = useState("");
const [newDesc, setNewDesc] = useState("");
const userCollectionRef = collection(db, "data");
const navigate = useNavigate();

const addDataButton = async() => {
    await addDoc(userCollectionRef, {title: newTitle, desc:newDesc});
  
    navigate("/");
}

    return (
        <div className="adddata-container">
            <input placeholder="Title of the blog.."
             onChange={(event) => {
                setNewTitle(event.target.value);
             }}
            />
            <input placeholder="Description..."
            onChange={(event) => {
                setNewDesc(event.target.value);
             }}
            />
            <button onClick={addDataButton}>add data</button>
        </div>
    )
}

export default AddData;