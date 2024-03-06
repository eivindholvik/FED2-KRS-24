import { Box, Typography } from "@mui/material";

import { products } from "../../../utils/products";
import Product from "./Product";

function Shop() {
    return (
        <Box>
            <Typography>Shop</Typography>
            {products.map((product) => {
                return <Product key={product.id} {...product} />;
            })}
        </Box>
    );
}

export default Shop;
