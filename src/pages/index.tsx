import React from 'react';

import tw from "twin.macro";

const Button = tw.button`
  bg-blue-500 
  hover:bg-blue-800 
  text-white 
  p-2 
  rounded
`

const IndexPage = () => (
    <>
        <Button>A Nice Button</Button>
    </>
)

export default IndexPage
