import Data from '../assets/BloagData.js';
import "../assets/style.scss";
import {Text} from 'react'

function Home() {

console.log(Data)

return (
    <div className="home-container">
     {Data.map(blog => (
        <div className="item" key={blog.id} >
            <h2>{blog.title}</h2>
            <p>{blog.time}</p>
            <p className="description">{blog.desc}</p>
        </div>
    ))}
        </div>
    )
}
export default Home;
