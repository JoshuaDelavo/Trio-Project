import React, { useState, useEffect } from "react";
import { Button, TextField, TextFieldProps } from "@material-ui/core";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import pickers from "@material-ui/pickers";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Concierge from "../../config/ConciergeApi";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import Countries from "../Countries";
import { createMuiTheme, withStyles, fade } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { green } from "@material-ui/core/colors";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  NavCon,
  NavBurgerIcon,
  ConMenu,
  ConItem,
  ButtonText,
  BottomIcon,
} from "./ConciergeElements";
import "./Concierge.css";
import { Block } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * .MuiFormLabel-root ": {
      background: "none",
      width: "auto",
      color: "grey",
      borderColor: "white",
      height: "2em",
    },
    "& > * .MuiInputBase-root ": {
      background: "none",
      margin: theme.spacing(1),
      width: "auto",
      color: "white",
      borderColor: "white",
      height: "2em",
      borderColor: "blue",
    },
    "& > * .MuiFormControl-root ": {
      verticalAlign: "baseline",
    },

    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "transparent",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
      },
      "&:hover fieldset": {
      },
      "&.Mui-focused fieldset": {
      },
    },
    "&.MuiTextField-root": {
      marginTop: 40,
    },
    formControl: {
      verticalAlign: "baseline",
    },
  },
  input: {
    color: "white",
  },
  label: {
    color: "white",
  },
}));
const useStyles1 = makeStyles((theme) => ({
  formControl: {
    padding: theme.spacing(1),
    minWidth: 120,
    display: "initial",
    verticalAlign: "middle",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Page2 = () => {
  const [events, setEvents] = useState([]);
  const paragraph =
    "Fashion Concierge is interactive way to send your inquiry to Sebastian Gunawan and team. Tell us what you have in mind. Your color preferences, your style preferences, or even upload your rough sketches about the art piece of your dream";
  //   useEffect(() => {
  //     Concierge.findBudgets().then((res) => {
  //       setEvents(res);
  //       console.log(res);
  //     });
  //   }, []);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54"),
  );

  const classes = useStyles();
  const classes1 = useStyles1();
  const [age, setAge] = React.useState("");
  const [color, setColor] = React.useState("");
  const [event, setEvent] = useState("");
  const [looks, setLook] = useState("");
  const [materials, setMaterial] = useState("");
  const [ornament, setOrnament] = useState("");
  const [budget, setBudget] = useState("");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };
  const handleChangeEvent = (event) => {
    setEvent(event.target.value);
  };
  const handleChangeLook = (event) => {
    setLook(event.target.value);
  };
  const handleChangeMaterial = (event) => {
    setMaterial(event.target.value);
  };
  const handleChangeOrnament = (event) => {
    setOrnament(event.target.value);
  };
  const handleChangeBudget = (event) => {
    setBudget(event.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "green",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "green",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "transparent",
        },
        "&:hover fieldset": {
          borderColor: "transparent",
        },
        "&.Mui-focused fieldset": {
          borderColor: "transparent",
        },
      },
      "& > * .MuiFormControl-root ": {
        verticalAlign: "none",
      },
    },
  })(TextField);

  const BootstrapInput = withStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.common.white,
      border: "1px solid #ced4da",
      fontSize: 16,
      width: "auto",
      padding: "10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

  const useStylesReddit = makeStyles((theme) => ({
    root: {
      border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "#fcfcfb",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover": {
        backgroundColor: "#fff",
      },
      "&$focused": {
        backgroundColor: "#fff",
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
    focused: {},
  }));

  const ValidationTextField = withStyles({
    root: {
      "& input:valid + fieldset": {
        borderColor: "green",
        borderWidth: 2,
      },
      "& input:invalid + fieldset": {
        borderColor: "red",
        borderWidth: 2,
      },
      "& input:valid:focus + fieldset": {
        borderLeftWidth: 6,
        padding: "4px !important", // override inline-style
      },
    },
  })(TextField);

  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

  return (
    <form className={classes.root} noValidate autoComplete="off">
      My Name is
      {/* <TextField
        color="secondary"
        id="filled-basic"
        label="Name"
        variant="filled"
        theme={theme}
        tintColor="#51bc8a"
        textColor="#51bc8a"
        baseColor="#FFFFFF"
        InputProps={{
          className: classes.input,
        }}
      /> */}
      <FormControl className={classes1.formControl}>
        <CssTextField
          className={classes.margin}
          id="custom-css-outlined-input"
          variant="outlined"
          label="Input name"
        />
      </FormControl>
      I'm
      <FormControl className={classes1.formControl}>
        <Select
          value={age}
          onChange={handleChangeAge}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            gender
          </MenuItem>
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Shemale"}>Shemale</MenuItem>
        </Select>
      </FormControl>
      and I'm{" "}
      <FormControl className={classes1.formControl}>
        <CssTextField
          className={classes.margin}
          id="custom-css-outlined-input"
          variant="outlined"
          label="Age"
        />{" "}
      </FormControl>
      years old My favourite color is
      <FormControl className={classes1.formControl}>
        <Select
          value={color}
          onChange={handleChangeColor}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            Color
          </MenuItem>
          <MenuItem value={"Red"}>Red</MenuItem>
          <MenuItem value={"Blue"}>Blue</MenuItem>
          <MenuItem value={"Yellow"}>Yellow</MenuItem>
        </Select>
      </FormControl>
      and I need a dress for
      <Countries></Countries>I want it looks
      <FormControl className={classes1.formControl}>
        <Select
          value={looks}
          onChange={handleChangeLook}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            Looks
          </MenuItem>
          <MenuItem value={"Gentle"}>Gentle</MenuItem>
          <MenuItem value={"Soft"}>Soft</MenuItem>
          <MenuItem value={"Extra Ordinary"}>Extra Ordinary</MenuItem>
        </Select>
      </FormControl>
      with
      <FormControl className={classes1.formControl}>
        <Select
          value={materials}
          onChange={handleChangeMaterial}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            Materials
          </MenuItem>
          <MenuItem value={"Woll"}>Woll</MenuItem>
          <MenuItem value={"Cutton"}>Cutton</MenuItem>
          <MenuItem value={"Silk"}>Silk</MenuItem>
        </Select>
      </FormControl>
      as the main material I prefer
      <FormControl className={classes1.formControl}>
        <Select
          value={ornament}
          onChange={handleChangeOrnament}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            Ornament
          </MenuItem>
          <MenuItem value={"Woll"}>Woll</MenuItem>
          <MenuItem value={"Cutton"}>Cutton</MenuItem>
          <MenuItem value={"Silk"}>Silk</MenuItem>
        </Select>
      </FormControl>
      use of special ornament (such as beads, buttons, etc) My budget is ranging
      from
      <FormControl className={classes1.formControl}>
        <Select
          value={budget}
          onChange={handleChangeBudget}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            Budget
          </MenuItem>
          <MenuItem value={"<100Million"}>under 100 million</MenuItem>
          <MenuItem value={"100 Million > and < 500 Million"}>
            Bettween 100 million and 500 million
          </MenuItem>
          <MenuItem value={">500Million"}>Above 500 million</MenuItem>
        </Select>
      </FormControl>
      you can reach me at{" "}
      <CssTextField
        className={classes.margin}
        id="custom-css-outlined-input"
        variant="outlined"
        label="Phone Number"
      />
      on
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      <ConItem>
        <ButtonText value="Start">Submit</ButtonText>
      </ConItem>
    </form>
  );
};
export default Page2;
