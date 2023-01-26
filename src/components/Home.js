import { db } from '../firebase-config';
import { collection, deleteDoc, getDocs,doc, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';


function Home() {
const [data, setData] = useState([]);
const userCollectionRef = collection(db, "data");


const updateDataFun = async(id, title) => {};

const deleteDataFun = async(id) => {
  try{
 
  await deleteDoc(doc(db, "data", id));
  setData(data.filter((item) => item.id !== id))
  }catch(err){
    console.log(err);
  }
}

 useEffect(() => {
  
//     const fetchData = async() => {
//       let list = [];
//       try{

//         const querySnapshot = await getDocs(collection(db, "data"));
//         querySnapshot.forEach((doc) => {
//           list.push({ id:doc.id, ...doc.data()});
//         });
//         setData(list);
//       }catch(err){
//           console.log(err);
//       }
//     };
// fetchData();
//realtime data fetching using snapshot

  const fetchData = onSnapshot(collection(db,"data"), (snapshot) => {
    let list = [];

    snapshot.docs.forEach((doc) => {
      list.push({ id:doc.id , ...doc.data() });
    })
    setData(list);
  }, (error) => {
    console.log(error);
  });
  return() => {
    fetchData();
  }
  },[])


console.log(data)
return (
    <div className="home-container">
            <p>Data:</p>
          
     {
      data.map((doc ) => {
        return (
        <div key={doc.id} >
            <p>title: {doc.title}</p>
            <p>desc: {doc.desc}</p>
            <div className="home-buttons">
            <button className="delete-div" onClick={() => deleteDataFun(doc.id)}>Delete</button>
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
