import React from 'react'
import tw from "tailwind-styled-components";
import Link from 'next/link';

const Search = () => {
    return (
        <Wrapper>
            {/* Button Container */}
            <ButtonContainer>
                <Link href="/">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                 </Link>
            </ButtonContainer>
           
            {/* Input Container */}
            <InputContainer>
                <FromToIcon>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
                </FromToIcon>
                <InputBoxes>
                    <Input placeholder="Enetr pickup location" />
                    <Input placeholder="Where to?" />
                </InputBoxes>
                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
            </InputContainer>

            {/* Saved Places */}
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Saved Places
            </SavedPlaces>

            {/* Confirm Location */}
            <ConfirmButtonContainer>
                Confirm Locations
            </ConfirmButtonContainer>

        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
 bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
 bg-white 
`

const BackButton = tw.img`
 h-12 px-4 transform hover:scale-110 transition cursor-pointer
`

const InputContainer = tw.div`
 bg-white flex items-center px-4 mb-2
`

const FromToIcon = tw.div`
 w-10 flex flex-col mr-2 items-center
`
const Circle = tw.img`
 h-2.5
`

const Line = tw.img`
 h-10
`

const Square = tw.img`
 h-3
`

const InputBoxes = tw.div`
 flex flex-col flex-1 
`

const Input = tw.input`
 h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`
 w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
 flex bg-white items-center px-4 py-2
`

const StarIcon = tw.img`
 w-10 h-10 bg-gray-400 rounded-full p-2 mr-2
`

const ConfirmButtonContainer = tw.div`
bg-black text-white  px-4 py-3 mt-2 mx-4 text-center text-2xl cursor-pointer
`
