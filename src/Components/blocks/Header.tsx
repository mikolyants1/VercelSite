import {memo} from 'react'
import { HeaderBlock, HeaderButton, HeaderLink,
 HeaderLinks, HeaderLogo } from '../../style/style'
 import logo from '../../assets/icon.webp'
import Menu from '../ui/Menu'

const links:string[] = ["Partners","Integration","Company","Support","News"]


function Header():JSX.Element{
    return (
      <HeaderBlock>
        <HeaderLogo
         src={logo}
          />
        <HeaderLinks>
          {links.map((i:string):JSX.Element=>(
          <HeaderLink key={`${i}`}>
            {i}
          </HeaderLink>
          ))}
        </HeaderLinks>
        <HeaderButton>
            Sign in
        </HeaderButton>
        <Menu />
      </HeaderBlock>
    )
}

export default memo(Header)