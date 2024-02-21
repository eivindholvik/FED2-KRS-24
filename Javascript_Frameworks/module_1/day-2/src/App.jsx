function App() {
    const productList = [
        { name: "Milk", price: 19.99 },
        { name: "Bread", price: 23.99 },
        { name: "Cheese", price: 40.99 },
    ];
    return (
        <>
            <h1>Product cart</h1>
            <Cart productList={productList} />
        </>
    );
}

function Cart({ productList }) {
    console.log(productList);
    return (
        <ul>
            {productList.map((product, index) => {
                return (
                    <li key={index}>
                        <Product name={product.name} price={product.price} />
                    </li>
                );
            })}
        </ul>
    );
}

function Product({ name, price }) {
    return (
        <p>
            {name} - {price}
        </p>
    );
}

export default App;
