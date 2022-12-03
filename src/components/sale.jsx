import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./card/card";
import AllCatsNavbar from "./allCatsNavbar";
import axios from "axios";
import Pagination from "./pagination";
import { paginate } from './utils/paginate';
import ReactLoading from "react-loading";
import Search from "./search";

function Sale({location}) {


    const [sales, setSales] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize,setPageSize] = useState(8)
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        async function getData(){
            const res = await axios.get('http://localhost:3001/sales')
            console.log(res)
            setSales(res.data)
            setLoading(false)
        }

        getData()

    },[])



    const handlePageChange = page => {
        setCurrentPage(page)
    }

    const sale = paginate(sales, currentPage, pageSize);



    return ( 
        <>
        {location.pathname === '/sale' ? null : (<AllCatsNavbar/>)}
        <Search />
        <div className="cardsWrapper">
        {loading ? (<ReactLoading type='bubbles' color='#533cdd' className="loading_container"/>) : null} 
            { sale.map((m,i) => <Link  key={i}  to={`/post-detail/${m._id}/${m.post_type}`}><Card
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
           <Pagination itemsCount={sales.length} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange}/>
        </> 
    );
}

export default Sale;<>Sale</>