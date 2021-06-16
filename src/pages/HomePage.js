import React from 'react';

import BodyComponent from "../components/BodyComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import TopFooterComponent from "../components/TopFooterComponent";

const HomePage = () => {
    return (
         <>
             <NavbarComponent />
             <BodyComponent />
             <TopFooterComponent />
             <FooterComponent />
         </>
    );
}

export default React.memo(HomePage);
