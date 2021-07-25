import React, { Component } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import "date-fns";
import ConciergeApi from "../../config/ConciergeApi";
import { ButtonText } from "./ConciergeElements";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import { Link } from 'react-router-dom'

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

            name: "",
            age: "",
            favouriteColor: "",
            size: "",
            sizeType: "",
            city: "",
            country: "",
            needToUseAt: "",
            photo: "",
            email: "",
            budget: "",
            phoneCode: "",
            waPhoneNumber: ""


        };

        this.handleChangeFile2 = this.handleChangeFile2.bind(this);
        this.handleChangeBudget1 = this.handleChangeBudget1.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitBudget = this.handleSubmitBudget.bind(this);
        this.handleSubmitCancelBudget = this.handleSubmitCancelBudget.bind(this);
        this.handleChangeBudget2 = this.handleChangeBudget2.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // componentDidMount() {
    //     axios
    //         .get(
    //             "https://raw.githubusercontent.com/David-Haim-zz/CountriesToCitiesJSON/master/countriesToCities.json",
    //         )
    //         .then(function (response) {
    //             // this.setState({ data: response.data });
    //             console.log(response.data);
    //         });
    // }
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
        const idfield = this.state.fields[res.target.name];
        this.setState({ [idfield]: true });
        this.setState({ [res.target.name]: res.target.value });
    }
    handleChangeFile2(event) {
        const idfield = this.state.fields[event.target.name];
        this.setState({ [idfield]: true });
        this.setState({ photo: event.target.files[0] });
    }
    handleChangeBudget1(event) {
        if (event.target.value == "other") {
            this.setState({ utama: !this.state.utama })
        } else {
            this.setState({ test: false });
            this.setState({ budget: event.target.value });
        }
        this.setState({ id8: true });
    }
    handleChangeNumber(event) {
        this.setState({
            waPhoneNumber: "+" + this.state.phoneCode + event.target.value,
        });
        this.setState({
            datafix: {
                name: this.state.name,
                age: this.state.age,
                favouriteColor: this.state.favouriteColor,
                size: this.state.size,
                sizeType: this.state.sizeType,
                city: this.state.city,
                country: this.state.country,
                needToUseAt: this.state.needToUseAt,
                photo: this.state.photo,
                budget: this.state.budget,
                email: this.state.email,
                waPhoneNumber: this.state.waPhoneNumber
            }
        })
        this.setState({ id10: true });
    }
    handleSubmit() {

        var formData = new FormData();
        const stateObj = this.state.datafix;
        formData.append("data", JSON.stringify(stateObj));
        formData.append("file.imageReferance", stateObj.photo);
        ConciergeApi.create(formData);

    }
    handleChangeBudget2(event) {
        this.setState({ budget: event.target.value });
        this.setState({ test: true });
    }
    handleSubmitBudget() {
        this.setState({ utama: !this.state.utama });
        this.setState({ others: this.state.budget });
    }
    handleSubmitCancelBudget() {
        this.setState({ budget: "" });
        this.setState({ test: false });
        this.setState({ utama: !this.state.utama })
    }
    klikFunction() {
        document.getElementById("id7").click();
    }

    render() {
        return (
            <div>{this.state.utama ?
                <Grid container style={{ marginTop: "10%", color: "white" }} >
                    <Grid item xs />
                    <Grid className={'utama'} xs={6} container spacing={1}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                My Name is
                                <TextField
                                    onChange={this.handleChange}
                                    id="id1"
                                    placeholder="Name"
                                    name="name"
                                    type="text"
                                    size="medium"
                                    helperText="Please Enter You'r Name"
                                    required
                                />
                            </Grid>
                            {this.state.id1 ?
                                <Grid item xs={6}>
                                    and I'm
                                    <div id="umur">
                                        <TextField
                                            onChange={this.handleChange}
                                            id="id2"
                                            name="age"
                                            placeholder="Age"
                                            type="number"
                                            required
                                        />
                                    </div>
                                    years old
                                </Grid>
                                : ""
                            }
                        </Grid>
                        <Grid container spacing={2}>
                            {this.state.id2 ?
                                <Grid item xs={6}>
                                    My favourite color is
                                    <div id="warna">
                                        <FormControl className={this.useStyles1.formControl}>
                                            <Select
                                                name="favouriteColor"
                                                id="id3"
                                                value={this.state.favouriteColor}
                                                onChange={this.handleChange}
                                                placeholder="Color"
                                                required
                                            >
                                                <MenuItem value={""} disabled>Color </MenuItem>
                                                <MenuItem value={"Blue"}>Blue</MenuItem>
                                                <MenuItem value={"Red"}>Red</MenuItem>
                                                <MenuItem value={"Green"}>Green</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Grid>
                                : ""}
                            {this.state.id3 ?
                                <Grid item xs={6}>
                                    and my dress size is
                                    <FormControl className={this.useStyles1.formControl}>
                                        <Select
                                            name="size"
                                            id="id3"
                                            onChange={this.handleChange}
                                            required
                                        >
                                            <MenuItem value="allSize" disabled>
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
                                            id="id4"
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
                                : ""}
                        </Grid>
                        {this.state.id4 ?
                            <Grid container >
                                I live in
                                <FormControl className={this.useStyles1.formControl}>
                                    <Select
                                        name="city"
                                        id="id4"
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
                                        id="id5"
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
                            : ""}
                        {this.state.id5 ?
                            <Grid container >
                                and I need to use this dress at
                                <DatePickerComponent
                                    name="needToUseAt"
                                    id="id6"
                                    onChange={this.handleChange}
                                    className="date"
                                    placeholder="Date"
                                    format="dd MMMMMMMMMM yyyy"
                                    required
                                />
                            </Grid>
                            : ""}
                        {this.state.id6 ?
                            <Grid container >
                                I have preferance for my dress
                                <input type="text" id="namaFile" readOnly />
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
                                    style={{ backgroundColor: "black", color: "white", display: "colapse" }}
                                    required
                                />

                            </Grid>
                            : ""}
                        {this.state.id7 ?
                            <Grid container >
                                My budget is
                                <FormControl className={this.useStyles1.formControl}>
                                    <Select
                                        name="budget"
                                        id="id8"
                                        onChange={this.handleChangeBudget1}
                                        required
                                    >
                                        <MenuItem value="" disabled>
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
                                        <MenuItem id="others" value={this.state.others}>
                                            {" "}
                                            {this.state.test
                                                ? this.state.budget + " (USD)"
                                                : "Others"}
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            : ""}
                        {this.state.id8 ?
                            <Grid container >
                                you can email me at
                                <TextField
                                    onChange={this.handleChange}
                                    id="id9"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    width="140px"
                                    required
                                />
                            </Grid>
                            : ""}
                        {this.state.id9 ?
                            <Grid container >
                                or WhatsApp me at
                                <FormControl style={{ width: "30%" }}>
                                    <Select
                                        name="phoneCode"
                                        id="id9"
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
                                <TextField
                                    onChange={this.handleChangeNumber}
                                    id="tel"
                                    name="nomor"
                                    placeholder="Phone Number"
                                    onChange={this.handleChangeNumber.bind(this)}
                                />
                            </Grid>
                            : ""}
                        {this.state.id10 ?
                            <Grid container >
                                <Grid item xs />
                                <Grid item xs={6} >
                                    <Link to="/Thanks">
                                        <ButtonText onClick={this.handleSubmit}>
                                            SUBMIT MY REQUEST
                                        </ButtonText>
                                    </Link>
                                </Grid>
                                <Grid item xs />
                            </Grid>
                            : ""}
                    </Grid >
                    <Grid item xs />
                </Grid> : ''}
                {
                    this.state.utama ? "" :
                        <Grid className={'Budget2'} container
                            style={{
                                color: "white",
                                marginTop: "10%"

                            }}
                        >
                            <Grid container>
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
                            </Grid>

                            <Grid container spacing={2}>
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

                }
            </div >
        );
    }
}

export default Question2;