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



class Page3 extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            nama: '',
            age: '',
            color: '',
            size_country: '',
            size: '',
            city: '',
            country: '',
            date: '',
            photo: '',
            budget: '',
            email: '',
            phone_code: '',
            number: '',
            now: 1
        };
        this.handleChangeColor = this.handleChangeColor.bind(this);
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

    handleChangeColor(event) {
        this.setState({ name: event.target.value })
        document.getElementById(this.state.now).className = "show"
        console.log(this.state.name)
    };

    render() {
        return <div>
            <div id='0'>
                My Name is
                <TextField onChange={this.handleChangeColor} id="filled-basic" label="Name" variant="filled" />
            </div>
            <div id='1' className="hide">
                and I'm
                <TextField id="filled-basic" label="Name" variant="filled" />
                years old
            </div>
            <div id='2'>
                My favourite color is
                <FormControl className={this.useStyles1.formControl}>
                    <Select
                        value={this.state.color}
                        displayEmpty
                        className={this.useStyles.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
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
            <div id='2'>
                and my dress size is
                <FormControl className={this.useStyles1.formControl}>
                    <Select
                        displayEmpty
                        className={this.useStyles.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                            code
                        </MenuItem>
                        <MenuItem value={'Euro'}>EU</MenuItem>
                        <MenuItem value={'US'}>US</MenuItem>
                        <MenuItem value={'JPN'}>JPN</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={this.useStyles1.formControl}>
                    <Select
                        displayEmpty
                        className={this.useStyles.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                            Size
                        </MenuItem>
                        <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div id='2'>
                I live in
                <FormControl className={this.useStyles1.formControl}>
                    <Select
                        displayEmpty
                        className={this.useStyles.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                            City
                        </MenuItem>
                        <MenuItem value={'Sanghai'}>Sanghai</MenuItem>
                        <MenuItem value={'Beijing'}>Beijing</MenuItem>
                        <MenuItem value={'TaiPei'}>Tai Pei</MenuItem>
                    </Select>
                </FormControl>
                <Countries>
                </Countries>
            </div>
            <div id='2'>
                and I need to use this dress at
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <div id='2'>
                I have preferance for my dress
                <input type="file" accept="image/png, image/jpeg,file/pdf"></input>
            </div>
            <div id='2'>
                my budget is
                <FormControl className={this.useStyles1.formControl}>
                    <Select
                        displayEmpty
                        className={this.useStyles.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
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
            <div id='2'>
                you can email me at
                <TextField id="filled-basic" label="Name" variant="filled" type="email" />
            </div>
            <div id='2'>
                or WhatsApp me at
                <Countries>
                </Countries>
                <TextField id="filled-basic" label="Name" variant="filled" type="text" />
            </div>


        </div>;
    }
}

export default Page3;