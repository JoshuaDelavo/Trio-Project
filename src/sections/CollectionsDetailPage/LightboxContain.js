import React, { useEffect, useState } from 'react';
import './DetailPage.css';
import { Element } from 'react-scroll'
import CollectionsApi from '../../config/CollectionsApi';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { baseURL } from '../../config';
import { Grid, Fade } from "@material-ui/core";
import SectionTextSmall from '../../components/SectionTextSmall/index';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import Arrow from '../../images/arrow.png';
import { ReactComponent as ArrowBack } from '../../images/arrow-back.svg';



const LightboxContain = () => {
    const [collection, setCollection] = useState({});
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const { id } = useParams()

    useEffect(() => {
        CollectionsApi.detail(id).then(res => {
            // console.log(res);
            setCollection(res);
            setLoading(false);
            setChecked(true);
            const images = [
                res.picture12.url,
                res.picture1.url,
                res.picture2.url,
                res.picture3.url,
                res.picture4.url,
                res.picture5.url,
                res.picture6.url,
                res.picture7.url,
                res.picture8.url,
                res.picture9.url,
                res.picture10.url,
                res.picture11.url,
            ];
            setData(images);
            // console.log("data", images);
            // console.log("num", photoIndex);
        })

    }, [])

    function refreshPage() {
        window.location.reload();
    }

    if (loading) {
        return <p></p>
    }
    return (
        <Element id='our-collection' name='our-collection'>
            {
                collection ?
                    <div>
                        <div className="style-table">
                            <TableContainer className="container-list-pict">
                                <Table aria-label="simple table" >
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="left" style={{ borderBottom: "none" }}>
                                                <Grid container spacing={3}>
                                                    <Grid item md={12}>
                                                        <div className="style-title">
                                                            <Link to={'/collections'} style={{ textDecoration: 'none' }}>
                                                                <ArrowBack style={{float:'left'}}/> <p className="text-container back-text"> Back to All Campaigns</p>
                                                            </Link>
                                                            <br/>
                                                            <p className={"title-container"} style={{marginTop:15}}>{collection.bigTitle}</p>
                                                            <br/>
                                                            <br/>
                                                            <p className={"text-container"}>{collection.description}</p>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell align="center" style={{ borderBottom: "none" }}>
                                                <Grid container spacing={3}>
                                                    <Grid item md={12}>
                                                        <Fade in={checked} appear>
                                                            <img src={baseURL + collection.picture12.url} onClick={() => { setIsOpen(true); setPhotoIndex(0); }} className={"style-pict-hor"}></img>
                                                        </Fade>
                                                        {isOpen && (
                                                            <Lightbox
                                                                mainSrc={baseURL + data[photoIndex]}
                                                                nextSrc={baseURL + data[(photoIndex + 1) % data.length]}
                                                                prevSrc={baseURL + data[(photoIndex + data.length - 1) % data.length]}
                                                                onCloseRequest={() => setIsOpen(false)}
                                                                onMovePrevRequest={() =>
                                                                    setPhotoIndex(photoIndex - 1)
                                                                }
                                                                onMoveNextRequest={() =>
                                                                    setPhotoIndex(photoIndex + 1)
                                                                }
                                                            />
                                                        )}
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell align="center" style={{ borderBottom: "none" }}>
                                                <Grid container spacing={3}>
                                                    <Grid item md={12}>
                                                        <Fade in={checked} appear>
                                                            <img src={baseURL + collection.picture1.url} onClick={() => { setIsOpen(true); setPhotoIndex(1); }}></img>
                                                        </Fade>
                                                        {isOpen && (
                                                            <Lightbox
                                                                mainSrc={baseURL + data[photoIndex]}
                                                                nextSrc={baseURL + data[(photoIndex + 1) % data.length]}
                                                                prevSrc={baseURL + data[(photoIndex + data.length - 1) % data.length]}
                                                                onCloseRequest={() => setIsOpen(false)}
                                                                onMovePrevRequest={() =>
                                                                    setPhotoIndex(photoIndex - 1)
                                                                }
                                                                onMoveNextRequest={() =>
                                                                    setPhotoIndex(photoIndex + 1)
                                                                }
                                                            />
                                                        )}
                                                    </Grid>
                                                    <Grid item md={12}>
                                                        <Fade in={checked} appear>
                                                            <img src={baseURL + collection.picture2.url} onClick={() => { setIsOpen(true); setPhotoIndex(2); }} ></img>
                                                        </Fade>
                                                        {isOpen && (
                                                            <Lightbox
                                                                mainSrc={baseURL + data[photoIndex]}
                                                                nextSrc={baseURL + data[(photoIndex + 1) % data.length]}
                                                                prevSrc={baseURL + data[(photoIndex + data.length - 1) % data.length]}
                                                                onCloseRequest={() => setIsOpen(false)}
                                                                onMovePrevRequest={() =>
                                                                    setPhotoIndex(photoIndex - 1)
                                                                }
                                                                onMoveNextRequest={() =>
                                                                    setPhotoIndex(photoIndex + 1)
                                                                }
                                                            />
                                                        )}
                                                    </Grid>
                                                </Grid>
                                            </TableCell >
                                            <TableCell align="center" style={{ borderBottom: "none" }}>
                                                <Grid container spacing={3}>
                                                    <Grid item md={12}>
                                                        <Fade in={checked} appear>
                                                            <img src={baseURL + collection.picture3.url} onClick={() => { setIsOpen(true); setPhotoIndex(3); }} ></img>
                                                        </Fade>
                                                        {isOpen && (
                                                            <Lightbox
                                                                mainSrc={baseURL + data[photoIndex]}
                                                                nextSrc={baseURL + data[(photoIndex + 1) % data.length]}
                                                                prevSrc={baseURL + data[(photoIndex + data.length - 1) % data.length]}
                                                                onCloseRequest={() => setIsOpen(false)}
                                                                onMovePrevRequest={() =>
                                                                    setPhotoIndex(photoIndex - 1)
                                                                }
                                                                onMoveNextRequest={() =>
                                                                    setPhotoIndex(photoIndex + 1)
                                                                }
                                                            />
                                                        )}
                                                    </Grid>
                                                    <Grid item md={12}>
                                                        <Fade in={checked} appear>
                                                            <img src={baseURL + collection.picture4.url} onClick={() => { setIsOpen(true); setPhotoIndex(4); }} ></img>
                                                        </Fade>
                                                        {isOpen && (
                                                            <Lightbox
                                                                mainSrc={baseURL + data[photoIndex]}
                                                                nextSrc={baseURL + data[(photoIndex + 1) % data.length]}
                                                                prevSrc={baseURL + data[(photoIndex + data.length - 1) % data.length]}
                                                                onCloseRequest={() => setIsOpen(false)}
                                                                onMovePrevRequest={() =>
                                                                    setPhotoIndex(photoIndex - 1)
                                                                }
                                                                onMoveNextRequest={() =>
                                                                    setPhotoIndex(photoIndex + 1)
                                                                }
                                                            />
                                                        )}
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell align="center" style={{ borderBottom: "none" }}>
                                                <Grid container spacing={3}>
                                                    <Grid item md={12}>
                                                        <Fade in={checked} appear>
                                                            <img src={baseURL + collection.picture5.url} onClick={() => { setIsOpen(true); setPhotoIndex(5); }}></img>
                                                        </Fade>
                                                        {isOpen && (
                                                            <Lightbox
                                                                mainSrc={baseURL + data[photoIndex]}
                                                                nextSrc={baseURL + data[(photoIndex + 1) % data.length]}
                                                                prevSrc={baseURL + data[(photoIndex + data.length - 1) % data.length]}
                                                                onCloseRequest={() => setIsOpen(false)}
                                                                onMovePrevRequest={() =>
                                                                    setPhotoIndex(photoIndex - 1)
                                                                }
                                                                onMoveNextRequest={() =>
                                                                    setPhotoIndex(photoIndex + 1)
                                                                }
                                                            />
                                                        )}
                                                    </Grid>
                                                    <Grid item md={12}>
                                                        <Fade in={checked} appear>
                                                            <img src={baseURL + collection.picture6.url} onClick={() => { setIsOpen(true); setPhotoIndex(6); }}></img>
                                                        </Fade>
                                                        {isOpen && (
                                                            <Lightbox
                                                                mainSrc={baseURL + data[photoIndex]}
                                                                nextSrc={baseURL + data[(photoIndex + 1) % data.length]}
                                                                prevSrc={baseURL + data[(photoIndex + data.length - 1) % data.length]}
                                                                onCloseRequest={() => setIsOpen(false)}
                                                                onMovePrevRequest={() =>
                                                                    setPhotoIndex(photoIndex - 1)
                                                                }
                                                                onMoveNextRequest={() =>
                                                                    setPhotoIndex(photoIndex + 1)
                                                                }
                                                            />
                                                        )}
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell align="left" style={{ borderBottom: "none" }}>
                                                <Grid container spacing={3}>
                                                    <Grid item md={12}>
                                                        <Fade in={checked} appear>
                                                            <img src={baseURL + collection.picture7.url} onClick={() => { setIsOpen(true); setPhotoIndex(7); }}></img>
                                                        </Fade>
                                                        {isOpen && (
                                                            <Lightbox
                                                                mainSrc={baseURL + data[photoIndex]}
                                                                nextSrc={baseURL + data[(photoIndex + 1) % data.length]}
                                                                prevSrc={baseURL + data[(photoIndex + data.length - 1) % data.length]}
                                                                onCloseRequest={() => setIsOpen(false)}
                                                                onMovePrevRequest={() =>
                                                                    setPhotoIndex(photoIndex - 1)
                                                                }
                                                                onMoveNextRequest={() =>
                                                                    setPhotoIndex(photoIndex + 1)
                                                                }
                                                            />
                                                        )}
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell align="center" style={{ borderBottom: "none" }}>
                                                <Grid container spacing={3}>
                                                    <Grid item md={12}>
                                                        <Fade in={checked} appear>
                                                            <img src={baseURL + collection.picture8.url} onClick={() => { setIsOpen(true); setPhotoIndex(8); }} className="style-pict1"></img>
                                                        </Fade>

                                                        {isOpen && (
                                                            <Lightbox
                                                                mainSrc={baseURL + data[photoIndex]}
                                                                nextSrc={baseURL + data[(photoIndex + 1) % data.length]}
                                                                prevSrc={baseURL + data[(photoIndex + data.length - 1) % data.length]}
                                                                onCloseRequest={() => setIsOpen(false)}
                                                                onMovePrevRequest={() =>
                                                                    setPhotoIndex(photoIndex - 1)
                                                                }
                                                                onMoveNextRequest={() =>
                                                                    setPhotoIndex(photoIndex + 1)
                                                                }
                                                            />
                                                        )}
                                                    </Grid>
                                                    <Grid item md={12}>
                                                        <Fade in={checked} appear>
                                                            <img src={baseURL + collection.picture9.url} onClick={() => { setIsOpen(true); setPhotoIndex(9); }} ></img>
                                                        </Fade>
                                                        {isOpen && (
                                                            <Lightbox
                                                                mainSrc={baseURL + data[photoIndex]}
                                                                nextSrc={baseURL + data[(photoIndex + 1) % data.length]}
                                                                prevSrc={baseURL + data[(photoIndex + data.length - 1) % data.length]}
                                                                onCloseRequest={() => setIsOpen(false)}
                                                                onMovePrevRequest={() =>
                                                                    setPhotoIndex(photoIndex - 1)
                                                                }
                                                                onMoveNextRequest={() =>
                                                                    setPhotoIndex(photoIndex + 1)
                                                                }
                                                            />
                                                        )}
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell align="center" style={{ borderBottom: "none" }}>
                                                <Grid container spacing={3}>
                                                    <Grid item md={12}>
                                                        <Fade in={checked} appear>
                                                            <img src={baseURL + collection.picture10.url} onClick={() => { setIsOpen(true); setPhotoIndex(10); }} className="style-pict2"></img>
                                                        </Fade>
                                                        {isOpen && (
                                                            <Lightbox
                                                                mainSrc={baseURL + data[photoIndex]}
                                                                nextSrc={baseURL + data[(photoIndex + 1) % data.length]}
                                                                prevSrc={baseURL + data[(photoIndex + data.length - 1) % data.length]}
                                                                onCloseRequest={() => setIsOpen(false)}
                                                                onMovePrevRequest={() =>
                                                                    setPhotoIndex(photoIndex - 1)
                                                                }
                                                                onMoveNextRequest={() =>
                                                                    setPhotoIndex(photoIndex + 1)
                                                                }
                                                            />
                                                        )}
                                                    </Grid>
                                                    <Grid item md={12}>
                                                        <Fade in={checked} appear>
                                                            <img src={baseURL + collection.picture11.url} onClick={() => { setIsOpen(true); setPhotoIndex(11); }}></img>
                                                        </Fade>
                                                        {isOpen && (
                                                            <Lightbox
                                                                mainSrc={baseURL + data[photoIndex]}
                                                                nextSrc={baseURL + data[(photoIndex + 1) % data.length]}
                                                                prevSrc={baseURL + data[(photoIndex + data.length - 1) % data.length]}
                                                                onCloseRequest={() => setIsOpen(false)}
                                                                onMovePrevRequest={() =>
                                                                    setPhotoIndex((photoIndex + data.length - 1) % data.length)
                                                                }
                                                                onMoveNextRequest={() =>
                                                                    setPhotoIndex((photoIndex + 1) % data.length)
                                                                }
                                                            />
                                                        )}
                                                    </Grid>
                                                </Grid>
                                            </TableCell>

                                            <TableCell align="right" style={{ borderBottom: "none" }}>
                                                <Grid container spacing={3}>
                                                    <div className="img-size-arrow">
                                                        <Grid item md={6}>
                                                            <img src={Arrow} className="img-arrow" onClick={refreshPage}></img>
                                                        </Grid>
                                                        <Grid item md={6}>
                                                            <div className="back-style">
                                                                <SectionTextSmall value={"BACK TO START"}></SectionTextSmall>
                                                            </div>
                                                        </Grid>
                                                    </div>
                                                </Grid>
                                            </TableCell>

                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                    :
                    ''
            }

        </Element>
    )
}

export default LightboxContain