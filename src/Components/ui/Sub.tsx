import {memo} from "react"
import back from '../../assets/back1.png'
import { SubBlock, SubImg, SubImgBlock, 
SubMiniTitle, SubTitle } from "../../style/style"

function Sub():JSX.Element{
    return (
        <SubBlock>
          <SubTitle>
            Upcoming crypto events calendar
          <SubMiniTitle>
            Follow the world of blockchain with our cryptocalendar. 
            Here are all the main events related to crypto. Updates daily.
          </SubMiniTitle>
        </SubTitle>
        <SubImgBlock>
          <SubImg src={back} />
        </SubImgBlock>
      </SubBlock>
    )
}

export default memo(Sub)