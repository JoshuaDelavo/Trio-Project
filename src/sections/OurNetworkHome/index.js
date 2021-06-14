import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import './OurNetwork.css';
import OurNetworkApi from '../../config/OurNetworksApi';
import { useState } from 'react';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import { baseURL } from '../../config';
import { Grid } from '@material-ui/core';

const OurNetworkHome = () => {
    const [ourNetwork, setOurNetwork] = useState([]);
    useEffect(() => {
        OurNetworkApi.find().then(res => {
            // console.log("network",res);
            setOurNetwork(res);
        });
    }, [])

    return (
        <Element id='ourNetwork' name='ourNetwork'>
            <div className="container-campaign">
                <SectionTextMedium value="OUR NETWORK"></SectionTextMedium>
                <hr style={{ border: '1px solid white', width: '45px', margin: 'auto' }}></hr>
                <br />
                <br/>
                <br/>
                <br/>
                <Grid container={true} >
                    <Grid item xs={12} sm={3}>
                    </Grid>
                {
                    
                    ourNetwork.map((ourNetwork, i) => {
                        return <React.Fragment key={ourNetwork.id}>
                                <Grid item  container justify="center" xs={12} sm={2}>
                                    <a href={ourNetwork.linkTo}>
                                        <img src={baseURL+ ourNetwork.logo.url} className="img"></img>
                                    </a>
                                </Grid>
                        </React.Fragment>          
                                            
                    })
                }
                    <Grid item xs={12} sm={3}>
                    </Grid>
                 </Grid>
            </div>
        </Element>
    )
}

export default OurNetworkHome