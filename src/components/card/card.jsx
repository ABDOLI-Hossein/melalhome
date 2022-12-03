
import { e2p } from '../utils/convertor';
import PostTypeConv from '../utils/postTypeConvertor';
import './card.css';
function Card({user, id, name, meterage, post_code, type, time, address, floor, room_count, age, mortgage, rent, sales, full_mortgage, images, post_type}) {
    
    return ( 
    
        <div key={id} className="each-item">

            {user && <div className='badgePostType'>{PostTypeConv(post_type)}</div>} 
            
            <div className="right">
                
                <div style={{fontSize:'22px'}}>
                    <span> {e2p(meterage)} متر , </span>
                    <span>{address}</span>
                </div>

                <div className='card_part2' style={{fontSize:'16px'}}>
                    <span>طبقه: {e2p(floor)}</span>
                    <span>تعداد اتاق: {e2p(room_count)}</span>
                    <span>سن بنا: {e2p(age)}</span>
                </div>
                
                {rent && (
                    <div style={{fontSize:'18px'}}>
                        <span style={{marginLeft:'30px'}}> رهن: {e2p(mortgage)} میلیون تومان</span>
                        <span> اجاره:  {e2p(rent)} میلیون تومان</span>
                    </div>
                )}

                {sales && (
                    <div style={{fontSize:'18px'}}>
                        <span> قیمت:  {e2p(sales)} میلیون تومان</span>
                    </div>
                )}

                {full_mortgage && (
                    <div style={{fontSize:'18px'}}>
                        <span> رهن کامل:  {e2p(full_mortgage)} میلیون تومان</span>
                    </div>
                )}

            </div>

            <div className='left'>
                <img src={images[0]} alt="" />
            </div>


       </div>
    
     );
}

export default Card;