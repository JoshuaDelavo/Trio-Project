import React, { useState, useEffect } from 'react'
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
import Select from '@material-ui/core/Select';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
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
const useStyles1 = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Page2 = () => {
    const [events, setEvents] = useState([]);
    const paragraph = "Fashion Concierge is interactive way to send your inquiry to Sebastian Gunawan and team. Tell us what you have in mind. Your color preferences, your style preferences, or even upload your rough sketches about the art piece of your dream";
    useEffect(() => {
        Concierge.findBudgets().then(res => {
            setEvents(res);
            console.log(res);
        })
    }, [])
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const classes = useStyles();
    const classes1 = useStyles1();
    const [age, setAge] = React.useState('');
    const [color, setColor] = React.useState('');
    const [event, setEvent] = useState('');
    const [looks, setLook] = useState('');
    const [materials, setMaterial] = useState('');
    const [ornament, setOrnament] = useState('');
    const [budget, setBudget] = useState('');

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

    return (
        <form className={classes.root} noValidate autoComplete="off">
            My Name is
            <TextField id="filled-basic" label="Name" variant="filled" />
            I'm
            <FormControl className={classes1.formControl}>
                <Select
                    value={age}
                    onChange={handleChangeAge}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="" disabled>
                        gender
                    </MenuItem>
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    <MenuItem value={'Shemale'}>Shemale</MenuItem>
                </Select>
            </FormControl>
            and I'm <TextField id="Age" label="Age" variant="filled" /> years old
            My favourite color is
            <FormControl className={classes1.formControl}>
                <Select
                    value={color}
                    onChange={handleChangeColor}
                    displayEmpty
                    className={classes.selectEmpty}
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
            and I need a dress for
            <FormControl className={classes1.formControl}>
                <Select
                    value={event}
                    onChange={handleChangeEvent}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="" disabled>
                        Event
                    </MenuItem>
                    <MenuItem value={'Casual'}>Casual</MenuItem>
                    <MenuItem value={'Party'}>Party</MenuItem>
                    <MenuItem value={'Dinas'}>Dinas</MenuItem>
                </Select>
            </FormControl>
            I want it looks
            <FormControl className={classes1.formControl}>
                <Select
                    value={looks}
                    onChange={handleChangeLook}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="" disabled>
                        Looks
                    </MenuItem>
                    <MenuItem value={'Gentle'}>Gentle</MenuItem>
                    <MenuItem value={'Soft'}>Soft</MenuItem>
                    <MenuItem value={'Extra Ordinary'}>Extra Ordinary</MenuItem>
                </Select>
            </FormControl>
            with
            <FormControl className={classes1.formControl}>
                <Select
                    value={materials}
                    onChange={handleChangeMaterial}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="" disabled>
                        Materials
                    </MenuItem>
                    <MenuItem value={'Woll'}>Woll</MenuItem>
                    <MenuItem value={'Cutton'}>Cutton</MenuItem>
                    <MenuItem value={'Silk'}>Silk</MenuItem>
                </Select>
            </FormControl>
            as the main material I prefer
            <FormControl className={classes1.formControl}>
                <Select
                    value={ornament}
                    onChange={handleChangeOrnament}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="" disabled>
                        Ornament
                    </MenuItem>
                    <MenuItem value={'Woll'}>Woll</MenuItem>
                    <MenuItem value={'Cutton'}>Cutton</MenuItem>
                    <MenuItem value={'Silk'}>Silk</MenuItem>
                </Select>
            </FormControl>
            use of special ornament (such as beads, buttons, etc)
            My budget is ranging from
            <FormControl className={classes1.formControl}>
                <Select
                    value={budget}
                    onChange={handleChangeBudget}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="" disabled>
                        Budget
                    </MenuItem>
                    <MenuItem value={'<100Million'}>under 100 million</MenuItem>
                    <MenuItem value={'100 Million > and < 500 Million'}>Bettween 100 million and 500 million</MenuItem>
                    <MenuItem value={'>500Million'}>Above 500 million</MenuItem>
                </Select>
            </FormControl>
            you can reach me at <TextField id="filled-basic" label="Phone Number" variant="filled" />
            on

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>


        </form>



    );

}
export default Page2;