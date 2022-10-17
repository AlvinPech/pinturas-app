import Product from "../product";
import { Grid, Container } from "@mui/material";
import Banner from "../banner";

const Products = ({ products, addProduct }) => {
    return(
        <div>
            <Banner/>
            <Container id="products">
            <Grid container spacing={4}>
            {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4}>
                    <Product product={product} addProduct={addProduct} />
                </Grid>
            ))}
            </Grid>
      </Container>
        </div>
    )
}


export default Products;