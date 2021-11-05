import { useEffect } from 'react';
import Head from 'next/head';
import tw from "tailwind-styled-components";
import Map from './components/map';

export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`

// const Map = tw.div`
//   bg-red-500 flex-1
// `

const ActionItems = tw.div`
  flex-1
`