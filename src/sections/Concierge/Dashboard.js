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
            <div >
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
                    <Grid item xs={12}>
                        <ButtonText value="Start" >START THE EXPERIENCE</ButtonText>
                    </Grid>
                    <Grid item xs={12}>
                        <SectionTextSmall value="Need connect fast ? We are available here"></SectionTextSmall>
                    </Grid>
                    <Grid item xs={12} spacing={4}>
                        <AiOutlineInstagram></AiOutlineInstagram>
                        <AiOutlineWhatsApp
                            style={{ marginLeft: "2rem" }}
                        ></AiOutlineWhatsApp>
                        <IoMailOutline style={{ marginLeft: "2rem" }}></IoMailOutline>
                        <AiOutlinePhone style={{ marginLeft: "2rem" }}></AiOutlinePhone>
                    </Grid>

                </Grid>
            </div>
        );
    }
}
export default Dashboard;