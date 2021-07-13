import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  closeButton: { float: "right" },
  sidebarList: { maxWidth: "80vw", padding: "0 1.5rem" },
  cartList: { display: "flex", flexDirection: "column" },
  productInfo: {
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export default useStyles;
