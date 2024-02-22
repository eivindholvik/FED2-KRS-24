import Product from "./Product";

export default function Cart({ productList, setProductList }) {
    function toggleRed(e) {
        setProductList((prev) => {
            return prev.map((product, i) => {
                if (i === Number(e.target.closest("li").id)) {
                    return { ...product, toggled: !product.toggled };
                }
                return product;
            });
        });
    }

    return (
        <ul>
            {productList.map((product, index) => {
                return (
                    <li
                        key={index}
                        onClick={toggleRed}
                        id={index}
                        className={product.toggled && "toggle"}
                    >
                        <Product {...product} />
                    </li>
                );
            })}
        </ul>
    );
}
