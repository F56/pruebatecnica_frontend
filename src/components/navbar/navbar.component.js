import React, { useState } from "react";
import {
  Toolbar,
  AppBar,
  Container,
  Hidden,
  Typography,
  InputBase,
  ButtonBase,
  FormGroup,
  Box,
  Badge,
  IconButton
} from "@material-ui/core";
import useStyles from "./navbar.styles";
import { Menu, ShoppingCartOutlined, Search } from "@material-ui/icons";
import SideMenu from "../sideMenu/sidemenu.component";
import SideCart from "../sideCart/sidecart.component";

export default function Navbar() {
  const [openSideMenu, setOpenSideMenu] = useState(false),
    [openSideCart, setOpenSideCart] = useState(false),
    toggleSideMenu = () => {
      setOpenSideMenu(!openSideMenu);
    },
    toggleSideCart = () => {
      setOpenSideCart(!openSideCart);
    },
    classes = useStyles();
  return (
    <div>
      <SideMenu open={openSideMenu} toggle={toggleSideMenu} />
      <SideCart open={openSideCart} toggle={toggleSideCart} />
      <AppBar postion="sticky" boxshadow={0} className={classes.appBar}>
        <Container disableGutters={false}>
          <Toolbar disableGutters={true}>
            <Box component="div" className={classes.toolbar}>
              <Hidden mdUp>
                <ButtonBase
                  edge="end"
                  aria-label="menu"
                  onClick={toggleSideMenu}
                  className={classes.menuButton}
                >
                  <Menu className={classes.menuIcon} />
                </ButtonBase>
              </Hidden>
              <Typography variant="h3" className={classes.title}>
                CLOTHESSTORE
              </Typography>
              <IconButton
                edge="end"
                aria-label="menu"
                className={classes.shoppingButton}
                onClick={toggleSideCart}
              >
                <Badge badgeContent={1} color="primary">
                  <ShoppingCartOutlined
                    fontSize="large"
                    fontWeight="fontWeightLight"
                    color="inherit"
                  />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
          <Toolbar disableGutters={true}>
            <FormGroup row={true} className={classes.form}>
              <InputBase
                className={classes.searchInput}
                placeholder="Buscar aquí producto"
              />
              <ButtonBase className={classes.searchButton}>
                <Search
                  className={classes.searchIcon}
                  fontSize="large"
                  fontWeight="fontWeightLight"
                />
              </ButtonBase>
            </FormGroup>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
