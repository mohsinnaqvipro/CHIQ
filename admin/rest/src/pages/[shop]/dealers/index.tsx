import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { adminOwnerAndStaffOnly } from "@utils/auth-utils";
import Card from "@components/common/card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ShopLayout from "@components/layouts/shop";

function Dealers() {

    const [businessType, setbusinessType] = useState()
    const [city, setcity] = useState()
    const [dealerName, setdealerName] = useState()
    const [contactInfo, setcontactInfo] = useState()
    const [addressInfo, setaddressInfo] = useState()
    const [token, settoken] = useState()

    useEffect(() => {
        Axios.post('http://chiq.com.pk/api/token', {email: "zohaib.yunis@gmail.com", password: "1234567890"}).then((res: any) => {
            settoken(res.data.token)
            console.log("TOKEN SUCCESS: ", res, res.data.token);
        }).catch((err) => {
            console.log("TOKEN SUCCESS: ", err);
        })
    }, [])
    const onChangeBusinessType = (e: any) => {
        setbusinessType(e.target.value)
    }
    const onChangeCity = (e: any) => {
        setcity(e.target.value)
    }
    const onChangeDealerName = (e: any) => {
        setdealerName(e.target.value)
    }
    const onChangeContactInfo = (e: any) => {
        setcontactInfo(e.target.value)
    }
    const onChangeAddressInfo = (e: any) => {
        setaddressInfo(e.target.value)
    }
    const onClickSubmitDealer = () => {
        var data = JSON.stringify({
            "business_type": businessType,
            "city": city,
            "dealer_name": dealerName,
            "contact": contactInfo,
            "address": addressInfo
          });
          
          var config = {
            method: 'post',
            url: 'http://chiq.com.pk/api/networks/',
            headers: { 
              'Authorization': ("Bearer "+token), 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          Axios(config)
          .then(function (response) {
            console.log("SUCCESS", JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error, "ERROR", data);
          });
    }

    return (
        <>
            <Card className="flex flex-col items-center justify-between" style={{marginLeft: "10%", width: "50%", height: "fit-content"}}>
                <div className="md:w-1/4 mb-4 md:mb-0">
                    <h1>
                        Dealers
                    </h1>
                    <br /><br />
                    <label>Business Type:</label>
                    <br /><br />
                    <input value={businessType} onChange={onChangeBusinessType} style={{border: "none", borderBottom: "1px solid #1890ff",  outline: "none"}} placeholder="Enter Business Type"></input>
                    <br /><br />
                    <label>City:</label>
                    <br /><br />
                    <input value={city} onChange={onChangeCity} style={{border: "none", borderBottom: "1px solid #1890ff",  outline: "none"}} placeholder="Enter City"></input>
                    <br /><br />
                    <label>Dealer Name:</label>
                    <br /><br />
                    <input value={dealerName} onChange={onChangeDealerName} style={{border: "none", borderBottom: "1px solid #1890ff",  outline: "none"}} placeholder="Enter Dealer Name"></input>
                    <br /><br />
                    <label>Contact Info:</label>
                    <br /><br />
                    <input value={contactInfo} onChange={onChangeContactInfo} style={{border: "none", borderBottom: "1px solid #1890ff",  outline: "none"}} placeholder="Enter Contact Info"></input>
                    <br /><br />
                    <label>Address:</label>
                    <br /><br />
                    <input value={addressInfo} onChange={onChangeAddressInfo} style={{border: "none", borderBottom: "1px solid #1890ff",  outline: "none"}} placeholder="Enter Address"></input>
                    <br /><br />
                    <button onClick={onClickSubmitDealer} style={{background: 'lightBlue', borderRadius: "10%", width: "100%", height: "50px"}}>Submit</button>
                </div>
            </Card>
        </>
    );
}

export default Dealers;

Dealers.authenticate = {
    permissions: adminOwnerAndStaffOnly,
  };
Dealers.Layout = ShopLayout;

export const getServerSideProps = async ({ locale }: any) => ({
    props: {
      ...(await serverSideTranslations(locale, ["common", "form"])),
    },
  });

// function Dealers() {
//     return <div>Hello Dealers</div>
// }

// export default Dealers;