
import { Fragment } from 'react';
import './allCatsNavbar.css'
import AllCatsNavbar from "./allCatsNavbar";
import Rents from "./rents";

function Cats() {


    
    return ( 

           <Fragment>
            <AllCatsNavbar/>
            <Rents/>
           </Fragment>
     );
}

export default Cats;
