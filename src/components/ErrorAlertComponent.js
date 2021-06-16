import React from "react";
import PropTypes from "prop-types";

// Component
function ErrorAlertComponent({message}) {
    // Render
    return (
        <div className='text-center alert alert-danger'>
            <i className="fa fa-ban" />&nbsp; {message}
        </div>
    )
}

// Prop types to ensure destroyed props data type
ErrorAlertComponent.propTypes = {
    message: PropTypes.string.isRequired
};

// Connect component to Redux
export default React.memo(ErrorAlertComponent);
