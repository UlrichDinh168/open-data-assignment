import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";
// actions
import { notificationActions } from "../actions";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const notification = useSelector((state) => state.notification.notification);
  useEffect(() => {
    if (notification) {
      setOpen(true);
    }
  }, [notification]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(notificationActions.resetNotification());
    setOpen(false);
  };
  if (!notification) {
    return null;
  }

  const { message, duration, type } = notification;
  console.log(message);
  return (
    <div className="snackbar">
      <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
        <div>
          <Alert onClose={handleClose} severity={type}>
            {message ? message : null}
          </Alert>
        </div>
      </Snackbar>
    </div>
  );
}
