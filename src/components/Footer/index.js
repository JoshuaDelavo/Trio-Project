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
                <hr style={{ border: '0.2px solid #505050', width: 'auto', margin: 'auto' }}></hr>
                <br/>
                <Grid container={true} >
                    <Grid item container={true} xs={12} justify="center">
                        <img src={baseURL + (foot.logo ? foot.logo.url : '')}></img>
                    </Grid>
                </Grid>
                <br />      
                <br />      
                <SectionTextSmall value="VISIST OUR GALERY"></SectionTextSmall>
                <p className="container-p">{foot.address1}</p>
                <p className="container-p">{foot.address2}</p>
                <p className="container-p">{foot.address3}</p>
                <p className="container-link">VISIT OUR GALERY</p>
                <br/>
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
                <br/>
                <hr style={{ border: '0.2px solid #505050', width: 'auto', margin: 'auto' }}></hr>
                <br/>
                <Grid container={true}>
                    <Grid item xs={12} md={6}>
                        <p className="container-pfoot1">(c) 2021. Signature is part of Sebastian Gunawan. All Rights Reserved</p>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p className="container-pfoot2">Powered by <a href={'https://www.anthem.co.id'} className='anthem-link'>Anthem</a></p>
                    </Grid>
                </Grid> 
            </div>
        </Element>
    )
}

export default Footer