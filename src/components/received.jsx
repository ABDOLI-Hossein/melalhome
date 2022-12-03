import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Card from "./card/card";

function Received({user}) {

    const [loading,setLoading] = useState(true)
    const [post, setPost] = useState([]);
    useEffect(() => {

        async function getData(){
            const res = await axios.get('http://localhost:3001/admin/received').then((res) => {
                setPost(res.data)
                setLoading(false)
            })
            
        }

        getData()

    },[])


    return (  
       <div className="cardsWrapper">
        {loading ? (<ReactLoading type='bubbles' color='#533cdd' className="loading_container"/>) : null} 
        {post.map((item,i) => (
            <Link key={i}  to={`/post-detail/${item._id}/${item.post_type}`}>
                <Card
                    user={user}
                    key={i} 
                    time={item.time}
                    address={item.address}
                    images= {item.images}
                    post_type={item.post_type}
                />           
            </Link>
           
        ))}
       </div> 
    );
}

export default Received;
