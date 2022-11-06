import { Container, Typography, Button, Grid } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./style.css";

const Banner = () => {
  return (
    <div className="basket-banner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography className="title" variant="h1">
              ¡No hay productos agregados al carrito de compras!
            </Typography>
            <Button className="shopping-button" component={Link} to="/">
              Comprar.
            </Button>
          </Grid>
          <Grid className="brand" item xs={12} sm={6}>
            <ShoppingCart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;