import React from 'react'
import  Icon1  from '../../images/undraw_a_moment_to_relax_bbpa.svg'
import  Icon2  from '../../images/undraw_booked_re_vtod.svg'
import  Icon3  from '../../images/undraw_off_road_-9-oae.svg'
import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Relax, ask and pick your option</ServicesH2>
                <ServicesP>We live in a world that is full of beauty, charm and adventure that has no end.
choose your trip now from our top destinations and enjoy the relaxation</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Book in advance</ServicesH2>
                <ServicesP>For most of us, travel planning can be an overwhelming task that's also time consuming. That's why its better to plan your holiday in Advance here are the benefits.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Ultimate option for a punctual performance</ServicesH2>
                <ServicesP>We all know that the heaviest baggage for a traveler is an empty pocket. But that is not an issue anymore</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services