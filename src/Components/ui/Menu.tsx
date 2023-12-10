import { MenuBlock, MenuLine } from "../../style/style";
import {memo} from 'react'

function Menu():JSX.Element{

    return (
        <MenuBlock>
          <MenuLine />
          <MenuLine />
          <MenuLine />
        </MenuBlock>
    )
}

export default memo(Menu)