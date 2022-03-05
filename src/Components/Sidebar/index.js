import React from 'react'
import { Icon,SidebarContainer, CloseIcone,SideWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements'
 const Sidebar = ({ isOpen , toggle}) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcone />
        </Icon>
        <SideWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SideWrapper>
    </SidebarContainer>
  )
}
export default Sidebar
