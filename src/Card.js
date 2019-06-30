import React from 'react'
import styled from 'styled-components'
import Container from './App'




const Card = ({fullname,ownerImage,description,star,url}) => {
    return (
        <CardContainer>
            <CardHeader>
                <Link href={url}><h1>{fullname}</h1></Link>
                <HeaderOwnerPhoto>
                <img style={{maxWidth:'100%',borderRadius:'50%'}} src={ownerImage} alt="ownerImage"/>
            </HeaderOwnerPhoto>
            </CardHeader>
            
            <CardContent>
                <p>{description}</p>
            </CardContent>
            <CardFooter>
            <small> ⭐ {star}</small>
            
            </CardFooter>

        </CardContainer>
    )
}
const CardContainer = styled.div`
background-image: radial-gradient( circle farthest-corner at 0.5% 3%,  rgba(98,50,122,1) 0%, rgba(56,0,92,1) 90.1% );background-image: linear-gradient( 109.6deg,  rgba(20,30,48,1) 11.2%, rgba(36,59,85,1) 91.1% );background-image: radial-gradient( circle 635px at 22.4% 47.6%,  rgba(99,25,228,1) 25.7%, rgba(237,113,196,1) 70.9% );background-image: radial-gradient( circle 328px at 2.9% 15%,  rgba(191,224,251,1) 0%, rgba(232,233,251,1) 25.8%, rgba(252,239,250,1) 50.8%, rgba(234,251,251,1) 77.6%, rgba(240,251,244,1) 100.7% );background-image: linear-gradient( 68.8deg,  rgba(234,184,163,1) 4%, rgba(247,153,130,1) 49%, rgba(255,126,119,1) 90.4% );
width:400px;
border-radius:15px;
padding:20px 10px 10px 20px;
color:white;
margin-bottom:20px;
margin-left:20px;
display:flex;
flex-direction:column;
justify-content:flex-start;
`
const CardHeader = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:10px;
padding:0 15px;
h1{
    font-size:1rem;
}
`
const HeaderOwnerPhoto = styled.div`
width:35px;
height:35px;
background-white:white;
border-radius:50%;
`
const CardContent = styled.div`
margin-bottom:10px;
padding:0 15px;
text-align:left;
`
const CardFooter=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
justify-self:flex-end;
padding-left:10px;
margin-bottom:5px;
`
const FooterBuildby = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:0 20px;
`
const ImageContainer=styled.div`
margin-left:5px;
width:25px;
height:25px;
border-radius:50%;
background-color:white;
`
const Link = styled.a`
text-decoration:none;
color:white;
`

export default Card
