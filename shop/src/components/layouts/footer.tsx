import React from 'react'
import "@fontsource/poppins";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function footer() {
    return (
        <footer style={{ backgroundColor: "white", width: "100%", height: "350px" }}>
            <br /><br /><br />
            <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#f3f3f3", width: "100%", height: "150px" }}>
                <h2 style={{
                    alignSelf: "center",
                    fontSize: "46px",
                    color: "#000000",
                    fontWeight: "700",
                    fontFamily: "Poppins"
                }}>Our Stores</h2>
                <span style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "8%", marginRight: "8%", marginTop: "1%" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h4 style={{ fontFamily: "poppins", fontWeight: "600" }}>Lahore</h4>
                        <p style={{ fontFamily: "poppins", fontSize: "12px" }}>Lahore Chambers Hasrat Mohani Road P.C Box: 4998</p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h4 style={{ fontFamily: "poppins", fontWeight: "600"  }}>Karachi</h4>
                        <p style={{ fontFamily: "poppins", fontSize: "12px" }}>Karachi Chambers Hasrat Mohani Road P.C Box: 4998</p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h4 style={{ fontFamily: "poppins", fontWeight: "600"  }}>Islamabad</h4>
                        <p style={{ fontFamily: "poppins", fontSize: "12px" }}>Islamabad Chambers Hasrat Mohani Road P.C Box: 4998</p>
                    </div>
                </span>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "8%", marginRight: "8%", marginTop: "1%" }}>
                <div>
                    <h3 style={{ fontFamily: "poppins", fontWeight: "600"  }}>Sustainability</h3>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Overview</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Environment</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Corporate Citizenship</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Digital Responsibility</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Labor and Human Rights</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Diversity and Inclusion</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Sustainable Supply Chain</p>
                </div>
                <div>
                <h3 style={{ fontFamily: "poppins", fontWeight: "600"  }}>Information</h3>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Privacy and Security</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Terms and Conditions</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>About Us</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Contact Us</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Sitemap</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Portfolio</p>
                </div>
                <div>
                <h3 style={{ fontFamily: "poppins", fontWeight: "600"  }}>Product and Service</h3>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>TV's</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Refrigerators</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Air Solutions</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Monitors</p>
                </div>
                <div>
                <h3 style={{ fontFamily: "poppins", fontWeight: "600"  }}>Support</h3>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Contact Us</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Phone Support</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Email Support</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Contact the President (CEO)</p>
                    <p style={{ fontFamily: "poppins", fontSize: "12px", marginTop: "10%" }}>Community</p>
                </div>
            </div>
            <br />
            <hr />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "8%", marginRight: "8%", marginTop: "1%" }}>
                <div  style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <input placeholder="Subscribe to our newsletter" style={{width: "500px", border: "0 0 5px 0", fontFamily: "poppins"}}></input>
                    <button style={{backgroundColor: "black", color: "white", padding: "2%", fontFamily: "poppins"}}>Subscribe</button>
                </div>
                <div>
                    <FacebookIcon style={{fontSize: "25px"}} />
                    <TwitterIcon style={{fontSize: "25px", marginLeft: "10px"}} />
                    <PinterestIcon style={{fontSize: "25px", marginLeft: "10px"}}  />
                    <YouTubeIcon style={{fontSize: "25px", marginLeft: "10px"}}  />
                    <InstagramIcon style={{fontSize: "25px", marginLeft: "10px"}}  />
                </div>
            </div>
            <br />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: "black"}}>
                <p style={{color: "white", fontSize: "14px", fontFamily:"poppins", marginTop: "4px", marginBottom: "4px"}}>Copyright 2021 CHIQ. All rights reserved</p>
            </div>
        </footer >
    )
}

export default footer
