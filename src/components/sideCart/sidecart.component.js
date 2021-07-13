import React from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Divider,
  Typography,
} from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import useStyles from "./sidecart.styles";

export default function SideCart(props) {
  const productList = [
    { id: 1, productName: "Polo Azul", price: 35000, SKU: 23400, quantity: 1 },
    { id: 2, productName: "Polo Roja", price: 35000, SKU: 23401, quantity: 1 },
    {
      id: 1,
      productName: "Polo Negra",
      price: 35000,
      SKU: 23402,
      quantity: 1,
    },
  ];

  const classes = useStyles();
  return (
    <React.Fragment>
      <Drawer anchor="right" open={props.open} onClose={props.toggle}>
        <List component="nav" className={classes.sidebarList}>
          <IconButton
            edge="end"
            aria-label="menu"
            color="primary"
            onClick={props.toggle}
            className={classes.closeButton}
          >
            <CloseRounded fontSize="large" />
          </IconButton>

          <ListItem className={classes.cartList} disableGutters={true}>
            {productList.map((product, index) => {
              return (
                <Box key={index} className={classes.productInfo}>
                  <img src="https://via.placeholder.com/100" alt={product.id} />
                  <Box>
                    <Typography variant="body2">
                      <List dense={true} disableGutters={false}>
                        <ListItem>{product.productName}</ListItem>
                        <ListItem>Cantidad: {product.quantity}</ListItem>
                        <ListItem>Precio: ${product.price}</ListItem>
                        <ListItem>SKU: {product.SKU}</ListItem>
                      </List>
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </ListItem>

          <Divider />
        </List>
      </Drawer>
    </React.Fragment>
  );
}
