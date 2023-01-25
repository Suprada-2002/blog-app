import { db } from '../firebase-config';
import { collection, deleteDoc, getDocs,doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';


function Home() {
const [data, setData] = useState([]);
const userCollectionRef = collection(db, "data");


const updateDataFun = async(id, title) => {};
const deleteDataFun = async(id) => {
  // const dataDoc  = doc(db, "data", id);
  // await deleteDoc(dataDoc);
}


    useEffect(() => {
        const getData = async() => {
          const info = await getDocs(userCollectionRef);
          setData(info.docs.map((doc ) => ({
            ...doc.data(), id:doc.id
          })))
        }
        getData();
      },[])

console.log(data)
return (
    <div className="home-container">
            <p>Data:</p>
          
     {
      data.map((doc ) => {
        return (
        <div>
            <p>title: {doc.title}</p>
            <p>desc: {doc.desc}</p>
            <div className="home-buttons">
            <button className="delete-div" onClick={deleteDataFun(doc.id)}>Delete</button>
           <button className="update-div" onClick={updateDataFun}>Update</button>
            </div>
        </div>
        )
      })
     }
        </div>
    )
}
export default Home;
