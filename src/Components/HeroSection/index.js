import React , {useState} from 'react'
import Video from '../../videos/video (2).mp4'
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'
const HeroSection = () => {
    const [hover,setHover]=useState(false);
    const OnHover = ()=>{
        setHover(!hover);
    }
  return (
    <HeroContainer id="Home">
        <HeroBg>
            <VideoBg autoPlay muted loop src={Video} type='video/mp4'></VideoBg>
        </HeroBg>
        <HeroContent>
            <HeroH1>
            Your Best Option To Discover Egypt
            </HeroH1>
            <HeroP>
                Sign in for new travel today and save 500LE.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80} onMouseEnter={OnHover} onMouseLeave={OnHover} primary="true" dark="true">Get Started {hover ?<ArrowForward />:<ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
        
    </HeroContainer>
  )
}

export default HeroSection