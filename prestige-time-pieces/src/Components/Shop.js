import WatchList from "./WatchList";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom"; 
import Cart from "./Cart";
import Admin from "./Admin";

function Shop(){

    return(
        <div id="mainShop">
            <NavBar />
            <Routes >
            <Route exact path="/" element={<WatchList />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path='/admin' element={<Admin />} />
            </Routes>
            
        </div>
    );
}

export default Shop;
