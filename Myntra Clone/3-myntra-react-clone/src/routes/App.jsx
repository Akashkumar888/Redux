import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/fetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus=useSelector((state)=>state.fetchStatus);

  return (
    <>
      <Header></Header>
      <FetchItems/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet/> }
      <Footer></Footer>
    </>
  );
}

export default App;


