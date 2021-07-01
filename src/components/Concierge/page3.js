import React, { useState, useEffect, Component } from 'react'
import { Button, TextField } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import pickers from '@material-ui/pickers'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Concierge from "../../config/ConciergeApi";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Test from '../Countries'
import Select from '@material-ui/core/Select';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Countries from '../Countries'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { NavCon, NavBurgerIcon, ConMenu, ConItem, ButtonText, BottomIcon } from './ConciergeElements'
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import dateFormat from 'dateformat';



class Page3 extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                name: "React",
                nama: '',
                age: '',
                color: '',
                sizes: '',
                code_size: '',
                city: '',
                country: '',
                datess: new Date(),
                photo: '',
                budget: '',
                email: '',
                phone_code: '',
                number: '',
            }
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
        this.handleChangeNumber = this.handleChangeNumber.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

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
            '& > *': {
                color: 'white',
                background: 'grey',
                margin: theme.spacing(1),
                width: 'auto',
                height: 'auto'
            },
        },
    }));

    handleChangeName(event) {
        this.setState({ nama: event.target.value })
        document.getElementById(1).className = "show"
        console.log(this.state.nama)
    };
    handleChangeAge(event) {
        this.setState({ age: event.target.value })
        document.getElementById(2).className = "show"
        console.log(this.state.age)
    };
    handleChangeColor(event) {
        this.setState({ color: event.target.value })
        document.getElementById(3).className = "show"
        console.log(this.state.color)
    };
    handleChangeSize(event) {
        this.setState({ sizes: event.target.value })
        console.log(this.state.sizes)
    };
    handleChangeCode(event) {
        this.setState({ code_size: event.target.value })
        document.getElementById(4).className = "show"
        console.log(this.state.code_size)
    };
    handleChangeCity(event) {
        this.setState({ city: event.target.value })
        console.log(this.state.city)
    };
    handleChangeCountries(event) {
        this.setState({ country: event.target.value })
        document.getElementById(5).className = "show"
        console.log(this.state.country)
    };
    handleChangeDate(date) {
        var test = dateFormat(date, "MM/dd/yyyy")

        this.setState({ datess: date })
        document.getElementById(6).className = "show"
        document.getElementById(7).className = "show"
        console.log(this.state.datess)
    };
    handleChangeFile(file, cb) {
        document.getElementById(6).className = "show"
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
        console.log(reader.result);
    };
    handleChangeBudget(event) {
        this.setState({ budget: event.target.value })
        document.getElementById(8).className = "show"
        console.log(this.state.budget)
    };
    handleChangeEmail(event) {
        this.setState({ email: event.target.value })
        document.getElementById(9).className = "show"
        console.log(this.state.email)
    };
    handleChangePhoneCode(event) {
        this.setState({ phone_code: event.target.value })
        console.log(this.state.phone_code)
    };
    handleChangeNumber(event) {
        this.setState({ number: event.target.value })
        document.getElementById(10).className = "show"
        console.log(this.state.number)
    };
    handleSubmit() {
        console.log(this.state.datess, this.state.sizes)
    };

    render() {
        return <div>
            <div id='0'>
                My Name is
                <TextField onChange={this.handleChangeName} id="filled-basic" label="Name" variant="filled" />
            </div>
            <div id='1' className="hide" >
                and I'm
                <TextField type="number" onChange={this.handleChangeAge} id="filled-basic" label="Name" variant="filled" />
                years old
            </div>
            <div id='2' className="hide">
                My favourite color is
                <FormControl className={this.useStyles1.formControl}>
                    <Select
                        value={this.state.color}
                        displayEmpty
                        className={this.useStyles.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={this.handleChangeColor}
                    >
                        <MenuItem value="" disabled>
                            Color
                        </MenuItem>
                        <MenuItem value={'Red'}>Red</MenuItem>
                        <MenuItem value={'Blue'}>Blue</MenuItem>
                        <MenuItem value={'Yellow'}>Yellow</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div id='3' className="hide">
                and my dress size is
                <FormControl className={this.useStyles1.formControl}>
                    <Select
                        displayEmpty
                        className={this.useStyles.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={this.handleChangeSize}
                    >
                        <MenuItem value="" disabled>
                            Size
                        </MenuItem>
                        <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={this.useStyles1.formControl}>
                    <Select
                        displayEmpty
                        className={this.useStyles.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={this.handleChangeCode}
                    >
                        <MenuItem value="" disabled>
                            code
                        </MenuItem>
                        <MenuItem value={'Euro'}>EU</MenuItem>
                        <MenuItem value={'US'}>US</MenuItem>
                        <MenuItem value={'JPN'}>JPN</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div id='4' className="hide">
                I live in
                <FormControl className={this.useStyles1.formControl}>
                    <Select
                        displayEmpty
                        className={this.useStyles.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={this.handleChangeCity}
                    >
                        <MenuItem value="" disabled>
                            City
                        </MenuItem>
                        <MenuItem value={'Sanghai'}>Sanghai</MenuItem>
                        <MenuItem value={'Beijing'}>Beijing</MenuItem>
                        <MenuItem value={'TaiPei'}>Tai Pei</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={this.useStyles1.formControl}>
                    <Select
                        displayEmpty
                        className={this.useStyles.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={this.handleChangeCountries}
                    >
                        <MenuItem value="" disabled>
                            Countries
                        </MenuItem>
                        <MenuItem value={'Indonesia'}>Indonesia</MenuItem>
                        <MenuItem value={'China'}>China</MenuItem>
                        <MenuItem value={'United State'}>United State</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div id='5' className="hide">
                and I need to use this dress at
                <MuiPickersUtilsProvider
                    onChange={this.handleChangeDate}
                    utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        value={this.state.datess}
                        onChange={this.handleChangeDate}
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <div id='6' className="hide">
                I have preferance for my dress
                <input type="file" accept="image/png, image/jpeg,file/pdf"></input>
            </div>
            <div id='7' className="hide">
                my budget is
                <FormControl className={this.useStyles1.formControl}>
                    <Select
                        displayEmpty
                        className={this.useStyles.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={this.handleChangeBudget}
                    >
                        <MenuItem value="" disabled>
                            Budget
                        </MenuItem>
                        <MenuItem value={'2000'}>starting from 2000(USD)</MenuItem>
                        <MenuItem value={'10000'}>starting from 10000(USD)</MenuItem>
                        <MenuItem value={'100000'} >starting from 100000(USD)</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div id='8' className="hide">
                you can email me at
                <TextField id="filled-basic" type="email" onChange={this.handleChangeEmail} label="Name" variant="filled" type="email" />
            </div>
            <div id='9' className="hide">
                or WhatsApp me at
                <FormControl className={this.useStyles1.formControl}>
                    <Select
                        displayEmpty
                        className={this.useStyles.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={this.handleChangePhoneCode}
                    >
                        <MenuItem value="" disabled>
                            Budget
                        </MenuItem>
                        <MenuItem value={'62'}>+62</MenuItem>
                        <MenuItem value={'73'}>+73</MenuItem>
                        <MenuItem value={'01'} >+01</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="filled-basic" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={this.handleChangeNumber} label="Name" variant="filled" type="text" />
            </div>
            <div id="10" className="hide" >
                <button onClick={this.handleSubmit} ></button>
            </div>


        </div>;
    }
}

export default Page3;