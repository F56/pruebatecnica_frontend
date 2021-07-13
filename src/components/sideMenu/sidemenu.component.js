import React from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import useStyles from "./sidemenu.styles";

export default function SideMenu(props) {
    const classes = useStyles();
  return (
    <React.Fragment>
      <Drawer anchor="left" open={props.open} onClose={props.toggle}>
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

        
          <ListItem button>
            <ListItemText primary="Hombre" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Mujer" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Junior" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Niños" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Accesorios" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Ofertas" />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
