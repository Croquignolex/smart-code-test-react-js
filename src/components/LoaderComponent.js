import React from "react";

import spinner from "../assets/img/spinner.svg";

// Component
function LoaderComponent() {
    // Render
    return (
        <div className='text-center'>
            <img alt='' src={spinner} width={100} />
        </div>
    );
}

export default React.memo(LoaderComponent);
