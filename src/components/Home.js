import {getDocs,collection, deleteDoc, doc} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { auth, db } from "../assets/firebase-config";
import "../assets/style.scss";

function Home({isAuth}) {

    const postCollectionRef = collection(db, "data");
    const [blogList, setBlogList] = useState([]);

useEffect(() => {
    const getBlogs = async () => {
        const data = await getDocs(postCollectionRef);
        setBlogList(
            data.docs.map((doc) => ({
                ...doc.data(), id:doc.id
            })))}
    getBlogs();
}, []);

const deleteBlog = async(id) => {
    const postDoc = doc(db, "data", id)
    await deleteDoc(postDoc)
}

console.log(blogList)

return (
    <div className="home-container">
       {blogList.map((post) => {
        return(
            <div className='blogs' key={post.id} >
             <h2 className='title'>{post.title}</h2>
             <p className='desc'>{post.text}</p>
             <h4>@{post.author.name}</h4>
             <div className='delete-post'>
                {isAuth && post.author.id === auth.currentUser.uid && (
                      <button
                      onClick={() => {
                        deleteBlog(post.id)
                      }}
                      >&#128465;</button>
                )}
             </div>
            </div>
        )
       })}
        </div>
    )
}
export default Home;
