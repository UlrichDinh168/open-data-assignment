import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  profile: {
    color: "ButtonHighlight",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "0",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginTop: 20,
      justifyContent: "center",
    },
  },
  unauthorizedContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "400px",
    alignItems: "center",
  },

  logout: {
    marginLeft: "20px",
  },

  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
