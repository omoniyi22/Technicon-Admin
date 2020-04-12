import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";
import React from "react";
import { mySVG } from "../../assets/svg/svg";
import "./index.css";
import { AuthButton } from "../General/buttons";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "25ch"
  }
}));

const Signup = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="login-container">
        <div className="l-logo-container">
          <span className="l-logo">
            <img src={mySVG.logo} alt="logo" className="login-logo" />
          </span>
        </div>

        <div className="login-logo-container">
          <div className="vector-1"></div>
          <div className="vector-2"></div>
        </div>

        <p className="login-title">Create an account</p>
        <p className="login-subtitle">in 30 seconds or less</p>

        <div className="login-form-container">
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <TextField
              className="MuiInput-input"
              id="outlined-search"
              label="Search field"
              type="search"
              variant="outlined"
            />
          </FormControl>

          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <TextField
              className="MuiInput-input"
              id="outlined-search"
              label="Search field"
              type="search"
              variant="outlined"
            />
          </FormControl>

          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <TextField
              className="MuiInput-input"
              id="outlined-search"
              label="Search field"
              type="search"
              variant="outlined"
            />
          </FormControl>

          <div>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </div>
          <AuthButton name="Signup" />
          <span className="got-an-account">
            Got an account? <span id="sign-in">Sign in</span>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
