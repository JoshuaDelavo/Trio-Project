import React, { useState, useEffect, Component } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { Button, TextField, Select, MenuItem } from "@material-ui/core";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import pickers from "@material-ui/pickers";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Concierge from "../../config/ConciergeApi";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import AutosizeInput from "react-input-autosize";
import FormControl from "@material-ui/core/FormControl";
import "date-fns";
import ConciergeApi from "../../config/ConciergeApi";
import DateFnsUtils from "@date-io/date-fns";
import Countries from "../Countries";
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
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import { id } from "date-fns/locale";
import "./Concierge.css";
import dateFormat from "dateformat";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import axios from "axios";

class Question extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      favouriteColor: "",
      size: "",
      sizeType: "",
      city: "",
      country: "",
      needToUseAt: "",
      photo: "",
      budget: "",
      email: "",
      waPhoneNumber: "",
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleChangeCode = this.handleChangeCode.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeCountries = this.handleChangeCountries.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.handleChangeBudget = this.handleChangeBudget.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhoneCode = this.handleChangePhoneCode.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitBudget = this.handleSubmitBudget.bind(this);
    this.handleSubmitCancelBudget = this.handleSubmitCancelBudget.bind(this);
    this.handleChangeBudget2 = this.handleChangeBudget2.bind(this);
    var country2 = this;
  }
  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/David-Haim-zz/CountriesToCitiesJSON/master/countriesToCities.json",
      )
      .then(function (response) {
        // this.setState({ data: response.data });
        console.log(response.data);
      });
  }

  useStyles1 = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        color: "white",
        background: "grey",
        margin: theme.spacing(1),
        width: "auto",
        height: "auto",
      },
    },
  }));
  setValue(value) {
    React.useState("Color");
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
    document.getElementById(1).className = "show";
    var test = document.getElementById("name");
    var length = test.value.length;
    test.style.width = length * 12 + "px";
    console.log(this.state.data);
  }
  handleChangeAge(event) {
    this.setState({ age: event.target.value });
    document.getElementById(2).className = "show";
  }
  handleChangeColor(event) {
    this.setState({ favouriteColor: event.target.value });
    document.getElementById(3).className = "show";
  }
  handleChangeSize(event) {
    this.setState({ size: event.target.value });
  }
  handleChangeCode(event) {
    this.setState({ sizeType: event.target.value });
    document.getElementById(4).className = "show";
  }
  handleChangeCity(event) {
    this.setState({ city: event.target.value });
  }
  handleChangeCountries(event) {
    this.setState({ country: event.target.value });
    document.getElementById(5).className = "show";
  }
  handleChangeDate(date) {
    this.setState({ needToUseAt: date.target.value });
    document.getElementById(6).className = "show";
  }
  handleChangeFile(event) {
    document.getElementById(7).className = "show";
    this.setState({ photo: event.target.files[0] });
    document.getElementById("namaFile").value = event.target.files[0].name;
    var test = document.getElementById("namaFile");
    var length = test.value.length;
    test.style.width = length * 12 + "px";
  }
  handleChangeBudget(event) {
    if (event.target.value == "others") {
      document.getElementById("budget2").className = "show";
      document.getElementById("utama").hidden = true;
    } else {
      this.setState({ budget: event.target.value });
    }
    document.getElementById(8).className = "show";
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
    document.getElementById(9).className = "show";
    var test = document.getElementById("email");
    var length = test.value.length;
    test.style.width = length * 13 + "px";
  }
  handleChangePhoneCode(event) {
    this.setState({ phone_code: event.target.value });
    console.log(this.state.phone_code);
  }
  handleChangeNumber(event) {
    this.setState({
      waPhoneNumber: "+" + this.state.phone_code + event.target.value,
    });
    document.getElementById(10).className = "show";
    var test = document.getElementById("tel");
    var length = test.value.length;
    test.style.width = length * 12 + "px";
  }
  handleSubmit() {
    console.log(this.state);
    var formData = new FormData();
    const stateObj = this.state;
    formData.append("data", JSON.stringify(stateObj));
    formData.append("file.imageReferance", stateObj.photo);
    ConciergeApi.create(formData);
    document.getElementById("second").hidden = true;
    document.getElementById("third").hidden = false;
  }
  handleChangeBudget2(event) {
    this.setState({ budget: event.target.value });
    document.getElementById("others").innerHTML = this.state.budget;
    var test = document.getElementById("budget");
    var length = event.target.value.length;
    test.style.width = (6 + length) * 13 + "px";
    if (window.innerWidth < 1024) {
      var cek = document.getElementById("m8");
      cek.style.marginLeft = "-" + 186 + "px";
      cek = document.getElementById("m82");
      cek.style.marginLeft = 20 + "px";
    }
  }
  handleSubmitBudget() {
    document.getElementById("others").innerHTML = this.state.budget + " USD";
    document.getElementById("utama").hidden = false;
    document.getElementById("budget2").hidden = true;
  }
  handleSubmitCancelBudget() {
    this.setState({ budget: "" });
    document.getElementById("utama").className = "show";
    document.getElementById("budget2").className = "hide";
  }
  klikFunction() {
    document.getElementById("file").click();
  }

  render() {
    return (
      <div>
        <div id="utama">
          <div id="segaris">
            <div id="m1">
              <div id="0">
                My Name is
                {/* <input
                  onChange={this.handleChangeName}
                  id="name"
                  name="form-field-name"
                  value={this.state.name}
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                /> */}
                <TextField
                  onChange={this.handleChangeName}
                  id="name"
                  placeholder="Name"
                  type="text"
                  size="medium"
                  helperText="Please Enter You'r Name"
                  required
                />
              </div>
            </div>
            <div id="m2">
              <div id="1" className="hide" style={{ marginLeft: "10px" }}>
                and I'm
                <div id="umur">
                  {/* <input
                    onChange={this.handleChangeAge}
                    id="age"
                    placeholder="Age"
                    type="number"
                    name="age"
                    max="120"
                    min="1"
                    required
                  /> */}
                  <TextField
                    onChange={this.handleChangeAge}
                    id="age"
                    placeholder="Age"
                    type="number"
                    required
                  />
                </div>
                years old
              </div>
            </div>
          </div>
          <br />
          <br />
          <div id="segaris">
            <div id="m3">
              <div id="2" className="hide">
                My favourite color is
                <div id="warna">
                  <FormControl className={this.useStyles1.formControl}>
                    {/* <select
                      name="color"
                      id="color"
                      onChange={this.handleChangeColor}
                      required
                    >
                      <option value="">Color</option>
                      <option value="Blue">Blue</option>
                      <option value="Red">Red</option>
                      <option value="Green">Green</option>
                    </select> */}
                    <Select
                      name="color"
                      select
                      id="color"
                      onChange={this.handleChangeColor}
                      placeholder="Color"
                      required
                    >
                      <MenuItem value={""} disabled>
                        Select
                      </MenuItem>
                      <MenuItem value={"Blue"}>Blue</MenuItem>
                      <MenuItem value={"Red"}>Red</MenuItem>
                      <MenuItem value={"Green"}>Green</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div id="m4">
              <div id="3" className="hide">
                and my dress size is
                <FormControl className={this.useStyles1.formControl}>
                  <Select
                    name="size"
                    id="size"
                    onChange={this.handleChangeSize}
                    required
                  >
                    <MenuItem value="" disabled>
                      Size
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={this.useStyles1.formControl}>
                  <Select
                    name="code"
                    id="code"
                    onChange={this.handleChangeCode}
                    required
                  >
                    <MenuItem value="" disabled>
                      Code
                    </MenuItem>
                    <MenuItem value="Euro">Euro</MenuItem>
                    <MenuItem value="US">US</MenuItem>
                    <MenuItem value="JPN">JPN</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div id="segaris">
            <div id="m5">
              <div id="4" className="hide">
                I live in
                <FormControl className={this.useStyles1.formControl}>
                  <Select
                    name="kota"
                    id="kota"
                    onChange={this.handleChangeCity}
                    required
                  >
                    {/* {this.country2.map(name => (
                      <option value={name[0]}>
                        {name[0]}
                      </option>
                    ))} */}
                    <MenuItem value="" disabled>
                      City
                    </MenuItem>
                    <MenuItem value="Taipe">Taipe</MenuItem>
                    <MenuItem value="Jakarta">Jakarta</MenuItem>
                    <MenuItem value="Malvoch">Malvoch</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={this.useStyles1.formControl}>
                  <Select
                    name="negara"
                    id="negara"
                    onChange={this.handleChangeCountries}
                    required
                  >
                    <MenuItem value="" disabled>
                      Contry
                    </MenuItem>
                    <MenuItem value="China">China</MenuItem>
                    <MenuItem value="Thailand">Thailand</MenuItem>
                    <MenuItem value="German">German</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div id="segaris">
            <div id="m6">
              <div id="5" className="hide">
                and I need to use this dress at
                <div id="m62">
                  <form name="date" id="date">
                    <DatePickerComponent
                      onChange={this.handleChangeDate}
                      className="date"
                      placeholder="Date"
                      format="dd MMMMMMMMMM yyyy"
                      required
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div id="segaris">
            <div id="m7">
              <div id="6" className="hide">
                I have preferance for my dress
                <div id="m72">
                  <input type="text" id="namaFile" readOnly />
                  <AiOutlineCamera
                    type="button"
                    id="klikFile"
                    value="Klik Me"
                    onClick={this.klikFunction}
                    required
                  />
                  <input
                    onChange={this.handleChangeFile}
                    type="file"
                    id="file"
                    accept="image/png, image/jpeg,file/pdf"
                    style={{ backgroundColor: "black", visibility: "collapse" }}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div id="segaris">
            <div id="m8">
              <div id="7" className="hide">
                my budget is
                <div id="m82">
                  <FormControl className={this.useStyles1.formControl}>
                    <Select
                      name="budget"
                      id="budget"
                      onChange={this.handleChangeBudget}
                      required
                    >
                      <MenuItem value="" diabled>
                        {" "}
                        Budget{" "}
                      </MenuItem>
                      <MenuItem value="2000">starting from 2000(USD)</MenuItem>
                      <MenuItem value="10000">
                        starting from 10000(USD)
                      </MenuItem>
                      <MenuItem value="100000">
                        starting from 100000(USD)
                      </MenuItem>
                      <MenuItem id="others" value="others">
                        {" "}
                        Others
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div id="segaris">
            <div id="m9">
              <div id="8" className="hide">
                you can email me at
                <div id="m92">
                  <TextField
                    onChange={this.handleChangeEmail}
                    id="email"
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div id="segaris">
            <div id="m10">
              <div id="9" className="hide">
                or WhatsApp me at
                <FormControl style={{ width: "30%" }}>
                  <Select
                    name="phoneCode"
                    id="phoneCode"
                    onChange={this.handleChangePhoneCode}
                    required
                  >
                    <MenuItem value="" disabled>
                      Code
                    </MenuItem>
                    <MenuItem value="62">+62</MenuItem>
                    <MenuItem value="73">+73</MenuItem>
                    <MenuItem value="13">+13</MenuItem>
                  </Select>
                </FormControl>
                <div id="m102">
                  <TextField
                    onChange={this.handleChangeNumber}
                    id="tel"
                    name="form-field-name"
                    placeholder="Phone Number"
                    onChange={this.handleChangeNumber.bind(this)}
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div id="m11">
            <div id="10" className="hide">
              <ButtonText onClick={this.handleSubmit}>
                SUBMIT MY REQUEST
              </ButtonText>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id="budget2" className="hide">
          My Prefer Budget
          <TextField
            onChange={this.handleChangeBudget2}
            id="prefB"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="Prefer Budget"
            type="number"
            name="prefB"
          />
          USD
          <br />
          <div id="pembatas">
            <div id="setuju">
              <ButtonText onClick={this.handleSubmitBudget}>ENTER</ButtonText>
            </div>
            <div id="batal">
              <ButtonText
                style={{
                  margin: "30px",
                  backgroundColor: "black",
                  color: "white",
                }}
                onClick={this.handleSubmitCancelBudget}
              >
                CANCEL
              </ButtonText>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
