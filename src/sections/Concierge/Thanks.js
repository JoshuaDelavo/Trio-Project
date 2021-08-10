import React, { Component } from "react";
import { ThanksMenu, ThanksItem, ButtonThanks } from './ConciergeElements'
import SectionTextParagraphConcierge from '../../components/SectionTextParagraphConcierge/index';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import Scroll from 'react-scroll';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/index';


class Thanks extends Component {
    constructor() {
        super();
        this.state = {
            paragraph: "Your Response has been recorded. We will reach out to you soon after our initial assessment.",
            // paragraph2: "after our initial assessment."
        }
    };

    render() {
        return (
            <Grid container spacing={2}
                style={{
                    marginTop: "10%"
                }}>
                <Grid item sm xs />
                    <Grid item sm={12} xs={12}>
                        <SectionTextMedium value="THANK YOU" ></SectionTextMedium>
                        <hr style={{ border: '1px solid white', width: '80px', marginTop: '20px', marginBottom: '40px', marginLeft:'auto',  marginRight:'auto'}}></hr>
                    </Grid>
                    <Grid item sm={3} xs={1}/>
                    <Grid item sm={6} xs={10}>
                        <SectionTextParagraphConcierge value={this.state.paragraph}> </SectionTextParagraphConcierge>
                    </Grid>
                    <Grid item sm={3} xs={1}
                        style={{
                            marginBottom: "10%"
                        }}/>
                    <Grid item sm={4} xs={1}/>
                    <Grid item sm={4} xs={10}>
                        <Link to="/">
                            <Button type="fill" value="BACK TO DASHBOARD" ></Button>
                        </Link>
                    </Grid>
                    <Grid item sm={4} xs={1}/>
                    {/* <Grid item sm={4} xs={8} justifycontent="center">
                            <div >
                                <br />
                                <SectionTextThx value={this.state.paragraph}> </SectionTextThx>
                            </div>
                        <Link to="/">
                            <Button type="fill" value="BACK TO DASHBOARD" ></Button>
                        </Link>
                </Grid> */}
                <Grid item sm xs/>
            </Grid>
        );
    }
}
export default Thanks;