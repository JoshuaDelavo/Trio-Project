import React, { Component } from "react";
import { ThanksMenu, ThanksItem, ButtonThanks } from './ConciergeElements'
import SectionTextMedium from '../../components/SectionTextMedium/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import Scroll from 'react-scroll';
import Grid from '@material-ui/core/Grid';


class Thanks extends Component {
    constructor() {
        super();
        this.state = {
            paragraph: "Your Response has been recorded. We will reach out to you soon",
            paragraph2: "after our initial assessment."
        }
    };

    render() {
        return (
            <Grid container xs={6}>
                <ThanksMenu >
                    <ThanksItem>
                        <div >
                            <SectionTextMedium value="THANK YOU" ></SectionTextMedium>
                            <hr style={{ border: '1px solid white', width: '80px', margin: 'auto' }}></hr>
                            <br />
                            <SectionParagraph value={this.state.paragraph}> </SectionParagraph>
                            <SectionParagraph value={this.state.paragraph2}> </SectionParagraph>
                        </div>
                    </ThanksItem>
                    <ThanksItem>
                        <ButtonThanks value="Start">BACK TO DASHBOARD</ButtonThanks>
                    </ThanksItem>
                </ThanksMenu>
            </Grid>
        );
    }
}
export default Thanks;