import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoMdAddCircle } from "react-icons/io";
import { FaDeleteLeft } from "react-icons/fa6";

const HomeItem=({item})=>{
  const dispatch=useDispatch();

  const handleAddToBag=()=>{
    dispatch(bagActions.addToBag(item.id));
  }
  const handleRemoveFromBag=()=>{
    dispatch(bagActions.removeFromBag(item.id));
  }
  const bagItems = useSelector((state) => state.bag); // assuming `bag` holds an array of item IDs

  const isInBag = bagItems.includes(item.id); // check if item is already in the bag
  return <>
  {
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">{item.discount_percentage}% OFF</span>
      </div>
      {isInBag ? 
      <button type="button" className="btn-add-bag btn btn-danger" onClick={handleRemoveFromBag}><FaDeleteLeft/> Remove</button>  :
      <button type="button" className="btn-add-bag btn btn-success" onClick={ handleAddToBag }> <IoMdAddCircle />  Add to Bag  </button>
      }
      
      

    </div>
    
    }

  </>
}


export default HomeItem;

