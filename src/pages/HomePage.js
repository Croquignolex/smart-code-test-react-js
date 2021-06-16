import React from 'react';

import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import TopFooterComponent from "../components/TopFooterComponent";

const HomePage = () => {
    return (
         <>
             <NavbarComponent />
             <TopFooterComponent />
             <FooterComponent />
         </>
    );
}

export default React.memo(HomePage);
