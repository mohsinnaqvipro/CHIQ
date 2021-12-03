import Body from '@components/layouts/body';
import { getLayout } from '@components/layouts/layout';
import Seo from '@components/seo/seo';
import useLayout from '@framework/utils/use-layout';
import { useWindowSize } from '@lib/use-window-size';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';
import React, { useState, useEffect } from "react"
import { Card } from '@mui/material';
import Axios from 'axios';
import "@fontsource/poppins";

const CartCounterButton = dynamic(
    () => import('@components/cart/cart-counter-button'),
    { ssr: false }
);
const Classic = dynamic(() => import('@components/layouts/classic'));
const Standard = dynamic(() => import('@components/layouts/standard'));
const Modern = dynamic(() => import('@components/layouts/modern'));
const Minimal = dynamic(() => import('@components/layouts/minimal'));
const MAP_LAYOUT_TO_GROUP: Record<string, any> = {
    classic: Classic,
    modern: Modern,
    standard: Standard,
    minimal: Minimal,
    default: Classic,
};
export default function Dealers() {
    const { query } = useRouter();
    const { width } = useWindowSize();
    const { layout, page } = useLayout();

    useEffect(() => {
        if (query.text || query.category) {
            scroller.scrollTo('grid', {
                smooth: true,
                offset: -110,
            });
        }
    }, [query.text, query.category]);
    let Component = layout
        ? MAP_LAYOUT_TO_GROUP[layout]
        : MAP_LAYOUT_TO_GROUP['default'];

    const [allDealers, setallDealers] = useState([])
    useEffect(() => {
        Axios.get("http://chiq.com.pk/api/networks").then((res) => {
            setallDealers(res)
            console.log(res)
        }).catch((err) => {
            console.log("ERROR IN GETTING DEALERS: ", err)
        })
    }, [])
    return (
        <>
            {/* <Seo title={page?.name} url={page?.slug!} images={page?.banners!} />
            <Component />

            {layout !== 'minimal' && width > 1023 && <CartCounterButton />} */}
            <br />
            {allDealers && allDealers.data ? allDealers.data.data.map((val, i) =>
                <div key={val.id} style={{ width: "300px", height: "400px", alignSelf: "center", justifySelf: "center" }}>
                    <Card elevation={10} >
                        <div style={{
                            fontFamily: "Poppins",
                            textAlign: "center",
                            fontSize: "19px",
                            color: "#000000",
                            fontWeight: "700",
                        }}>
                            <h2>Dealer Name</h2>
                        </div>
                        <br />
                        <div style={{
                            textAlign: "center",
                            fontFamily: "Poppins",
                            textAlign: "center",
                            fontSize: "12px",
                            color: "#000000",
                            fontWeight: "700",
                        }}>
                            {val.dealer_name}
                        </div>
                        <br />
                        <div style={{
                            fontFamily: "Poppins",
                            textAlign: "center",
                            fontSize: "19px",
                            color: "#000000",
                            fontWeight: "700"
                        }}>
                            <h2>City</h2>
                        </div>
                        <div style={{
                            fontFamily: "Poppins",
                            textAlign: "center",
                            fontSize: "12px",
                            color: "#000000",
                            fontWeight: "700"
                        }}>
                            {val.city}
                        </div>
                        <br />
                        <div style={{
                            fontFamily: "Poppins",
                            textAlign: "center",
                            fontSize: "19px",
                            color: "#000000",
                            fontWeight: "700"
                        }}>
                            <h2>Address</h2>
                        </div>
                        <div style={{
                            fontFamily: "Poppins",
                            textAlign: "center",
                            fontSize: "12px",
                            color: "#000000",
                            fontWeight: "700"
                        }}>
                            {val.address}
                        </div>
                        <br />
                        <div style={{
                            fontFamily: "Poppins",
                            textAlign: "center",
                            fontSize: "19px",
                            color: "#000000",
                            fontWeight: "700"
                        }}>
                            <h2>Contact</h2>
                        </div>
                        <div style={{
                            fontFamily: "Poppins",
                            textAlign: "center",
                            fontSize: "12px",
                            color: "#000000",
                            fontWeight: "700"
                        }}>
                            {val.contact}
                        </div>
                    </Card>
                </div>
            ) : ''
            }
        </>
    );
}

Dealers.getLayout = getLayout;
