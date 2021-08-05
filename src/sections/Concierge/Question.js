import React, { Component } from "react";
import { AiOutlineCalendar, AiOutlineCamera } from "react-icons/ai";
import { Select, MenuItem, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import "date-fns";
import ConciergeApi from "../../config/ConciergeApi";
import { ButtonText } from "./ConciergeElements";
import Autocomplete from "@material-ui/lab/Autocomplete";
//import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { Country, State, City } from "country-state-city";
import { Link } from "react-router-dom";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import data from '../../data/phoneCode.json'

import "./test.css";

const field_req = ["name",
  "age",
  "favouriteColor",
  "size",
  "sizeType",
  "city",
  "country",
  "needToUseAt",
  "photo",
  "email",
  "budget",
  "phoneCode",
  "waPhoneNumber"];

class Question2 extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        name: "id1",
        age: "id2",
        favouriteColor: "id3",
        size: "id3",
        sizeType: "id4",
        city: "id4",
        country: "id5",
        needToUseAt: "id6",
        photo: "id7",
        budget: "id8",
        email: "id9",
        phoneCode: "id9",
        nomor: "id10",
      },
      utama: true,
      test: false,
      id1: false,
      id2: false,
      id3: false,
      id4: false,
      id5: false,
      id6: false,
      id7: false,
      id8: false,
      id9: false,
      id10: false,
      others: "other",
      submit: false,

      name: "",
      age: "",
      favouriteColor: "Color",
      size: "",
      sizeType: "",
      city: "",
      country: "",
      needToUseAt: new Date(),
      photo: "",
      email: "",
      budget: "",
      phoneCode: "",
      tel: '',
      waPhoneNumber: "",

      name_err: "",
      age_err: "",
      favouriteColor_err: "",
      size_err: "",
      sizeType_err: "",
      city_err: "",
      country_err: "",
      needToUseAt_err: "",
      photo_err: "",
      email_err: "",
      budget_err: "",
      phoneCode_err: "",
      waPhoneNumber_err: "",

      types: [
        {
          name: "US",
          code: "US"
        },
        {
          name: "EUR",
          code: "EURO"
        },
        {
          name: "JPN",
          code: "JPN"
        }
      ],
      sizestype:
      {
        empty: ["No Option"],
        US: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        EURO: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '46', '49', '50'],
        JPN: ['11', '12', '13', '14', '15', '16', '17']
      }
    };

    this.handleChangeFile2 = this.handleChangeFile2.bind(this);
    this.handleChangeBudget1 = this.handleChangeBudget1.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitBudget = this.handleSubmitBudget.bind(this);
    this.handleSubmitCancelBudget = this.handleSubmitCancelBudget.bind(this);
    this.handleChangeBudget2 = this.handleChangeBudget2.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.selectRegion = this.selectRegion.bind(this)
    this.selectType = this.selectType.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.selectPhoneCode = this.selectPhoneCode.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
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
  useStyles2 = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 100,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  tanggal = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 100,
      color: "white",
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

  handleChange(res) {
    const idfield = this.state.fields[res.target.name];
    this.setState({ [idfield]: true });
    this.setState({ [res.target.name]: res.target.value });
    if (res.target.value === "") {
      this.setState({ [res.target.name + "_err"]: "Require" })
    }
    else {
      this.setState({ [res.target.name + "_err"]: "" })
    }
    if (res.target.name == "email") {
      var cekE = res.target.value;
      var test = cekE.split("@");

      if (test.length === 2 && test[1] !== "") {
        var test2 = test[1].split('.')
        if (test2.length === 2 && test2[1] !== "") {
          this.setState({ [res.target.name + "_err"]: "" })
        }
        else {
          this.setState({ [res.target.name + "_err"]: "Please insert email correctly" })
        }
      }
      else {
        this.setState({ [res.target.name + "_err"]: "Please insert email correctly" })
      }
    }
  }
  handleChangeDate(Date) {
    this.setState({ id6: true });
    this.setState({ needToUseAt: Date });
    console.log(Date);
  }
  handleChangeFile2(event) {
    const idfield = this.state.fields[event.target.name];
    this.setState({ [idfield]: true });
    this.setState({ photo: event.target.files[0] });
  }
  handleChangeBudget1(event) {
    if (event.target.value == "other") {
      this.setState({ utama: !this.state.utama });
      this.setState({ budget: "" });
    } else {
      this.setState({ test: false });
      this.setState({ budget: event.target.value });
      this.setState({ others: "other" });
      this.setState({ id8: true });
    }
  }
  selectCountry(val, name) {
    this.setState({ country: val });
    this.setState({ country2: name });
    this.setState({ city: '' });
  }

  selectRegion(val) {
    this.setState({ city: val });
    this.setState({ id5: true });
  }
  selectType(val) {
    this.setState({ sizeType: val });
    this.setState({ sizeType_err: "" })
  }
  selectSize(val) {
    if (val === "No Option") {
      this.setState({ size_err: "Require" })
      this.setState({ sizeType_err: "Require" })
    }
    else {
      this.setState({ size: val });
      this.setState({ id4: true });
      this.setState({ size_err: "" })
    }

  }
  selectPhoneCode(val) {
    this.setState({ phoneCode: val });
    this.setState({ waPhoneNumber_err: "" });
    this.setState({
      waPhoneNumber: this.state.phoneCode + this.state.tel
    });
  }
  handleChangeNumber(event) {
    this.setState({ tel: event.target.value })
    if (this.state.phoneCode === "") {
      this.setState({ waPhoneNumber_err: "Please pick your phone code" });
    }
    else {
      this.setState({
        waPhoneNumber: this.state.phoneCode + event.target.value
      });
      if (event.target.value === "") {
        this.setState({ waPhoneNumber_err: "Please Insert your number" });
        this.setState({ id10: false });
      }
      else {
        this.setState({ waPhoneNumber_err: "" });
        this.setState({ id10: true });
      }
    }

  }
  handleSubmit() {
    console.log(this.state.datafix)
    var formData = new FormData();
    const stateObj = this.state.datafix;
    formData.append("data", JSON.stringify(stateObj));
    formData.append("files.imageReference", stateObj.photo);
    // ConciergeApi.create(formData);
  }
  handleChangeBudget2(event) {
    this.setState({ budget: event.target.value });
    this.setState({ test: true });
  }
  handleSubmitBudget() {
    if (this.state.budget == '') {
      this.handleSubmitCancelBudget();
    }
    else {
      this.setState({ id8: true });
      this.setState({ utama: !this.state.utama });
      this.setState({ others: this.state.budget });
    }
  }
  handleSubmitCancelBudget() {
    this.setState({ budget: "" });
    this.setState({ test: false });
    this.setState({ utama: !this.state.utama });
    this.setState({ id8: false });
  }
  klikFunction() {
    document.getElementById("id7").click();
  }
  clickSubmit() {
    document.getElementById("submitBtn").click();
  }
  getSize(code) {
    if (code == '') {
      return (this.state.sizestype["empty"]);
    }
    else {
      return (this.state.sizestype[code])
    }
  }
  checkSubmit() {
    this.setState({
      datafix: {
        name: this.state.name,
        age: this.state.age,
        favouriteColor: this.state.favouriteColor,
        size: this.state.size,
        sizeType: this.state.sizeType,
        city: this.state.city,
        country: this.state.country2,
        needToUseAt: this.state.needToUseAt,
        photo: this.state.photo,
        budget: this.state.budget,
        email: this.state.email,
        waPhoneNumber: this.state.waPhoneNumber,
      },
    }, function () {
      var checked = true;
      for (let i = 0; i < field_req.length; i++) {
        const field = field_req[i];
        if (this.state[field + "_err"] === "" && checked !== false) {
          checked = true
        } else {
          checked = false;
          break;
        }
      }
      if (checked === true) {
        this.clickSubmit();
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        <Container
          className="container"
          style={{ marginTop: 150 }}
          hidden={this.state.utama ? false : true}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item align="right" xs={12} md={6}>
              <Typography variant="span" style={{ marginRight: 10, fontSize: "25px", }}>
                My Name is
              </Typography>
              <TextField
                style={{ marginTop: -3, width: 100, marginRight: 10, }}
                className="inputBox"
                inputProps={{style: {fontSize: 25}}} 
                InputLabelProps={{style: {fontSize: 25}}}
                error={this.state.name_err !== ""}
                helperText={this.state.name_err}
                onChange={this.handleChange}
                id="id1"
                placeholder="Name"
                name="name"
                type="text"
                autoComplete="off"
                required
                value={this.state.name}
              />
            </Grid>
            {this.state.id1 ? (
              <Grid item xs={12} md={6}>
                <Typography variant="span" style={{ marginRight: 10, fontSize: "25px", }}>
                  and I'm
                </Typography>
                <TextField
                  style={{ marginTop: -2, width: 58, }}
                  className="inputBox"
                  inputProps={{style: {fontSize: 25}}} 
                  InputLabelProps={{style: {fontSize: 25}}}
                  onChange={this.handleChange}
                  error={this.state.age_err !== ""}
                  helperText={this.state.age_err}
                  id="id2"
                  name="age"
                  placeholder="Age"
                  type="number"
                  required
                  value={this.state.age}
                />
                <Typography variant="span" style={{ marginLeft: 10, fontSize: "25px", }}>
                  years old
                </Typography>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            style={{ marginTop: 15 }}
          >
            {this.state.id2 ? (
              <Grid
                item
                align="right"
                xs={12}
                md={6}
                style={{ marginTop: 15, marginLeft: -50, }}
              >
                <Typography variant="span" style={{ marginRight: 10,  fontSize: "25px", }}>
                  My favourite color is
                </Typography>
                <FormControl required className={this.useStyles1.formControl}>
                  <Select
                    name="favouriteColor"
                    id="id3"
                    style={{
                      marginTop: -3, marginRight: 10, fill: "white", fontSize: 25,
                    }}
                    value={this.state.favouriteColor}
                    onChange={this.handleChange}
                    placeholder="Color"
                    autoWidth
                    required
                  >
                    <MenuItem value={"Color"} disabled>
                      Color{" "}
                    </MenuItem>
                    <MenuItem value={"Blue"}>Blue</MenuItem>
                    <MenuItem value={"Red"}>Red</MenuItem>
                    <MenuItem value={"Green"}>Green</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            ) : (
              ""
            )}
            {this.state.id3 ? (
              <Grid item xs={6} style={{ marginTop: 15 }}>
                <Typography variant="span" style={{ marginRight: 10, fontSize:"25px",}}>
                  and my dress size is
                </Typography>
                <Autocomplete
                  name="Type"
                  error={this.state.sizeType_err !== ""}
                  helperText={this.state.sizeType_err}
                  id="combo-box-country"
                  options={this.state.types}
                  getOptionLabel={(options) => options.name}
                  disableClearable
                  // value={this.state.sizeType}
                  autoComplete="off"
                  style={{
                    width: 50,
                    backgroundColor: 'transparent',
                    paddingLeft: 240,
                    marginTop: -30,
                    fontSize:25,
                  }}
                  renderInput={(params) =>
                    <TextField {...params} placeholder="Type"
                    />
                  }
                  onChange={(event, value) => this.selectType(value.code)}
                />
                <Autocomplete
                  name="size"
                  key={this.state.sizeType}
                  id="combo-box-city"
                  error={this.state.size_err !== ""}
                  helperText={this.state.size_err}
                  // value={this.state.size}
                  options={this.getSize(this.state.sizeType)}
                  disableClearable
                  autoComplete="off"
                  getOptionLabel={(options) => options}
                  autoSelect={true}
                  style={{ width: 50, marginLeft: 0, marginTop: -34, }}
                  renderInput={(params) =>
                    <TextField {...params} placeholder="Size"
                    />
                  }
                  onChange={(event, value) => this.selectSize(value)}
                />
              </Grid>
            ) : (
              ""
            )}

            {/* COSTUM */}
          </Grid>
          {this.state.id4 ? (
            <Grid
              item
              xs={12}
              alignItems="center"
              justifyContent="center"
              style={{ marginTop: 15, marginLeft: -80, }}
            >
              <Typography variant="span" style={{ marginLeft: 550 }}>
                I live in
              </Typography>
              <Autocomplete
                name="country"
                id="combo-box-country"
                options={Country.getAllCountries()}
                getOptionLabel={(options) => options.name}
                disableClearable
                // value={this.state.country}
                style={{
                  width: 120,
                  backgroundColor: "transparent",
                  marginLeft: 610,
                  marginTop: -27,
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Country" />
                )}
                onChange={(event, value) => this.selectCountry(value.isoCode, value.name)}
              />

              <Autocomplete
                name="city"
                key={this.state.country}
                // value={this.state.city}
                id="combo-box-city"
                options={City.getCitiesOfCountry(this.state.country)}
                disableClearable
                autoSelect={true}
                getOptionLabel={(options) => options.name}
                style={{ width: 110, marginLeft: 743, marginTop: -34, }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="City" />
                )}
                onChange={(event, value) => this.selectRegion(value.name)}
              />
            </Grid>
          ) : (
            ""
          )}
          {this.state.id5 ? (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid
                item
                xs={12}
                alignItems="center"
                justifyContent="center"
                style={{ marginTop: 15, marginLeft: -65, }}
              >
                <Typography variant="span" style={{ marginLeft: 450 }}>
                  and I need to use this dress at
                </Typography>
                <FormControl
                  required
                  className={this.tanggal.formControl}
                  style={{ marginLeft: 10 }}
                >
                  <KeyboardDatePicker
                    name="needToUseAt"
                    placeholder="Date"
                    error={this.state.needToUseAt_err !== ""}
                    helperText={this.state.needToUseAt_err}
                    id="id6"
                    value={this.state.needToUseAt}
                    onChange={this.handleChangeDate}
                    className="date"
                    placeholder="Date"
                    style={{ width: 200, marginTop: -3, }}
                    format="dd-MM-yyyy"
                    keyboardIcon={
                      <AiOutlineCalendar style={{ fill: "white" }} />
                    }
                    required
                  />
                </FormControl>
              </Grid>
            </MuiPickersUtilsProvider>
          ) : (
            ""
          )}
          {this.state.id6 ? (
            <Grid
              item
              xs={12}
              alignItems="center"
              justifyContent="center"
              style={{ marginTop: 15, marginLeft: -80, }}
            >
              <Typography variant="span" style={{ marginLeft: 440 }}>
                I have preferance for my dress
              </Typography>
              <input
                type="text"
                id="namaFile"
                value={this.state.photo.name}
                placeholder="Choose Image"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  marginLeft: 10,
                  border: "none",
                  borderBottom: "1px solid white",
                }}
                readOnly
              />
              <AiOutlineCamera
                type="button"
                id="klikFile"
                value="Klik Me"
                onClick={this.klikFunction}
                required
              />
              <input
                onChange={this.handleChangeFile2}
                name="photo"
                value=""
                type="file"
                id="id7"
                accept="image/png, image/jpeg,file/pdf"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  visibility: "collapse",
                }}
                required
              />
            </Grid>
          ) : (
            ""
          )}
          {this.state.id7 ? (
            <Grid
              item
              xs={12}
              alignItems="center"
              justifyContent="center"
              style={{ marginTop: 15, marginLeft: -10, }}
            >
              <Typography variant="span" style={{ marginLeft: 480 }}>
                My budget is
              </Typography>
              <FormControl
                required
                className={this.useStyles1.formControl}
                style={{ marginLeft: 10, marginTop: -3, }}
              >
                <Select
                  name="budget"
                  id="id8"
                  onChange={this.handleChangeBudget1}
                  required
                  value={this.state.budget}
                  autoWidth
                >
                  <MenuItem value="Budget" disabled>
                    {" "}
                    Budget{" "}
                  </MenuItem>
                  <MenuItem value="2000">starting from 2000(USD)</MenuItem>
                  <MenuItem value="10000">starting from 10000(USD)</MenuItem>
                  <MenuItem value="100000">
                    starting from 100000(USD)
                  </MenuItem>
                  <MenuItem
                    id="others"
                    value={
                      this.state.test ? this.state.budget : this.state.others
                    }
                  >
                    {" "}
                    {this.state.test
                      ? this.state.budget + " (USD)"
                      : "Others"}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          ) : (
            ""
          )}
          {this.state.id8 ? (
            <Grid
              item
              xs={12}
              alignItems="center"
              justifyContent="center"
              style={{ marginTop: 15 }}
            >
              <Typography variant="span" style={{ marginLeft: 450 }}>
                you can email me at
              </Typography>
              <TextField
                onChange={this.handleChange}
                id="id9"
                placeholder="Email"
                error={this.state.email_err !== ""}
                helperText={this.state.email_err}
                type="email"
                name="email"
                value={this.state.email}
                width="140px"
                style={{ marginLeft: 10, marginTop: -3, }}
                required
              />
            </Grid>
          ) : (
            ""
          )}
          {this.state.id9 ? (
            <Grid
              item
              xs={12}
              alignItems="center"
              justifyContent="center"
              style={{ marginTop: 15, marginLeft: -40, }}
            >
              <Typography variant="span" style={{ marginLeft: 430 }}>
                or WhatsApp me at
              </Typography>
              {/* <FormControl
                  required
                  className={this.tanggal.formControl}
                  style={{ marginLeft: 10, }}
                >
                  <Select
                    name="phoneCode"
                    id="id9"
                    value={this.state.phoneCode}
                    onChange={this.handleChange}
                    required
                    autoWidth
                    style={{ marginTop: -3, }}
                  >
                    <MenuItem value="Code" disabled>
                      Code
                    </MenuItem>
                    <MenuItem value="62">+62</MenuItem>
                    <MenuItem value="73">+73</MenuItem>
                    <MenuItem value="13">+13</MenuItem>
                  </Select>
                </FormControl> */}
              <Autocomplete
                name="code"
                id="combo-box-country"
                options={data.countries}
                getOptionLabel={(options) => options.code}
                disableClearable
                autoComplete="off"
                style={{
                  width: 100,
                  backgroundColor: 'transparent',
                  marginLeft: 155,
                  marginTop: -27,
                }}
                renderInput={(params) =>
                  <TextField {...params} placeholder="Code"
                  />
                }
                onChange={(event, value) => this.selectPhoneCode(value.code)}
              />
              <TextField
                onChange={this.handleChangeNumber}
                id="tel"
                name="nomor"
                error={this.state.waPhoneNumber_err !== ""}
                helperText={this.state.waPhoneNumber_err}
                value={this.state.tel}
                placeholder="Phone Number"
                onChange={this.handleChangeNumber.bind(this)}
                style={{ marginLeft: 10, marginTop: -3, }}
              />
            </Grid>
          ) : (
            ""
          )}
          <br></br>
          {this.state.id10 ? (
            <Grid container style={{ marginLeft: 205, marginTop: 20, }}>
              <Grid item xs />
              <Grid item xs={6}>
                <ButtonText
                  onClick={this.checkSubmit}
                  style={{
                    fontSize: 13,
                    height: 40,
                    width: 200,
                  }}
                >
                  SUBMIT MY REQUEST
                </ButtonText>
                <Link to="/Thanks" hidden={true}>
                  <ButtonText
                    id="submitBtn"
                    onClick={this.handleSubmit}
                    style={{
                      fontSize: 13,
                      height: 40,
                      width: 200,
                    }}
                  >
                    SUBMIT MY REQUEST
                  </ButtonText>
                </Link>
              </Grid>
              <Grid item xs />
            </Grid>
          ) : (
            ""
          )}
        </Container>


        <Grid
          className={"Budget2"}
          container
          style={{
            color: "white",
            marginTop: "17%",
          }}
          hidden=
          {this.state.utama ?
            true
            : false}
        >
          <Grid
            item
            xs={12}
            alignItems="center"
            justifyContent="center"
            style={{ marginTop: 15 }}
          >
            <Typography variant="span" style={{ marginLeft: 620, fontWeight: "bold", }}>
              My Preffered Budget
            </Typography>
            <TextField
              onChange={this.handleChangeBudget2}
              id="prefB"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="Prefer Budget"
              type="number"
              name="prefB"
              style={{ marginLeft: 10, marginTop: -5, width: 100, }}
            />
            USD
          </Grid>

          <Grid
            container
            spacing={1}
            style={{ marginLeft: 425, marginTop: 10 }}
          >
            <Grid item xs={3}>
              <ButtonText
                onClick={this.handleSubmitBudget}
                direction={"row"}
                style={{
                  fontSize: 10,
                  height: 40,
                  width: 110,
                  backgroundColor: "white",
                  textAlign: "center",
                  marginLeft: 230,
                  color: "black",
                }}
              >
                ENTER
              </ButtonText>
            </Grid>
            <Grid item xs={3} style={{ marginLeft: 100 }}>
              <ButtonText
                style={{
                  fontSize: 10,
                  height: 40,
                  width: 110,
                  textAlign: "center",
                  backgroundColor: "black",
                  marginLeft: -30,
                  color: "white",
                }}
                onClick={this.handleSubmitCancelBudget}
              >
                CANCEL
              </ButtonText>
            </Grid>
          </Grid>
        </Grid>

      </React.Fragment>
    );
  }
}

export default Question2;
