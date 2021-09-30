import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import './Footer.css';
import CompanyApi from '../../config/CompanyApi';
import { useState } from 'react';
import SectionTextSmall from '../../components/SectionTextSmall/index';
import { baseURL } from '../../config';
import { Grid } from '@material-ui/core';
import SectionParagraph from '../../components/SectionParagraph/index';
import logoEmail from '../../images/logoEmail.png';
import logoWa from '../../images/logoWa.png';
import logoPhone from '../../images/logoPhone.png';
import logoIg from '../../images/logoIg.png';

const Footer = () => {
    const [foot, setFoot] = useState([]);
    useEffect(() => {
        CompanyApi.find().then(res => {
            // console.log(res);
            setFoot(res);
        });
    }, [])

    return (
        <Element id='footer' name='footer'>
            <div className="container-footer">
                <div className="container-hr">
                    <hr style={{ border: '0.2px solid #505050', width: 'auto', margin: 'auto' }} ></hr>
                </div>
                <br />
                <Grid container={true} >
                    <Grid item container={true} xs={12} justifyContent="center">
                        <img src={baseURL + (foot.logo ? foot.logo.url : '')}></img>
                    </Grid>
                </Grid>
                <br />
                <br />

                <SectionTextSmall value="VISIT OUR GALLERY"></SectionTextSmall>
                <p className="container-p" style={{marginTop:10}}>{foot.address1}</p>
                <p className="container-p">{foot.address2}</p>
                <p className="container-p">{foot.address3}</p>
                <a href="https://www.google.com/maps/place/Sebastian+Gunawan/@-6.1691677,106.8177892,15z/data=!4m5!3m4!1s0x0:0x9b19f00a6a2c2844!8m2!3d-6.1691994!4d106.8177996">
                    <p className="container-link">VISIT OUR GALLERY</p>
                </a>
                <br />
                <SectionTextSmall value="CONTACT US"></SectionTextSmall>
                <div className="logo-container">
                    <a href={foot.instragramLink}>
                        <img src={logoIg} className="logo-contact"></img>
                    </a>
                    <a href={foot.whatsappLink}>
                        <img src={logoWa} className="logo-contact"></img>
                    </a>
                    <a href={`mailto:${foot.email}`}>
                        <img src={logoEmail} className="logo-contact"></img>
                    </a>
                    <a href={`tel:${foot.phoneNumber}`}>
                        <img src={logoPhone} className="logo-contact"></img>
                    </a>
                </div>
                <br />
                <div className="container-hr">
                    <hr style={{ border: '0.2px solid #505050', width: 'auto', margin: 'auto' }} ></hr>
                </div>
                <br />
                <div className="container-footer-bottom">
                    <Grid container={true}>
                        <Grid item xs={12} md={6}>
                            <p className="container-pfoot1">(c) 2021. Signature is part of Sebastian Gunawan. All Rights Reserved</p>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <p className="container-pfoot2">Powered by <a href={'https://www.anthem.co.id'} className='anthem-link'>Anthem</a></p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Element>
    )
}

export default Footer