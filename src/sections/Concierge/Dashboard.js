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
import { Link } from 'react-router-dom'
import logoEmail from '../../images/email_icon.svg';
import logoWa from '../../images/wa_icon2.svg';
import logoPhone from '../../images/phone_icon.svg';
import logoIg from '../../images/ig_icon2.svg';
import closeImg from '../../images/close-icon.svg';

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

            <Grid container spacing={3}
                style={{
                    marginTop: "7%"
                }}
            >
                <Grid xs />
                <Grid container xs={6}>
                    <Grid item xs={12}>
                        <SectionTextMedium value="WELCOME TO"></SectionTextMedium>
                        <SectionTextMedium value="THE FASHION CONCIERGE"></SectionTextMedium>
                        <hr
                            style={{
                                border: "1px solid white",
                                width: "45px",
                                margin: "auto",
                                marginBottom: "20px"
                            }}
                        ></hr>
                        <SectionParagraph value={this.state.paragraph} />
                        <SectionParagraph value={this.state.paragraph2} />
                        <SectionParagraph value={this.state.paragraph3} />
                        <SectionParagraph value={this.state.paragraph4} />
                    </Grid>
                    <Grid container xs={12}
                        justifyContent="center"
                        alignItems="center">
                        <Grid item xs />
                        <Grid item xs={6} sm={3} style={{ marginBottom: "20px" }}>
                            <Link to="/Question">
                                <ButtonText value="Start" >START THE EXPERIENCE</ButtonText>
                            </Link>
                        </Grid>
                        <Grid item xs />
                    </Grid>
                    <Grid item xs={12}>
                        <SectionTextSmall value="Need connect fast ? We are available here"></SectionTextSmall>
                    </Grid>
                    <Grid container 
                        style={{
                            marginLeft: "5%"
                        }}>
                        <Grid item xs={2} sm={4}>

                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <a href={'https://www.instagram.com/sebastiangunawanofficial/'}>
                                <img src={logoIg}></img>
                            </a>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <a href={'https://wa.me/6281220762081'}>
                                <img src={logoWa}></img>
                            </a>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <a href={`mailto:edwin@anthem.co.id`}>
                                <img src={logoEmail} ></img>
                            </a>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <a href={`tel:6281220762081`}>
                                <img src={logoPhone}></img>
                            </a>
                        </Grid>
                        <Grid item xs={2} sm={4}>

                        </Grid>
                    </Grid>

                </Grid >
                <Grid xs
                    justifyContent="flex-end"
                    alignItems="center" >
                    <Grid item xs={12} style={{ color: "white" }}>
                        <img src={closeImg} alt=""></img> CLOSE
                    </Grid>
                </Grid>
            </Grid >
        );
    }
}
export default Dashboard;