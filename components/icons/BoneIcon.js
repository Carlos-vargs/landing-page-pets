import React from 'react';

function BoneIcon({ url, x, y, sizeW, sizeH, id, fill, strokeColor, strokeW }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 230 130"
            stroke={strokeColor ? strokeColor : 'transparent'}
            strokeWidth={strokeW ? strokeW : "0px"}
        >
            {
                fill
                    ? ''
                    : <defs>
                        <pattern id={id} patternUnits="userSpaceOnUse" width="100%" height="100%">
                            <image href={url} x={x} y={y} width={sizeW} height={sizeH} />
                        </pattern>
                    </defs>
            }
            <path d="M178.3 4.1c-10.2 2-19.9 8.9-25 17.8-1.5 2.5-2.8 4.8-3 5-.1.2-17.7 2.3-39 4.6l-38.8 4.1-4.3-4.7c-14-15.5-40.3-15.7-54.6-.5C3.3 41.4.1 58.3 5.9 71.6c2 4.6 2.1 5.7 1.1 11.2-2.2 12.2 2.1 25.3 11.2 33.8 13.6 12.7 33.8 13.9 48.7 2.9 5.1-3.7 11.5-12.2 12.6-16.8.5-1.8 1.5-2.7 3.3-3.1 1.5-.3 18.4-2.2 37.6-4.2l34.9-3.7 2.1 2.9c5.9 8.5 14.7 14.3 24.9 16.4 16.4 3.3 34.1-6 41.5-22 2.2-4.6 2.6-7 2.6-15 .1-7.9-.3-10.4-2.3-14.7-2.1-4.8-2.2-5.7-1.2-12 3.3-19.5-8.8-37.7-28.4-42.7-6.4-1.7-9.7-1.8-16.2-.5z"
                fill={fill ? fill : `url(#${id})`}
            />
        </svg>
    );
}

export default BoneIcon;