import { memo,useContext } from "react"
import { context, item } from "../../types/type"
import { CloseBlock, Description, GlobalOpacity,
PersonCard, PersonHeader, PersonName } from "../../style/style"
import { DataContext } from "../../App";
import PersonMainCard from "../ui/Cards/PersonMainCard";
import PersonFooterCard from "../ui/Cards/PersonFooterCard";

interface props {
    del:()=>void,
}

function PersonalCard({del}:props):JSX.Element{
  const {date} = useContext<context>(DataContext);
  const {title,description}:item = date;
    return (
        <>
          <GlobalOpacity>
          </GlobalOpacity>
          <PersonCard>
            <PersonHeader>
              <CloseBlock onClick={del}>
                    +
              </CloseBlock>
            </PersonHeader>
            <PersonName>
                {title}
            </PersonName>
            <PersonMainCard />
            <Description>
                {description}
            </Description>
            <PersonFooterCard />
          </PersonCard>
        </>
    )
};

export default memo(PersonalCard)