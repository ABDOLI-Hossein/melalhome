
import { Link, NavLink } from "react-router-dom";
import './allCatsNavbar.css'
function AllCatsNavbar(props) {


    console.log(props)
    return (
        <ul className="all_cats_each_item">
            <NavLink to="/rent" activeClassName="is_active">
                <li>رهن و اجاره</li>
            </NavLink>

            <NavLink to="/sale"  activeClassName="is_active">
                <li>خرید و فروش</li>
            </NavLink>
            
            <NavLink to="/mortgage" activeClassName="is_active">
                <li>رهن کامل</li>
            </NavLink>
        </ul>
      );
}

export default AllCatsNavbar;
