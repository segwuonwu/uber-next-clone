import React from 'react'
import tw from "tailwind-styled-components";

const Login = () => {
    return (
        <Wrapper>
            <UberLog src="https://i.ibb.co/ZMhy8ws/Post.png" />
            <Title>Log in to access your account</Title>
            <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
            <SigninButton>Sign in with Google</SigninButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col bg-gray-200 h-screen w-screen p-4
`
const UberLog = tw.img`
h-20 w-auto oblect-contain self-start
`
const Title = tw.div`
text-5xl pt-4 text-gray-500
`
const HeadImage = tw.img`
w-full oblect-contain
`
const SigninButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full
`

