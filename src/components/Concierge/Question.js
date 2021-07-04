import React, { useState, useEffect, Component } from "react";
import { Button, TextField } from "@material-ui/core";
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

class Question extends Component {
    constructor() {
        super();
        this.state = {
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
    handleChangeName(event) {
        this.setState({ name: event.target.value });
        document.getElementById(1).className = "show";

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
        // document.getElementById('birthday').value = ''
        // document.getElementById('birthday').placeholder = dateFormat(date.target.value, "dS mmmm yyyy")


    }
    handleChangeFile(event) {
        document.getElementById(7).className = "show";
        this.setState({ photo: event.target.files[0] })
    }
    handleChangeBudget(event) {
        if (event.target.value == "others") {
            document.getElementById("budget2").className = "show";
            document.getElementById("utama").className = "hide";
        } else {
            this.setState({ budget: event.target.value });
        }
        document.getElementById(8).className = "show";
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
        document.getElementById(9).className = "show";
    }
    handleChangePhoneCode(event) {
        this.setState({ phone_code: event.target.value });
        console.log(this.state.phone_code);
    }
    handleChangeNumber(event) {
        this.setState({ waPhoneNumber: '+' + this.state.phone_code + event.target.value });
        document.getElementById(10).className = "show";
        console.log(this.state.number);
    }
    handleSubmit() {
        console.log(this.state);
        var formData = new FormData();
        const stateObj = this.state;
        formData.append('data', JSON.stringify(stateObj));
        formData.append('file.imageReferance', stateObj.photo);
        ConciergeApi.create(formData);
        document.getElementById("second").hidden = true;
        document.getElementById("third").hidden = false;
    }
    handleChangeBudget2(event) {
        this.setState({ budget: event.target.value });
    }
    handleSubmitBudget() {
        document.getElementById("utama").className = "show";
        document.getElementById("budget2").className = "hide";
    }
    handleSubmitCancelBudget() {
        this.setState({ budget: "" });
        document.getElementById("utama").className = "show";
        document.getElementById("budget2").className = "hide";
    }

    render() {
        return (
            <div>
                <div id="utama">
                    <div id="segaris">
                        <div id="m1">
                            <div id="0">
                                My Name is
                                <input
                                    onChange={this.handleChangeName}
                                    id="name"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                />
                            </div>
                        </div>
                        <div id="m2">
                            <div id="1" className='hide' style={{ marginLeft: "10px" }}>
                                and I'm
                                <div id="umur">
                                    <input
                                        onChange={this.handleChangeAge}
                                        id="age"
                                        placeholder="Age"
                                        type="number"
                                        name="age"
                                    />
                                </div>
                                years old
                            </div>
                        </div>
                    </div>
                    < br />< br />
                    <div id="segaris">
                        <div id="m3">
                            <div id="2" className='hide'>
                                My favourite color is
                                <div id="warna">
                                    <FormControl className={this.useStyles1.formControl}>
                                        <select name="color" id="color" onChange={this.handleChangeColor}>
                                            <option value="" >
                                                Color
                                            </option>
                                            <option value="Blue">Blue</option>
                                            <option value="Red">Red</option>
                                            <option value="Green">Green</option>
                                        </select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div id="m4">
                            <div id="3" className='hide'>
                                and my dress size is
                                <FormControl className={this.useStyles1.formControl}>
                                    <select name="size" id="size" onChange={this.handleChangeSize}>
                                        <option value="" >
                                            Size
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </FormControl>
                                <FormControl className={this.useStyles1.formControl}>
                                    <select name="code" id="code" onChange={this.handleChangeCode}>
                                        <option value="" >
                                            Code
                                        </option>
                                        <option value="Euro">Euro</option>
                                        <option value="US">US</option>
                                        <option value="JPN">JPN</option>
                                    </select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    < br />< br />
                    <div id="segaris">
                        <div id="m5">
                            <div id="4" className='hide' >
                                I live in
                                <FormControl className={this.useStyles1.formControl}>
                                    <select name="kota" id="kota" onChange={this.handleChangeCity}>
                                        <option value="" >
                                            City
                                        </option>
                                        <option value="Taipe">Taipe</option>
                                        <option value="Jakarta">Jakarta</option>
                                        <option value="Malvoch">Malvoch</option>
                                    </select>
                                </FormControl>
                                <FormControl className={this.useStyles1.formControl}>
                                    <select name="negara" id="negara" onChange={this.handleChangeCountries}>
                                        <option value="" >
                                            Contry
                                        </option>
                                        <option value="China">China</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="German">German</option>
                                    </select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    < br />< br />
                    <div id="segaris">
                        <div id="m6">
                            <div id="5" className='hide'>
                                and I need to use this dress at
                                <div id="m62">
                                    <form name="date" id="date">
                                        <input onChange={this.handleChangeDate} type="date" id="birthday" name="birthday"></input>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    < br />< br />
                    <div id="segaris">
                        <div id="m7">
                            <div id="6" className='hide'>
                                I have preferance for my dress
                                <div id="m72">
                                    <input
                                        onChange={this.handleChangeFile}
                                        type="file"
                                        id="file"
                                        accept="image/png, image/jpeg,file/pdf"
                                        style={{ backgroundColor: "black" }}
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    < br />< br />
                    <div id="segaris">
                        <div id="m8">
                            <div id="7" className='hide'>
                                my budget is
                                <div id="m82">
                                    <FormControl className={this.useStyles1.formControl}>
                                        <select name="budget" id="budget" onChange={this.handleChangeBudget}>
                                            <option value=""> Budget </option>
                                            <option value="2000">starting from 2000(USD)</option>
                                            <option value="10000">starting from 10000(USD)</option>
                                            <option value="100000">starting from 100000(USD)</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                    < br />< br />
                    <div id="segaris">
                        <div id="m9">
                            <div id="8" className='hide'>
                                you can email me at
                                <div id="m92">
                                    <input onChange={this.handleChangeEmail} id="email" placeholder="Email" type="email" name="email" />
                                </div>
                            </div>
                        </div>
                    </div>
                    < br />< br />
                    <div id="segaris">
                        <div id="m10">
                            <div id="9" className='hide'>
                                or WhatsApp me at
                                <FormControl style={{ width: "30%" }}>
                                    <select name="phoneCode" id="phoneCode" onChange={this.handleChangePhoneCode}>
                                        <option value="" >
                                            PhoneCode
                                        </option>
                                        <option value="62">+62</option>
                                        <option value="73">+73</option>
                                        <option value="13">+13</option>
                                    </select>
                                </FormControl>
                                <div id="m102">
                                    <input
                                        onChange={this.handleChangeNumber}
                                        id="tel"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        placeholder="Number Whatsapp"
                                        type="tel"
                                        name="tel"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    < br />< br />
                    <div id="m11">
                        <div id="10" className='hide'>
                            <ButtonText onClick={this.handleSubmit} >SUBMIT MY REQUEST</ButtonText>
                        </div>
                    </div>
                </div>
                < br />< br />< br />< br />< br />< br />< br />< br />
                <div id="budget2" className='hide'>
                    My Prefer Budget
                    <input
                        onChange={this.handleChangeBudget2}
                        id="prefB"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        placeholder="Prefer Budget"
                        type="number"
                        name="prefB"
                    />
                    USD
                    < br />
                    <div id="pembatas">
                        <ButtonText onClick={this.handleSubmitBudget} >ENTER</ButtonText>
                        <ButtonText style={{ margin: "30px", backgroundColor: "black", color: "white" }}
                            onClick={this.handleSubmitCancelBudget} >CANCEL</ButtonText>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;
