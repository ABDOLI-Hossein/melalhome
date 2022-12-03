import axios from "axios";
import React, {Fragment, useState} from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AllCatsNavbar from "./allCatsNavbar";
import Card from "./card/card";
import Pagination from "./pagination";
import ReactLoading from "react-loading";
import Search from "./search";
import { paginate } from './utils/paginate';

function Rents({location}) {


    const [rents, setRents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize,setPageSize] = useState(8)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        async function getData(){
            const res = await axios.get('http://localhost:3001/rents').then(res => {
                setRents(res.data)
                setLoading(false)
            })
            
        }

        getData()

    },[])

    const handlePageChange = page => {
        setCurrentPage(page)
    }

    const rent = paginate(rents, currentPage, pageSize);

    return (
        <Fragment>
            {location.pathname === '/rent' ? null : (<AllCatsNavbar/>)}
           <Search />
           <div className="cardsWrapper">
           
            { loading ? 
            (<ReactLoading type='bubbles' color='#533cdd' className="loading_container"/>)
             : rent.map((m,i) => <Link key={i} to={`/post-detail/${m._id}/${m.post_type}`}><Card
                    key={m._id} 
                    id={m.id}
                    name={m.name}
                    meterage={m.meterage}
                    post_code={m.post_code}
                    type={m.type}
                    time={m.time}
                    address={m.address}
                    floor={m.floor}
                    room_count={m.room_count}
                    age={m.age}
                    mortgage={m.mortgage}
                    rent={m.rent}
                    images= {m.images}
                /></Link>  )}
            {/* { rents.length === 0 ? <p style={{fontSize:'25px'}}>موردی برای نمایش وجود ندارد</p> : null } */}
           </div>
           <Pagination itemsCount={rents.length} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange}/>
        </Fragment>
      );
}

export default Rents;