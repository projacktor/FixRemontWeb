import PropTypes from "prop-types";
import React from "react";

export const CustomerService2Fill = ({ color = "black", className }) => {
    return (
        <svg
            className={`remix-icons-fill-business-customer-service-2-fill-1 ${className}`}
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g className="g" clipPath="url(#clip0_131_2051)">
                <path
                    className="path"
                    d="M14.0001 5.33343C14.3537 5.33343 14.6928 5.47391 14.9429 5.72395C15.1929 5.974 15.3334 6.31314 15.3334 6.66676V9.33343C15.3334 9.68705 15.1929 10.0262 14.9429 10.2762C14.6928 10.5263 14.3537 10.6668 14.0001 10.6668H13.2921C13.1296 11.9556 12.5023 13.1409 11.5279 14.0001C10.5536 14.8593 9.29916 15.3334 8.00008 15.3334V14.0001C9.06095 14.0001 10.0784 13.5787 10.8285 12.8285C11.5787 12.0784 12.0001 11.061 12.0001 10.0001V6.0001C12.0001 4.93923 11.5787 3.92181 10.8285 3.17167C10.0784 2.42152 9.06095 2.0001 8.00008 2.0001C6.93922 2.0001 5.9218 2.42152 5.17165 3.17167C4.42151 3.92181 4.00008 4.93923 4.00008 6.0001V10.6668H2.00008C1.64646 10.6668 1.30732 10.5263 1.05727 10.2762C0.807224 10.0262 0.666748 9.68705 0.666748 9.33343V6.66676C0.666748 6.31314 0.807224 5.974 1.05727 5.72395C1.30732 5.47391 1.64646 5.33343 2.00008 5.33343H2.70808C2.87077 4.04469 3.49813 2.85961 4.47246 2.00055C5.44679 1.14148 6.70112 0.66748 8.00008 0.66748C9.29905 0.66748 10.5534 1.14148 11.5277 2.00055C12.502 2.85961 13.1294 4.04469 13.2921 5.33343H14.0001ZM5.17342 10.5234L5.88008 9.39276C6.51547 9.79079 7.25033 10.0013 8.00008 10.0001C8.74984 10.0013 9.4847 9.79079 10.1201 9.39276L10.8267 10.5234C9.97959 11.0542 8.99978 11.335 8.00008 11.3334C7.00039 11.335 6.02058 11.0542 5.17342 10.5234Z"
                    fill={color}
                />
            </g>
            <defs className="defs">
                <clipPath className="clip-path" id="clip0_131_2051">
                    <rect className="rect" fill="white" height="16" width="16" />
                </clipPath>
            </defs>
        </svg>
    );
};

CustomerService2Fill.propTypes = {
    color: PropTypes.string,
};
