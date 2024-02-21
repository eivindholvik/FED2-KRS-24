import { useState } from "react";

import "./App.css";
import Cart from "./components/Cart";

function App() {
    const [productList, setProductList] = useState([
        { productName: "Milk", price: 192.92, id: 1 },
        { productName: "Bread", price: 23.99, id: 2 },
        { productName: "Cheese", price: 40.99, id: 3 },
    ]);

    return (
        <div className="hei">
            <h1>Product cart</h1>
            <Cart productList={productList} setProductList={setProductList} />
        </div>
    );
}

export default App;
