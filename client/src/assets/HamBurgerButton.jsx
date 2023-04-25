import React from 'react';

function HamBurgerButton({ width, height, fill }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 48 48'
            fill='none'>
            <rect
                width={width}
                height={height}
                fill={fill}
                fillOpacity='0.01'
            />
            <path
                d='M7.94977 11.9498H39.9498'
                stroke={fill}
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M7.94977 23.9498H39.9498'
                stroke={fill}
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M7.94977 35.9498H39.9498'
                stroke={fill}
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

export default HamBurgerButton;
