import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
          <SidebarLink to='quemSomos'>Quem somos?</SidebarLink>
          <SidebarLink to='missoes'>Missoes</SidebarLink>
          <SidebarLink to='visao'>Visão</SidebarLink>
          <SidebarLink to='responsabilidades'>Responsabilidades</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar