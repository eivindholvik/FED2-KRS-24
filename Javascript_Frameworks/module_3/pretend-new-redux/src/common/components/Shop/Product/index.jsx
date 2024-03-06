import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../services/store/cartSlice";

function Product({ id, title, price, discountedPrice }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ id, title, price, discountedPrice }));
    };

    return (
        <Box>
            <Typography>title: {title}</Typography>
            <Button variant="contained" onClick={handleAddToCart}>
                Add to cart
            </Button>
        </Box>
    );
}

export default Product;
