import {getDocs,collection} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { auth, db } from "../assets/firebase-config";
import "../assets/style.scss";

function Home() {

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
});

return (
    <div className="home-container">
       {blogList.map((post) => {
        return(
            <div className='blogs'>
             <h2>{post.title}</h2>
            </div>
        )
       })}
        </div>
    )
}
export default Home;
