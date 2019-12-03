import React from 'react'

const Circle: React.SFC<{}> = () => (
  <svg width={18} height={18} fill="none" style={{transform: 'translateY(.5rem)'}}>
    <circle cx={8} cy={8} r={8} fill="#0087BE" />
  </svg>
)

export default Circle
