import React, { Component } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AutosizeInput from "react-input-autosize";
import FormControl from "@material-ui/core/FormControl";
import "date-fns";
import ConciergeApi from "../../config/ConciergeApi";
import { ButtonText } from "./ConciergeElements";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from "axios";

class Question extends Component {
    constructor() {
        super();
        this.state = {
            utama: true,
            fields: {
                name: 1,
                age: 2,
                favouriteColor: 3,
                size: 3,
                sizeType: 4,
                city: 4,
                country: 5,
                needToUseAt: 6,
                photo: 7,
                budget: 8,
                email: 9,
                phoneCode: 9,
                nomor: 10,
            },
            names: false,
            test: false,
        };

        this.handleChangeFile = this.handleChangeFile.bind(this);
        this.handleChangeBudget = this.handleChangeBudget.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitBudget = this.handleSubmitBudget.bind(this);
        this.handleSubmitCancelBudget = this.handleSubmitCancelBudget.bind(this);
        this.handleChangeBudget2 = this.handleChangeBudget2.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(res) {
        this.setState({ [res.target.name]: res.target.value });
        var cek = res.target.name;
        var iter = parseInt(this.state.fields[cek], 10);
        console.log(iter);
        document.getElementById(iter).className = "show";
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
            document.getElementById("utama").className = "hide";
        } else {
            this.setState({ test: false });
            this.setState({ budget: event.target.value });
        }
        document.getElementById(8).className = "show";
    }
    handleChangeNumber(event) {
        this.setState({
            waPhoneNumber: "+" + this.state.phoneCode + event.target.value,
        });
        document.getElementById(10).className = "show";
        var test = document.getElementById("tel");
        var length = test.value.length;
        test.style.width = length * 12 + "px";
    }
    handleSubmit() {
        var formData = new FormData();
        const stateObj = this.state;
        formData.append("data", JSON.stringify(stateObj));
        formData.append("file.imageReferance", stateObj.photo);
        ConciergeApi.create(formData);
        document.getElementById("second").hidden = true;
        document.getElementById("third").hidden = false;
        console.log(stateObj);
    }
    handleChangeBudget2(event) {
        this.setState({ budget: event.target.value });
        this.setState({ test: true });
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
        document.getElementById("utama").className = "show";
        document.getElementById("budget2").className = "hide";
    }
    handleSubmitCancelBudget() {
        this.setState({ budget: "" });
        this.setState({ test: false });
        document.getElementById("utama").className = "show";
        document.getElementById("budget2").className = "hide";
    }
    klikFunction() {
        document.getElementById("file").click();
    }

    render() {
        return (
            <div>{this.state.uatama ? "" :
                <Grid container xs={12} >
                    <Grid xs />
                    <Grid className={'utama'} xs={6} container spacing={1}>
                        <Grid container xs={12} spacing={2}>
                            <Grid item xs={6}>
                                My Name is
                                <TextField
                                    onChange={this.handleChange}
                                    id="name"
                                    placeholder="Name"
                                    name="name"
                                    type="text"
                                    size="medium"
                                    helperText="Please Enter You'r Name"
                                    required
                                />
                            </Grid>

                            <Grid item xs={6}>
                                and I'm
                                <div id="umur">
                                    <TextField
                                        onChange={this.handleChange}
                                        id="age"
                                        name="age"
                                        placeholder="Age"
                                        type="number"
                                        required
                                    />
                                </div>
                                years old
                            </Grid>
                        </Grid>
                        <Grid container xs={12} spacing={2}>
                            <Grid item xs={6}>
                                My favourite color is
                                <div id="warna">
                                    <FormControl className={this.useStyles1.formControl}>
                                        <Select
                                            name="favouriteColor"
                                            select
                                            id="color"
                                            onChange={this.handleChange}
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
                            </Grid>
                            <Grid item xs={6}>
                                and my dress size is
                                <FormControl className={this.useStyles1.formControl}>
                                    <Select
                                        name="size"
                                        id="size"
                                        onChange={this.handleChange}
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
                                        name="sizeType"
                                        id="code"
                                        onChange={this.handleChange}
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
                            </Grid>
                        </Grid>
                        <Grid container xs={12}>
                            I live in
                            <FormControl className={this.useStyles1.formControl}>
                                <Select
                                    name="city"
                                    id="kota"
                                    onChange={this.handleChange}
                                    required
                                >
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
                                    name="country"
                                    id="negara"
                                    onChange={this.handleChange}
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
                        </Grid>
                        <Grid container xs={12}>
                            and I need to use this dress at
                            <DatePickerComponent
                                name="needToUseAt"
                                onChange={this.handleChange}
                                className="date"
                                placeholder="Date"
                                format="dd MMMMMMMMMM yyyy"
                                required
                            />
                        </Grid>
                        <Grid container xs={12}>
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
                                name="photo"
                                type="file"
                                id="file"
                                accept="image/png, image/jpeg,file/pdf"
                                style={{ backgroundColor: "black", visibility: "collapse" }}
                                required
                            />

                        </Grid>
                        <Grid container xs={12}>

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
                                        {this.state.test
                                            ? this.state.budget + " (USD)"
                                            : "Others"}
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid container xs={12}>
                            you can email me at
                            <AutosizeInput
                                onChange={this.handleChange}
                                id="email"
                                placeholder="Email"
                                type="email"
                                name="email"
                                width="140px"
                                required
                            />
                            or WhatsApp me at
                            <FormControl style={{ width: "30%" }}>
                                <Select
                                    name="phoneCode"
                                    id="phoneCode"
                                    onChange={this.handleChange}
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
                            <AutosizeInput
                                onChange={this.handleChangeNumber}
                                id="tel"
                                name="nomor"
                                placeholder="Phone Number"
                                onChange={this.handleChangeNumber.bind(this)}
                            />
                        </Grid>
                        <Grid container xs={12}>
                            <Grid xs />
                            <Grid xs={6} >
                                <ButtonText onClick={this.handleSubmit}>
                                    SUBMIT MY REQUEST
                                </ButtonText>
                            </Grid>
                            <Grid xs />
                        </Grid>
                    </Grid >
                    <Grid xs />
                </Grid>}
                {this.state.uatama ?
                    <Grid className={'Budget2'} container>
                        <Grid container xs={12}>
                            My Prefer Budget
                            <AutosizeInput
                                onChange={this.handleChangeBudget2}
                                id="prefB"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                placeholder="Prefer Budget"
                                type="number"
                                name="prefB"
                            />
                            USD
                        </Grid>

                        <Grid container xs={12} spacing={2}>
                            <Grid item xs={6}>
                                <ButtonText onClick={this.handleSubmitBudget}>ENTER</ButtonText>
                            </Grid>
                            <Grid item xs={6}>
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
                            </Grid>
                        </Grid>
                    </Grid >
                    : ''}
            </div >
        );
    }
}

export default Question;