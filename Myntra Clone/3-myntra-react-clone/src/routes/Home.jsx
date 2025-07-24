import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home=()=>{
  const items=useSelector((store)=> store.items);

  return (
    <main>
        <div className="items-container">
          {items.map((item,index)=> <HomeItem key={index} item={item} /> )}
        {/* The .map() method is used to transform each element of an array into something new, returning a new array with the same length. */}
          
        </div>
      </main>
  )
}

export default Home;
