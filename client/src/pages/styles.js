import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  home: {
    display: "flex",
    flexDirection: "column",
    color: "ButtonHighlight",
    alignItems: "center",
  },
  chartContainer: {
    marginTop: theme.spacing(8),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    width: "30rem",
    height: "30rem",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
