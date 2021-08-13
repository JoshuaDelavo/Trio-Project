import React, { Component } from "react";
import { AiOutlineCalendar, AiOutlineCamera } from "react-icons/ai";
import {
  Select, MenuItem, Typography, Container, InputLabel,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Paper
} from "@material-ui/core";
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
import closeIcn from '../../images/close_icon.svg';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import data from '../../data/phoneCode.json'
import "./style.css";
import { withStyles } from '@material-ui/core/styles';
import camera from '../../images/camera.svg';

const CustomTextfieldRaw = withStyles({
  root: {
    width: '100%',
    '& label.Mui-focused': {
      color: 'white',
    },
    '& label.Mui-focused.Mui-error': {
      color: 'red',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline.Mui-error:after': {
      borderBottomColor: 'red',
    },
    '& .MuiInput-underline.Mui-error': {
      color: 'red',
    },
  },
})(TextField);

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function goBack() {
  window.history.go(-2);
}

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

const styles = theme => ({
  textValue: {
    fontSize: 25,
    fontWeight: 100,
    borderBottom: "1px solid white"
  },
  marginLeftDesktop: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 10
    }
  },
  marginRightDesktop: {
    [theme.breakpoints.up('md')]: {
      marginRight: 10
    }
  },
  marginRightAll: {
    marginRight: 10
  },
  marginTopMobile: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
    },
  },
  floatLeftMobile: {
    [theme.breakpoints.down('sm')]: {
      float: 'left'
    }
  },
});

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
      id1: true,
      id2: true,
      id3: true,
      id4: true,
      id5: true,
      id6: true,
      id7: true,
      id8: true,
      id9: true,
      id10: true,
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

  setValue(value) {
    React.useState("Color");
  }

  handleChange(res) {
    const idfield = this.state.fields[res.target.name];
    this.setState({ [idfield]: true });
    this.setState({ [res.target.name]: res.target.value });
    if (res.target.value === "") {
      this.setState({ [res.target.name + "_err"]: "Required" })
    }
    else {
      this.setState({ [res.target.name + "_err"]: "" })
    }
    if (res.target.name == "email") {
      var cekE = res.target.value;
      var test = cekE.split("@");

      if (test.length === 2 && test[1] !== "") {
        var test2 = test[1].split('.')
        if (test2.length >= 2 && test2[1] !== "") {
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
      this.setState({ size_err: "Required" })
      this.setState({ sizeType_err: "Required" })
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
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
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

  }
  handleSubmit() {
    console.log(this.state.datafix)
    var formData = new FormData();
    const stateObj = this.state.datafix;
    formData.append("data", JSON.stringify(stateObj));
    formData.append("files.imageReference", stateObj.photo);
    ConciergeApi.create(formData);
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
  goBack() {
    window.history.go(-2);
  }
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container
          className="container"
          hidden={this.state.utama ? false : true}
        >
          <Grid container
            spacing={2} >
            <Grid item sm={10} xs={9} />
            <Grid item sm={2} xs={3}
              style={{
                marginTop: "2.9%",
                marginLeft: "-0.8%",
                marginBottom: "3%"
              }}>
              <img src={closeIcn} onClick={() => goBack()}></img>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12}>
              <Grid
                container>
                <Typography variant="span" style={{ fontSize: 25 }} className={classes.marginRightAll}>
                  My Name is
                </Typography>
                <CustomTextfieldRaw
                  className={classes.marginRightAll}
                  style={{ width: 100 }}
                  error={this.state.name_err !== ""}
                  helperText={this.state.name_err}
                  onChange={this.handleChange}
                  InputProps={{ style: { fontSize: 25 } }}
                  id="id1"
                  name="name"
                  type="text"
                  autoComplete="off"
                  required
                  value={this.state.name}
                />
                {this.state.id1 ? (
                  <div className={`${classes.marginTopMobile}`}>
                    <Typography variant="span" style={{ fontSize: 25 }} className={`${classes.marginRightAll} `}>
                      and I'm
                    </Typography>
                    <CustomTextfieldRaw className={classes.marginRightAll}
                      style={{ width: 60, }}
                      onChange={this.handleChange}
                      error={this.state.age_err !== ""}
                      helperText={this.state.age_err}
                      id="id2"
                      name="age"
                      type="number"
                      InputProps={{ inputProps: { min: 0 }, style: { fontSize: 25 } }}
                      required
                      value={this.state.age}
                    />
                    <Typography variant="span" style={{ fontSize: 25 }}>
                      years old
                    </Typography>
                  </div>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>

          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ marginTop: 20 }}
          >
            {this.state.id2 ? (
              <Grid item xs={12}>
                <Grid
                  container>
                  <Typography variant="span" style={{ fontSize: 25 }} className={classes.marginRightAll}>
                    My favourite color is
                  </Typography>
                  <FormControl required>
                    <Select className={classes.marginRightAll}
                      labelId="color"
                      name="favouriteColor"
                      id="id3"
                      style={{
                        fill: "white", fontSize: 25, width: 100
                      }}
                      value={this.state.favouriteColor}
                      onChange={this.handleChange}
                      autoWidth
                      required
                    >
                      <MenuItem value={"Blue"}>Blue</MenuItem>
                      <MenuItem value={"Red"}>Red</MenuItem>
                      <MenuItem value={"Green"}>Green</MenuItem>
                    </Select>
                  </FormControl>
                  {this.state.id3 ? (
                    <React.Fragment>
                      <Typography variant="span" style={{ fontSize: 25 }} className={`${classes.marginRightAll} ${classes.marginTopMobile}`}>
                        and my dress size is
                      </Typography>
                      <Autocomplete
                        className={classes.marginRightAll}
                        name="Type"
                        error={this.state.sizeType_err !== ""}
                        helperText={this.state.sizeType_err}
                        options={this.state.types}
                        getOptionLabel={(options) => options.name}
                        disableClearable
                        // value={this.state.sizeType}
                        autoComplete="off"
                        renderInput={(params) =>
                          <CustomTextfieldRaw {...params} placeholder="Type" style={{ width: 100 }} className={classes.floatLeftMobile}
                            inputProps={{ ...params.inputProps, style: { fontSize: 25 }, autoComplete: 'asdasd1241' }}
                          />
                        }
                        onChange={(event, value) => this.selectType(value.code)}
                      />
                      <Autocomplete
                        name="size"
                        key={this.state.sizeType}
                        error={this.state.size_err !== ""}
                        helperText={this.state.size_err}
                        // value={this.state.size}
                        options={this.getSize(this.state.sizeType)}
                        disableClearable
                        autoComplete="off"
                        getOptionLabel={(options) => options}
                        autoSelect={true}
                        renderInput={(params) =>
                          <CustomTextfieldRaw {...params} placeholder="Size" style={{ width: 100 }}
                            inputProps={{ ...params.inputProps, style: { fontSize: 25 }, autoComplete: 'asdasd1241' }}
                          />
                        }
                        onChange={(event, value) => this.selectSize(value)}
                      />
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                </Grid>
              </Grid>
            ) : (
              ""
            )}


            {/* COSTUM */}
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ marginTop: 20 }}
          >
            {this.state.id4 ? (
              <Grid
                item
                xs={12}
                style={{ fontSize: 25 }}
              >
                <Grid
                  container
                >
                  <Typography variant="span" style={{ fontSize: 25 }} className={classes.marginRightAll}>
                    I live in
                  </Typography>
                  <Autocomplete
                    className={classes.marginRightAll}
                    disableClearable
                    name="country"
                    options={Country.getAllCountries()}
                    getOptionLabel={(options) => options.name}
                    // value={this.state.country}
                    renderInput={(params) => (
                      <CustomTextfieldRaw {...params} placeholder="Country" style={{ width: 200 }} autoComplete="new-password"
                        inputProps={{ ...params.inputProps, style: { fontSize: 25 }, autoComplete: 'asdasd1241' }} />
                    )}
                    onChange={(event, value) => this.selectCountry(value.isoCode, value.name)}
                  />
                  <Autocomplete
                    disableClearable
                    autoComplete="off"
                    name="city"
                    key={this.state.country}
                    // value={this.state.city}
                    options={City.getCitiesOfCountry(this.state.country)}
                    autoSelect={true}
                    getOptionLabel={(options) => options.name}
                    renderInput={(params) => (
                      <CustomTextfieldRaw {...params} placeholder="City" style={{ width: 200 }}
                        inputProps={{ ...params.inputProps, style: { fontSize: 25 }, autoComplete: 'asdasd1241' }} />
                    )}
                    onChange={(event, value) => this.selectRegion(value.name)}
                  />
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ marginTop: 20 }}
          >
            {this.state.id5 ? (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid
                  item
                  xs={12}
                >
                  <Grid
                    container>
                    <Typography variant="span" style={{ fontSize: 25 }} className={classes.marginRightAll}>
                      and I need to use this dress at
                    </Typography>
                    <KeyboardDatePicker
                      style={{ width: 200 }}
                      InputProps={{ style: { fontSize: 25 } }}
                      name="needToUseAt"
                      error={this.state.needToUseAt_err !== ""}
                      helperText={this.state.needToUseAt_err}
                      id="id6"
                      value={this.state.needToUseAt}
                      onChange={this.handleChangeDate}
                      format="dd-MM-yyyy"
                      keyboardIcon={
                        <AiOutlineCalendar />
                      }
                      required
                    />
                  </Grid>
                </Grid>
              </MuiPickersUtilsProvider>
            ) : (
              ""
            )}
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ marginTop: 20 }}
          >
            {this.state.id6 ? (
              <Grid item xs={12}>
                <Grid
                  container >
                  <Typography variant="span" style={{ fontSize: 25 }} className={classes.marginRightAll}>
                    I have preference for my dress
                  </Typography>
                  <CustomTextfieldRaw
                    style={{
                      width: 200,
                    }}
                    InputProps={{
                      readOnly: true,
                      style: { fontSize: 25 }
                    }}
                    type="text"
                    id="namaFile"
                    value={this.state.photo.name}
                    placeholder="Choose Image"
                  />
                  {/* <AiOutlineCamera
                    type="button"
                    id="klikFile"
                    value="Klik Me"
                    onClick={this.klikFunction}
                    required
                  /> */}
                  <img src={camera}
                    type="button"
                    id="klikFile"
                    value="Klik Me"
                    fill="white"
                    onClick={this.klikFunction}
                    required>
                  </img>
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
                      height: 0,
                      width: 0,
                      fontSize: 25,
                    }}
                    required
                  />
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ marginTop: 20 }}
          >
            {this.state.id7 ? (
              <Grid item xs={12}>
                <Grid
                  container >
                  <Typography variant="span" style={{ fontSize: 25 }} className={classes.marginRightAll}>
                    My budget is
                  </Typography>
                  <Select
                    required
                    name="budget"
                    id="id8"
                    onChange={this.handleChangeBudget1}
                    value={this.state.budget}
                    style={{ fontSize: 25, width: 400 }}
                  >
                    <MenuItem value="2000" style={{ fontSize: 25 }}>
                      starting from 2,000 (USD)
                    </MenuItem>
                    <MenuItem value="10000" style={{ fontSize: 25 }}>
                      starting from 10,000 (USD)
                    </MenuItem>
                    <MenuItem value="100000" style={{ fontSize: 25 }}>
                      starting from 100,000 (USD)
                    </MenuItem>
                    <MenuItem
                      id="others"
                      style={{ fontSize: 25 }}
                      value={
                        this.state.test ? this.state.budget : this.state.others
                      }
                    >
                      {this.state.test
                        ? this.state.budget + " (USD)"
                        : "Others"}
                    </MenuItem>
                  </Select>
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ marginTop: 20 }}
          >
            {this.state.id8 ? (
              <Grid item xs={12}>
                <Grid
                  container >
                  <Typography variant="span" style={{ fontSize: 25 }} className={classes.marginRightAll}>
                    you can email me at
                  </Typography>
                  <CustomTextfieldRaw
                    onChange={this.handleChange}
                    id="id9"
                    placeholder="Email"
                    error={this.state.email_err !== ""}
                    helperText={this.state.email_err}
                    type="email"
                    name="email"
                    value={this.state.email}
                    inputProps={{ style: { fontSize: 25 }, autoComplete: 'asdasd1241' }}
                    style={{ width: 350 }}
                    required
                  />
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ marginTop: 20 }}
          >
            {this.state.id9 ? (
              <Grid item xs={12}>
                <Grid
                  container >
                  <Typography variant="span" style={{ fontSize: 25 }} className={classes.marginRightAll}>
                    or WhatsApp me at
                  </Typography>
                  <Autocomplete
                    className={classes.marginRightAll}
                    name="code"
                    options={data.countries}
                    getOptionLabel={(options) => options.code}
                    disableClearable
                    style={{
                      backgroundColor: 'transparent',
                      fontSize: 25,
                    }}
                    renderInput={(params) =>
                      <CustomTextfieldRaw {...params} placeholder="+" style={{ width: 110 }}
                        inputProps={{ ...params.inputProps, style: { fontSize: 25 }, autoComplete: 'asdasd1241' }}
                      />
                    }
                    onChange={(event, value) => this.selectPhoneCode(value.code)}
                  />
                  <CustomTextfieldRaw
                    onChange={this.handleChangeNumber}
                    id="tel"
                    name="nomor"
                    error={this.state.waPhoneNumber_err !== ""}
                    helperText={this.state.waPhoneNumber_err}
                    value={this.state.tel}
                    placeholder="Phone Number"
                    onChange={this.handleChangeNumber.bind(this)}
                    inputProps={{ style: { fontSize: 25 }, autoComplete: 'asdasd1241' }}
                    style={{
                      width: 300,
                    }}
                  />
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{ marginTop: 30 }}
          >
            {this.state.id10 ? (
              <React.Fragment>
                <ButtonText
                  onClick={this.checkSubmit}
                  style={{
                    height: 56,
                    padding: '0 40px',
                    borderRadius: '0px',
                    border: '1px solid #FFFFFF',
                    background: 'white',
                    color: 'black',
                    fontWeight: 300,
                    letterSpacing: '0.16em',
                    width: '100%',
                    width: 300
                  }}
                >
                  SUBMIT MY REQUEST
                </ButtonText>
                <Link to="/Thanks" hidden={true}>
                  <ButtonText
                    id="submitBtn"
                    onClick={this.handleSubmit}
                    style={{
                      height: 56,
                      padding: '0 40px',
                      borderRadius: '0px',
                      border: '1px solid #FFFFFF',
                      background: 'white',
                      color: 'black',
                      fontWeight: 300,
                      letterSpacing: '0.16em',
                      width: '100%',
                      width: 300,
                    }}
                  >
                    SUBMIT MY REQUEST
                  </ButtonText>
                </Link>
              </React.Fragment>
            ) : (
              ""
            )}
          </Grid>
        </Container>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          style={{
            color: "white",
            marginTop: "17%",
          }}
          hidden=
          {this.state.utama ?
            true
            : false}
        >
          <Typography variant="span" style={{ fontSize: 25 }}>
            My Preffered Budget
          </Typography>
          <TextField
            onChange={this.handleChangeBudget2}
            id="prefB"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            type="number"
            name="prefB"
            InputProps={{ inputProps: { min: 0 }, style: { fontSize: 25 } }}
            style={{ marginLeft: 10, marginRight: 10, marginTop: -3, width: 170 }}
          />
          <Typography variant="span" style={{ fontSize: 25 }}>USD</Typography>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{ marginTop: 25 }}
          >
            <ButtonText
              onClick={this.handleSubmitBudget}
              direction={"row"}
              style={{
                height: 56,
                padding: '0 40px',
                borderRadius: '0px',
                border: '1px solid #FFFFFF',
                background: 'white',
                color: 'black',
                fontWeight: 300,
                letterSpacing: '0.16em',
                width: '100%',
                width: 200
              }}
            >
              ENTER
            </ButtonText>
            <ButtonText
              style={{
                height: 56,
                padding: '0 40px',
                borderRadius: '0px',
                background: 'black',
                color: 'white',
                fontWeight: 300,
                letterSpacing: '0.16em',
                border: '1px solid #FFFFFF',
                width: '100%',
                width: 200,
                marginLeft: 15,
              }}
              onClick={this.handleSubmitCancelBudget}
            >
              CANCEL
            </ButtonText>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(Question2);
