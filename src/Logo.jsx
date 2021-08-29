import React from 'react'

const Logo = ({ color = '#000' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="150"
      viewBox="10 6.82 280 70"
      xmlSpace="preserve"
    >
      <desc>DevTalk Logo</desc>
      <g
        transform="matrix(0.55 0 0 0.54 138 47.1)"
        id="ff892492-3944-49a2-851a-105bf9314366"
      >
        <text
          xmlSpace="preserve"
          fontFamily="Montserrat"
          fontSize="80"
          fontStyle="normal"
          fontWeight="700"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeDashoffset: 0,
            strokeLinejoin: 'miter',
            strokeMiterlimit: 4,
            fill: color,
            fillRule: 'nonzero',
            opacity: 1,
            whiteSpace: 'pre',
          }}
        >
          <tspan x="-167.88" y="25.13">
            DevTalk
          </tspan>
        </text>
      </g>
      <g
        transform="matrix(0.55 0 0 0.6 24.17 47.95)"
        id="00c43e4d-78d6-4c68-acc0-51947df5b633"
      >
        <text
          xmlSpace="preserve"
          fontFamily="Raleway"
          fontSize="105"
          fontStyle="normal"
          fontWeight="900"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeDashoffset: 0,
            strokeLinejoin: 'miter',
            strokeMiterlimit: 4,
            fill: color,
            fillRule: 'nonzero',
            opacity: 1,
            whiteSpace: 'pre',
          }}
        >
          <tspan x="-27.35" y="32.98">
            &lt;
          </tspan>
        </text>
      </g>
      <g transform="matrix(0.55 0 0 0.6 250 48.1)">
        <text
          xmlSpace="preserve"
          fontFamily="Raleway"
          fontSize="105"
          fontStyle="normal"
          fontWeight="900"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeDashoffset: 0,
            strokeLinejoin: 'miter',
            strokeMiterlimit: 4,
            fill: color,
            fillRule: 'nonzero',
            opacity: 1,
            whiteSpace: 'pre',
          }}
        >
          <tspan x="-27.35" y="32.98">
            &gt;
          </tspan>
        </text>
      </g>
    </svg>
  )
}

export default Logo
