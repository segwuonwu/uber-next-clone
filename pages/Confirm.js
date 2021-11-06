import React from 'react'
import tw from "tailwind-styled-components";
import Map from './components/Map'

const Confirm = () => {
    return (
        <Wrapper>
            <Map />
            <RideContainer>
                Ride selector
                Confirm Button
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`

const RideContainer = tw.div`
flex-1 
`