import React from "react";
import PropTypes from "prop-types";

// Component
function LoaderComponent({little}) {
    // Render
    return (
        <div className={`${little ? 'text-right' : 'text-center'}`}>
            <img alt='loading...' src={require('../assets/img/spinner.svg')} />
        </div>
    );
}

// Prop types to ensure destroyed props data type
LoaderComponent.propTypes = {
    little: PropTypes.bool
};

// Prop types to ensure destroyed props data type
LoaderComponent.defaultProps = {
    little: true
};

export default React.memo(LoaderComponent);
