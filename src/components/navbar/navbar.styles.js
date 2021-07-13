import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: { flexGrow: 1, fontFamily: "Bebas Neue", letterSpacing: "0.25rem", color: "black" },
  menuButton: { marginRight: theme.spacing(2), color: "black" },
  menuIcon: { fontSize: "4rem" },
  searchInput: { backgroundColor: "#EEEEEE", padding: "0.5rem 1rem", flexGrow: 1 },
  searchIcon: { backgroundColor: "#DEDEDE", padding: "0.5rem" },
  searchButton: { color: "black" },
  form: { width: "100vw" },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
  },
  appBar: { padding: "1rem 0", backgroundColor: "white" },
  shoppingButton: { color: "black", float: "right" },
}));

export default useStyles;
