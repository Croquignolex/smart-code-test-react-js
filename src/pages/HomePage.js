import React from 'react';

import FooterComponent from "../components/FooterComponent";
import TopFooterComponent from "../components/TopFooterComponent";

function HomePage() {
    return (
         <>
             <TopFooterComponent />
             <FooterComponent />
         </>
    );
}

export default React.memo(HomePage);
