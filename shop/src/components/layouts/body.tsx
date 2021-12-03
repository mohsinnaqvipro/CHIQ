import React, { useState, useEffect } from 'react';
// import Carousel from 'react-elastic-carousel';
// import {consts} from 'react-elastic-carousel';
import Slider from '../../assets/slider.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from '@mui/material';
import { Card } from '@mui/material';

function Body(props: any) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const [OffersRenderFlag, setOffersRenderFlag] = useState(true)
    const [AcRenderFlag, setAcRenderFlag] = useState(false)
    const [TvRenderFlag, setTvRenderFlag] = useState(false)
    const [RefrigeratorRenderFlag, setRefrigeratorRenderFlag] = useState(false)
    const [MainCardSrc, setMainCardSrc] = useState("https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZXxlbnwwfHwwfHw%3D&w=1000&q=80")
    const [CardOneSrc, setCardOneSrc] = useState("https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZXxlbnwwfHwwfHw%3D&w=1000&q=80")
    const [CardTwoSrc, setCardTwoSrc] = useState("https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg")
    const [CardThreeSrc, setCardThreeSrc] = useState("https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/3:2/w_3999,h_2666,c_limit/MtFuji-GettyImages-959111140.jpg")
    const [CardFourSrc, setCardFourSrc] = useState("https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg")
    const [secondCategoryMainSrc, setSecondCategoryMainSrc] = useState("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701304394.jpg")

    useEffect(() => {
        let i = 0
        setInterval(() => {
            i++
            if (i == 1) {
                setMainCardSrc(CardOneSrc)
            }
            if (i == 2) {
                setMainCardSrc(CardTwoSrc)
            }
            if (i == 3) {
                setMainCardSrc(CardThreeSrc)
            }
            if (i == 4) {
                setMainCardSrc(CardFourSrc)
                i = 0
            }
        }, 5000)
    }, [])

    return (
        <>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                style={{ height: "100vh", width: "100%" }}
            >
                <div
                    style={{
                        background: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) ), url(${Slider.src})`,
                        // backgroundImage: `url(${Slider.src})`, 
                        height: "100vh",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                    <p style={{
                        fontSize: "50px",
                        marginLeft: "10%",
                        textAlign: "left",
                        letterSpacing: "3px",
                        color: "#ffffff",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>Ultimate experience</p>
                    <p style={{
                        fontSize: "50px",
                        marginLeft: "10%",
                        textAlign: "left",
                        letterSpacing: "3px",
                        color: "#ffffff",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>in your home.</p>
                    <p style={{
                        fontSize: "16px",
                        marginLeft: "10%",
                        textAlign: "left",
                        letterSpacing: "3px",
                        color: "#ffffff",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>UHD DISPLAY TV WITH BIG SIZE</p>
                    <Button variant="contained" style={{
                        width: "fit-content",
                        marginLeft: "10%",
                        borderTopLeftRadius: "50px",
                        borderBottomLeftRadius: "50px",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>
                        Shop now
                    </Button>
                </div>
                <div
                    style={{
                        background: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) ), url(${Slider.src})`,
                        // backgroundImage: `url(${Slider.src})`, 
                        height: "100vh",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                    <p style={{
                        fontSize: "50px",
                        marginLeft: "10%",
                        textAlign: "left",
                        letterSpacing: "3px",
                        color: "#ffffff",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>Ultimate experience</p>
                    <p style={{
                        fontSize: "50px",
                        marginLeft: "10%",
                        textAlign: "left",
                        letterSpacing: "3px",
                        color: "#ffffff",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>in your home.</p>
                    <p style={{
                        fontSize: "16px",
                        marginLeft: "10%",
                        textAlign: "left",
                        letterSpacing: "3px",
                        color: "#ffffff",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>UHD DISPLAY TV WITH BIG SIZE</p>
                    <Button variant="contained" style={{
                        width: "fit-content",
                        marginLeft: "10%",
                        borderTopLeftRadius: "50px",
                        borderBottomLeftRadius: "50px",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>
                        Shop now
                    </Button>
                </div>
                <div
                    style={{
                        background: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) ), url(${Slider.src})`,
                        // backgroundImage: `url(${Slider.src})`, 
                        height: "100vh",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                    <p style={{
                        fontSize: "50px",
                        marginLeft: "10%",
                        textAlign: "left",
                        letterSpacing: "3px",
                        color: "#ffffff",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>Ultimate experience</p>
                    <p style={{
                        fontSize: "50px",
                        marginLeft: "10%",
                        textAlign: "left",
                        letterSpacing: "3px",
                        color: "#ffffff",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>in your home.</p>
                    <p style={{
                        fontSize: "16px",
                        marginLeft: "10%",
                        textAlign: "left",
                        letterSpacing: "3px",
                        color: "#ffffff",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>UHD DISPLAY TV WITH BIG SIZE</p>
                    <Button variant="contained" style={{
                        width: "fit-content",
                        marginLeft: "10%",
                        borderTopLeftRadius: "50px",
                        borderBottomLeftRadius: "50px",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>
                        Shop now
                    </Button>
                </div>

            </Carousel>
            <br />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "fit-content" }}>
                <h2 style={{
                    fontSize: "16px",
                    letterSpacing: "3px",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    color: "black",
                    alignSelf: "center"
                }}>
                    Experience the Great Quality of Efficient Displays
                </h2>
                <br />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <p onClick={
                        () => {
                            setOffersRenderFlag(true)
                            setMainCardSrc("https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZXxlbnwwfHwwfHw%3D&w=1000&q=80")
                            setAcRenderFlag(false)
                            setTvRenderFlag(false)
                            setRefrigeratorRenderFlag(false)
                        }
                    } style={{
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                        color: "black",
                        cursor: "pointer",
                        borderBottom: OffersRenderFlag == true ? "1px solid black" : ''
                    }}>
                        IET TV
                    </p>
                    {/* <Button onClick={
                        () => {
                            setOffersRenderFlag(true)
                            setMainCardSrc("https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZXxlbnwwfHwwfHw%3D&w=1000&q=80")
                            setAcRenderFlag(false)
                            setTvRenderFlag(false)
                            setRefrigeratorRenderFlag(false)
                        }
                    } variant="contained" style={{
                        width: "fit-content",
                        marginLeft: "10%",
                        borderTopLeftRadius: "50px",
                        borderBottomLeftRadius: "50px",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>
                        IET TV
                    </Button> */}
                    <p onClick={
                        () => {
                            setOffersRenderFlag(false)
                            setAcRenderFlag(true)
                            setMainCardSrc("https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg")
                            setTvRenderFlag(false)
                            setRefrigeratorRenderFlag(false)
                        }
                    } style={{
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                        color: "black",
                        cursor: "pointer",
                        borderBottom: AcRenderFlag == true ? "1px solid black" : ''
                    }}>
                        UHD Smart TV
                    </p>
                    {/* <Button onClick={
                        () => {
                            setOffersRenderFlag(false)
                            setAcRenderFlag(true)
                            setMainCardSrc("https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg")
                            setTvRenderFlag(false)
                            setRefrigeratorRenderFlag(false)
                        }
                    } variant="contained" style={{
                        width: "fit-content",
                        marginLeft: "10%",
                        borderTopLeftRadius: "50px",
                        borderBottomLeftRadius: "50px",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>
                        UHD Smart TV
                    </Button> */}
                    <p onClick={
                        () => {
                            setOffersRenderFlag(false)
                            setAcRenderFlag(false)
                            setTvRenderFlag(true)
                            setMainCardSrc("https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/3:2/w_3999,h_2666,c_limit/MtFuji-GettyImages-959111140.jpg")
                            setRefrigeratorRenderFlag(false)
                        }
                    } style={{
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                        color: "black",
                        cursor: "pointer",
                        borderBottom: TvRenderFlag == true ? "1px solid black" : ''
                    }}>
                        Smart LED TV
                    </p>
                    {/* <Button onClick={
                        () => {
                            setOffersRenderFlag(false)
                            setAcRenderFlag(false)
                            setTvRenderFlag(true)
                            setMainCardSrc("https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/3:2/w_3999,h_2666,c_limit/MtFuji-GettyImages-959111140.jpg")
                            setRefrigeratorRenderFlag(false)
                        }
                    } variant="contained" style={{
                        width: "fit-content",
                        marginLeft: "10%",
                        borderTopLeftRadius: "50px",
                        borderBottomLeftRadius: "50px",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>
                        Smart LED TV
                    </Button> */}
                    <p onClick={
                        () => {
                            setOffersRenderFlag(false)
                            setAcRenderFlag(false)
                            setTvRenderFlag(false)
                            setRefrigeratorRenderFlag(true)
                            setMainCardSrc("https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg")
                        }
                    } style={{
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                        color: "black",
                        cursor: "pointer",
                        borderBottom: RefrigeratorRenderFlag == true ? "1px solid black" : ''
                    }}>
                        Full Screen TV
                    </p>
                    {/* <Button onClick={
                        () => {
                            setOffersRenderFlag(false)
                            setAcRenderFlag(false)
                            setTvRenderFlag(false)
                            setRefrigeratorRenderFlag(true)
                            setMainCardSrc("https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg")
                        }
                    } variant="contained" style={{
                        width: "fit-content",
                        marginLeft: "10%",
                        borderTopLeftRadius: "50px",
                        borderBottomLeftRadius: "50px",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins"
                    }}>
                        Full Screen TV
                    </Button> */}
                </div>
            </div>
            <br />
            {OffersRenderFlag == true ?
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", height: "fit-content" }}>
                    <Card elevation={10} style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "300px", width: "500px", backgroundColor: "#BFCFFF" }}>
                        <img style={{ width: "100%", height: "80%", padding: "5%", marginTop: "15%" }} src={MainCardSrc} />
                        <Button variant="contained" style={{
                            width: "fit-content",
                            alignSelf: "center",
                            marginBottom: "15%",
                            backgroundColor: "black",
                            borderTopLeftRadius: "50px",
                            borderBottomLeftRadius: "50px",
                            borderTopRightRadius: "50px",
                            borderBottomRightRadius: "50px",
                            fontSize: "12px",
                            textAlign: "center",
                            letterSpacing: "3px",
                            fontWeight: "600",
                            fontFamily: "Poppins",
                        }}>
                            Buy now ↗
                        </Button>
                        <br />
                    </Card>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Card onClick={() => setMainCardSrc(CardOneSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardOneSrc} />
                            </Card>
                            <Card onClick={() => setMainCardSrc(CardTwoSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", marginLeft: "5%", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardTwoSrc} />
                            </Card>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Card onClick={() => setMainCardSrc(CardThreeSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardThreeSrc} />
                            </Card>
                            <Card onClick={() => setMainCardSrc(CardFourSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", marginLeft: "5%", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardFourSrc} />
                            </Card>
                        </div>
                    </div>
                </div> : AcRenderFlag == true ? <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", height: "fit-content" }}>
                    <Card elevation={10} style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "300px", width: "500px", backgroundColor: "#BFCFFF" }}>
                        <img style={{ width: "100%", height: "80%", padding: "5%", marginTop: "15%" }} src={MainCardSrc} />
                        <Button variant="contained" style={{
                            width: "fit-content",
                            alignSelf: "center",
                            marginBottom: "15%",
                            backgroundColor: "black",
                            borderTopLeftRadius: "50px",
                            borderBottomLeftRadius: "50px",
                            borderTopRightRadius: "50px",
                            borderBottomRightRadius: "50px",
                            fontSize: "12px",
                            textAlign: "center",
                            letterSpacing: "3px",
                            fontWeight: "600",
                            fontFamily: "Poppins",
                        }}>
                            Buy now ↗
                        </Button>
                        <br />
                    </Card>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Card onClick={() => setMainCardSrc(CardOneSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardOneSrc} />
                            </Card>
                            <Card onClick={() => setMainCardSrc(CardTwoSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", marginLeft: "5%", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardTwoSrc} />
                            </Card>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Card onClick={() => setMainCardSrc(CardThreeSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardThreeSrc} />
                            </Card>
                            <Card onClick={() => setMainCardSrc(CardFourSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", marginLeft: "5%", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardFourSrc} />
                            </Card>
                        </div>
                    </div>
                </div> : TvRenderFlag == true ? <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", height: "fit-content" }}>
                    <Card elevation={10} style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "300px", width: "500px", backgroundColor: "#BFCFFF" }}>
                        <img style={{ width: "100%", height: "80%", padding: "5%", marginTop: "15%" }} src={MainCardSrc} />
                        <Button variant="contained" style={{
                            width: "fit-content",
                            alignSelf: "center",
                            marginBottom: "15%",
                            backgroundColor: "black",
                            borderTopLeftRadius: "50px",
                            borderBottomLeftRadius: "50px",
                            borderTopRightRadius: "50px",
                            borderBottomRightRadius: "50px",
                            fontSize: "12px",
                            textAlign: "center",
                            letterSpacing: "3px",
                            fontWeight: "600",
                            fontFamily: "Poppins",
                        }}>
                            Buy now ↗
                        </Button>
                        <br />
                    </Card>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Card onClick={() => setMainCardSrc(CardOneSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardOneSrc} />
                            </Card>
                            <Card onClick={() => setMainCardSrc(CardTwoSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", marginLeft: "5%", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardTwoSrc} />
                            </Card>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Card onClick={() => setMainCardSrc(CardThreeSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardThreeSrc} />
                            </Card>
                            <Card onClick={() => setMainCardSrc(CardFourSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", marginLeft: "5%", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardFourSrc} />
                            </Card>
                        </div>
                    </div>
                </div> : RefrigeratorRenderFlag == true ? <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", height: "fit-content" }}>
                    <Card elevation={10} style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "300px", width: "500px", backgroundColor: "#BFCFFF" }}>
                        <img style={{ width: "100%", height: "80%", padding: "5%", marginTop: "15%" }} src={MainCardSrc} />
                        <Button variant="contained" style={{
                            width: "fit-content",
                            alignSelf: "center",
                            marginBottom: "15%",
                            backgroundColor: "black",
                            borderTopLeftRadius: "50px",
                            borderBottomLeftRadius: "50px",
                            borderTopRightRadius: "50px",
                            borderBottomRightRadius: "50px",
                            fontSize: "12px",
                            textAlign: "center",
                            letterSpacing: "3px",
                            fontWeight: "600",
                            fontFamily: "Poppins",
                        }}>
                            Buy now ↗
                        </Button>
                        <br />
                    </Card>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Card onClick={() => setMainCardSrc(CardOneSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardOneSrc} />
                            </Card>
                            <Card onClick={() => setMainCardSrc(CardTwoSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", marginLeft: "5%", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardTwoSrc} />
                            </Card>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Card onClick={() => setMainCardSrc(CardThreeSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardThreeSrc} />
                            </Card>
                            <Card onClick={() => setMainCardSrc(CardFourSrc)} elevation={1} style={{ height: "140px", width: "200px", backgroundColor: "#BFCFFF", marginLeft: "5%", cursor: "pointer" }}>
                                <img style={{ width: "100%", height: "80%", padding: "5%" }} src={CardFourSrc} />
                            </Card>
                        </div>
                    </div>
                </div> : ''}
            <br />
            <br />
            <br />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "fit-content" }}>
                <h2 style={{
                    fontSize: "16px",
                    letterSpacing: "3px",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    color: "black",
                    alignSelf: "center"
                }}>
                    Awesome Cooling With Great Comfort
                </h2>
                <br />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <p onClick={() => { setSecondCategoryMainSrc("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701304394.jpg") }} style={{
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                        color: "black",
                        cursor: "pointer",
                        borderBottom: secondCategoryMainSrc == "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701304394.jpg" ? "1px solid black" : ''
                    }}>
                        Smart DC Inverter
                    </p>
                    <p onClick={() => { setSecondCategoryMainSrc("https://i.pinimg.com/originals/9d/bb/7b/9dbb7b1fee6b77fcfd20cb2b9023701f.jpg") }} style={{
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                        color: "black",
                        cursor: "pointer",
                        borderBottom: secondCategoryMainSrc == "https://i.pinimg.com/originals/9d/bb/7b/9dbb7b1fee6b77fcfd20cb2b9023701f.jpg" ? "1px solid black" : ''
                    }}>
                        Boutique
                    </p>
                    <p onClick={() => { setSecondCategoryMainSrc("https://cdn.wallpapersafari.com/54/64/XK5MJr.jpg") }} style={{
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                        color: "black",
                        cursor: "pointer",
                        borderBottom: secondCategoryMainSrc == "https://cdn.wallpapersafari.com/54/64/XK5MJr.jpg" ? "1px solid black" : ''
                    }}>
                        Inverter series
                    </p>
                    <p onClick={() => { setSecondCategoryMainSrc("https://www.teahub.io/photos/full/7-74931_download-nature-wallpaper-in-hd-for-mobile.jpg") }} style={{
                        fontSize: "12px",
                        textAlign: "center",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                        color: "black",
                        cursor: "pointer",
                        borderBottom: secondCategoryMainSrc == "https://www.teahub.io/photos/full/7-74931_download-nature-wallpaper-in-hd-for-mobile.jpg" ? "1px solid black" : ''
                    }}>
                        Conventional Series
                    </p>
                </div>
            </div>
            <br />
            <div
                style={{
                    // backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) ), url(${secondCategoryMainSrc})`,
                    backgroundImage: `url(${secondCategoryMainSrc})`,
                    backgroundSize: "cover",
                    backgroundColor: "rgba(200,100,0,.5)",
                    backgroundBlendMode: "multiply",
                    height: "80vh",
                    width: "90%",
                    marginLeft: "5%",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                    borderBottomLeftRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}>
                <p style={{
                    fontSize: "50px",
                    marginLeft: "10%",
                    textAlign: "left",
                    letterSpacing: "3px",
                    color: "#ffffff",
                    fontWeight: "600",
                    fontFamily: "Poppins"
                }}>New Generation Smart</p>
                <p style={{
                    fontSize: "50px",
                    marginLeft: "10%",
                    textAlign: "left",
                    letterSpacing: "3px",
                    color: "#ffffff",
                    fontWeight: "600",
                    fontFamily: "Poppins"
                }}>DC Inverter Series.</p>
                <p style={{
                    fontSize: "16px",
                    marginLeft: "10%",
                    textAlign: "left",
                    letterSpacing: "3px",
                    color: "#ffffff",
                    fontWeight: "600",
                    fontFamily: "Poppins"
                }}>Don't Take Your Eyes Of These Items</p>
                <br />
                <Button variant="contained" style={{
                    width: "fit-content",
                    marginLeft: "10%",
                    borderTopLeftRadius: "50px",
                    borderBottomLeftRadius: "50px",
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    fontSize: "12px",
                    textAlign: "center",
                    letterSpacing: "3px",
                    fontWeight: "600",
                    fontFamily: "Poppins"
                }}>
                    Shop now
                </Button>
            </div>
        </>
    )
}

export default Body
