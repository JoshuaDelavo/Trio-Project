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
import SectionTextSmallConcierge from "../../components/SectionTextSmallConcierge/index";
import SectionTextMedium from "../../components/SectionTextMedium/index";
import SectionTextParagraphConcierge from "../../components/SectionTextParagraphConcierge/index";
import Scroll from "react-scroll";
import { IoMailOutline } from "react-icons/io5";
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import logoEmail from '../../images/email_icon.svg';
import logoWa from '../../images/wa_icon2.svg';
import logoPhone from '../../images/phone_icon.svg';
import logoIg from '../../images/ig_icon2.svg';
import closeIcn from '../../images/close_icon.svg';
import Button from '../../components/Button/index';


function goBack() {
    window.history.back();
}

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            paragraph: "Fashion Concierge is interactive way to send your inquiry to Sebastian Gunawan and team. Tell us what you have in mind. Your color prefrences, your style prefrences, or even upload your rough sketches about the art piece of your dream."
        }
    };

    render() {
        return (

            <Grid container spacing={2}>
                <Grid item sm={10} xs={9} />
                <Grid item sm={2} xs={3}
                    style={{
                        marginTop: "2.9%",
                        marginLeft: "-0.8%",
                        marginBottom: "3%"
                    }}>
                    <img src={closeIcn} onClick={() => goBack()}></img>
                </Grid>
                <Grid item sm={null} xs={12} />
                <Grid item sm={null} xs={12} />
                <Grid item sm={4} xs={1} />
                <Grid item sm={4} xs={10}>
                    <Grid item sm={12} xs={12}>
                        <SectionTextMedium value="WELCOME TO"></SectionTextMedium>
                    </Grid>
                    <Grid item sm={12} xs={12}
                        style={{
                            marginTop: "-5%",
                            marginBottom: "10%"
                        }}>
                        <SectionTextMedium value="THE FASHION CONCIERGE"></SectionTextMedium>
                        <hr
                            style={{
                                border: "1px solid white",
                                width: "45px",
                                margin: "auto",
                                marginBottom: "20px"
                            }}
                        ></hr>
                    </Grid>
                </Grid>
                <Grid item sm={4} xs={1} />
                <Grid item sm={3} xs={1} />
                <Grid item sm={6} xs={10}>
                    <SectionTextParagraphConcierge value={this.state.paragraph} />
                </Grid>
                <Grid item sm={3} xs={1} />
                <Grid item sm={4} xs={1} />
                <Grid item sm={4} xs={10}>
                    <Grid item sm={8} xs={8}
                        style={{
                            marginLeft: "16.8%",
                            marginBottom: "10%",
                            marginTop: "8%"
                        }}>
                        <Link to="/Question">
                            <Button type="fill" value="START THE EXPERIENCE" ></Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item sm={4} xs={1} />
                <Grid item sm={12} xs={12}>
                    <SectionTextSmallConcierge value="Need connect fast ? We are available here"></SectionTextSmallConcierge>
                </Grid>
                <Grid item sm={4} xs={2} />
                <Grid item sm={1} xs={2}
                    style={{
                        marginLeft: "9.5%"
                    }}>
                    <a href={'https://www.instagram.com/sebastiangunawanofficial/'}>
                        <img src={logoIg}></img>
                    </a>
                </Grid>
                <Grid item sm={1} xs={2}
                    style={{
                        marginLeft: "-4.5%"
                    }}>
                    <a href={'https://wa.me/6281220762081'}>
                        <img src={logoWa}></img>
                    </a>
                </Grid>
                <Grid item sm={1} xs={2} style={{
                    marginLeft: "-4.5%"
                }}>
                    <a href={`mailto:edwin@anthem.co.id`}>
                        <img src={logoEmail} ></img>
                    </a>
                </Grid>
                <Grid item sm={1} xs={2} style={{
                    marginLeft: "-4.5%"
                }}>
                    <a href={`tel:6281220762081`}>
                        <img src={logoPhone}></img>
                    </a>
                </Grid>
                <Grid item sm={4} xs={2} />
            </Grid >
        );
    }
}
export default Dashboard;