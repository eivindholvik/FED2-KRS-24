import { Box, Button, Typography } from "@mui/material";

import { products } from "../../../utils/products";
import Product from "./Product";
import { lang } from "./lang";
import { useState } from "react";

function Shop() {
    const [selectedLang, setSelectedLang] = useState("no");
    return (
        <>
            <Button
                onClick={() => {
                    setSelectedLang((prev) => {
                        if (prev === "no") {
                            return "en";
                        }
                        return "no";
                    });
                }}
            >
                {selectedLang}
            </Button>
            <Box>
                <Typography>{lang.title[selectedLang]}</Typography>
                {products.map((product) => {
                    return <Product key={product.id} {...product} />;
                })}
            </Box>
        </>
    );
}

export default Shop;
