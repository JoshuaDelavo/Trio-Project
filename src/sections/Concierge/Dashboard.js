import React, { Component } from "react";
import {
    ButtonText,
} from "./ConciergeElements";
import {
    AiOutlineInstagram,
    AiOutlineWhatsApp,
    AiOutlinePhone,
} from "react-icons/ai";
import { FaTimes, FaBars } from "react-icons/fa";
import SectionTextSmall from "../../components/SectionTextSmall/index";
import SectionTextMedium from "../../components/SectionTextMedium/index";
import SectionParagraph from "../../components/SectionParagraph/index";
import Scroll from "react-scroll";
import { IoMailOutline } from "react-icons/io5";
import Grid from '@material-ui/core/Grid';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            paragraph: "Fashion Concierge is interactive way to send your inquiry to",
            paragraph2: "Sebastian Gunawan and team. Tell us what you have in mind. Your color",
            paragraph3: "preferences, your style preferences, or even upload your",
            paragraph4: "rough sketches about the art piece of your dream",
        }
    };

    render() {
        return (

            <Grid container spacing={3}>
                <Grid xs />
                <Grid container xs={6}>
                    <Grid item xs={12}>
                        <FaTimes></FaTimes> CLOSE
                    </Grid>
                    <Grid item xs={12}>
                        <SectionParagraph value={this.state.paragraph} />
                        <SectionParagraph value={this.state.paragraph2} />
                        <SectionParagraph value={this.state.paragraph3} />
                        <SectionParagraph value={this.state.paragraph4} />
                    </Grid>
                    <Grid container xs={12}
                        justifyContent="center"
                        alignItems="center">
                        <Grid item xs />
                        <Grid item xs={6} sm={3}>
                            <ButtonText value="Start" >START THE EXPERIENCE</ButtonText>
                        </Grid>
                        <Grid item xs />
                    </Grid>
                    <Grid item xs={12}>
                        <SectionTextSmall value="Need connect fast ? We are available here"></SectionTextSmall>
                    </Grid>
                    <Grid container >
                        <Grid item xs={6} sm={3}>
                            <AiOutlineInstagram></AiOutlineInstagram>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <AiOutlineWhatsApp
                                style={{ marginLeft: "2rem" }}
                            ></AiOutlineWhatsApp>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <IoMailOutline style={{ marginLeft: "2rem" }}></IoMailOutline>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <AiOutlinePhone style={{ marginLeft: "2rem" }}></AiOutlinePhone>
                        </Grid>
                    </Grid>

                </Grid >
                <Grid xs />
            </Grid >
        );
    }
}
export default Dashboard;