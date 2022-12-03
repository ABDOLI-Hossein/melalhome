import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./card/card";
import AllCatsNavbar from "./allCatsNavbar";
import axios from "axios";
import Pagination from "./pagination";
import { paginate } from './utils/paginate';
import ReactLoading from "react-loading";
import Search from "./search";



function Mortgage({location}) {

    const [mortgages, setMortgages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize,setPageSize] = useState(8)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        async function getData(){
            const res = await axios.get('http://localhost:3001/mortgages')

            setMortgages(res.data)
            setLoading(false)
        }

        getData()

    },[])

    const handlePageChange = page => {
        setCurrentPage(page)
    }

    const mortgage = paginate(mortgages, currentPage, pageSize);

    return ( 
        <>
       <Search />
         {location.pathname === '/mortgage' ? null : (<AllCatsNavbar/>)}
         <div className="cardsWrapper">
            {loading ? (<ReactLoading type='bubbles' color='#533cdd' className="loading_container"/>) : null} 
            { mortgage.map((m) => <Link to={`/post-detail/${m._id}/${m.post_type}`}><Card
                    key={m.id} 
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
                    sales={m.sale}
                    full_mortgage={m.full_mortgage}
                    images= {m.images}
                /></Link>  )}
           </div>
         
           <Pagination itemsCount={mortgages.length} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange}/>

        </>
     );
}

export default Mortgage;