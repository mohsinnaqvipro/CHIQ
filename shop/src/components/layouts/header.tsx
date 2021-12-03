import Logo from '@components/ui/logo';
import cn from 'classnames';
import { Image } from '@components/ui/image';
import Vector from './Vector.png';
import Slider from '../../assets/slider.png';
const slider = require('../../assets/slider.png')
import Link from '@components/ui/link';
import "@fontsource/poppins";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GroupsDropdownMenu from '@framework/groups/dropdown-menu';
import StaticMenu from './menu/static-menu';
import { useAtom } from 'jotai';
import { displayHeaderSearchAtom } from '@store/display-header-search-atom';
import { displayMobileHeaderSearchAtom } from '@store/display-mobile-header-search-atom';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { authorizationAtom } from '@store/authorization-atom';
import { useIsHomePage } from '@lib/use-is-homepage';
import useLayout from '@framework/utils/use-layout';
import React, { useState, useEffect } from 'react';
// import Carousel from 'react-elastic-carousel';
// import {consts} from 'react-elastic-carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Search = dynamic(() => import('@components/ui/search/search'));
const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const Header = (props) => {
  const { t } = useTranslation('common');
  const { layout } = useLayout();
  const [displayHeaderSearch, setDisplayHeaderSearch] = useAtom(
    displayHeaderSearchAtom
  );
  const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
  const [isAuthorize] = useAtom(authorizationAtom);
  const isHomePage = useIsHomePage();
  const sliderImage = 'slider.png'

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
  useEffect(() => {
    if (!isHomePage) {
      setDisplayHeaderSearch(false);
    }
  }, [isHomePage, setDisplayHeaderSearch]);
  const isFlattenHeader =
    !displayHeaderSearch && isHomePage && layout !== 'modern';
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <header
        className={cn('site-header-with-search h-14 md:h-16 lg:h-22', {
          'lg:!h-auto': isFlattenHeader,
        })}

      >
        <div
          className={cn(
            'flex items-center w-full h-14 md:h-16 lg:h-22 px-4 lg:px-8 py-5 z-50 fixed bg-light border-b border-border-200 shadow-sm transition-transform duration-300',
            {
              'lg:absolute lg:bg-transparent lg:shadow-none lg:border-0':
                isFlattenHeader,
            }
          )}
          style={{ backgroundColor: "white" }}
        >
          <div className="flex items-center w-full lg:w-auto">
            {/* <Logo className="mx-auto lg:mx-0" /> */}
            <Link href="/" className={cn('inline-flex')}>
              <span className="overflow-hidden relative w-32 md:w-40 h-10">
                <Image
                  src={Vector}
                  alt={'Chiq Logo'}
                  layout="fill"
                  objectFit="contain"
                  loading="eager"
                />
              </span>
            </Link>

            <div className="ms-10 me-auto hidden xl:block">
              {/* <GroupsDropdownMenu /> */}
            </div>
          </div>
          {isHomePage ? (
            <>
              {/* {(displayHeaderSearch || layout === 'modern') && (
                <div className="hidden lg:block w-full xl:w-11/12 2xl:w-10/12 mx-auto px-10 overflow-hidden">
                  <Search label={t('text-search-label')} variant="minimal" />
                </div>
              )}

              {displayMobileHeaderSearch && (
                <div className="block lg:hidden w-full absolute top-0 start-0 h-full bg-light pt-1.5 md:pt-2 px-5">
                  <Search label={t('text-search-label')} variant="minimal" />
                </div>
              )} */}
            </>
          ) : null}
          <ul className="hidden lg:flex items-left flex-shrink-0 space-s-10" style={{ display: "flex", alignItems: "flex-end" }}>
            <StaticMenu />
            <li style={{
              marginLeft: "30%",
              fontSize: "12px",
              color: "#000000",
              fontFamily: "poppins",
              fontWeight: "600",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              whiteSpace: "nowrap",
              alignSelf: "end"
            }}><div><PersonOutlineOutlinedIcon /></div><div>User</div></li>
            <li style={{
              marginLeft: "5%",
              fontSize: "12px",
              color: "#000000",
              fontFamily: "poppins",
              fontWeight: "600",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              whiteSpace: "nowrap",
              alignSelf: "end"
            }}><div><FavoriteBorderOutlinedIcon /></div><div>Favourites</div></li>
            <li style={{
              marginLeft: "5%",
              fontSize: "12px",
              color: "#000000",
              fontFamily: "poppins",
              fontWeight: "600",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              whiteSpace: "nowrap",
              alignSelf: "end"
            }}><div><ShoppingCartOutlinedIcon /></div><div>Cart</div></li>
          </ul>
        </div>
      </header>
      {/* <Carousel isRTL={false} renderArrow={myArrow} style={{marginTop: "7%"}}>
        {images.map(item => <img src={item.title}></img>)}
      </Carousel> */}
      {/* <Carousel
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
        style={{height: "100vh", width: "100%"}}
      >
              <button style={{backgroundImage: `url(${Slider.src})`,height: "100vh", width: "100%"}}><p style={{
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
          marginBottom: "10%",
          textAlign: "left",
          letterSpacing: "3px",
          color: "#ffffff",
          fontWeight: "600",
          fontFamily: "Poppins"
        }}>UHD DISPLAY TV WITH BIG SIZE</p></button>
                <button style={{backgroundImage: `url(${Slider.src})`,height: "100vh", width: "100%"}}><p style={{
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
          marginBottom: "10%",
          textAlign: "left",
          letterSpacing: "3px",
          color: "#ffffff",
          fontWeight: "600",
          fontFamily: "Poppins"
        }}>UHD DISPLAY TV WITH BIG SIZE</p></button>
        <button style={{backgroundImage: `url(${Slider.src})`,height: "100vh", width: "100%"}}><p style={{
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
          marginBottom: "10%",
          textAlign: "left",
          letterSpacing: "3px",
          color: "#ffffff",
          fontWeight: "600",
          fontFamily: "Poppins"
        }}>UHD DISPLAY TV WITH BIG SIZE</p></button>
        
      </Carousel> */}
    </div>
  );
};

export default Header;
//{isAuthorize ? <AuthorizedMenu /> : <JoinButton />}
// import React from 'react'

// function Header() {
//   return (
//     <header>
//       <div>
//         HI!
//       </div>
//     </header>
//   )
// }

// export default Header
