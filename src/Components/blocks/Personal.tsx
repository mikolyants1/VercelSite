import { memo } from "react"
import { item } from "../../types/type"
import { CloseBlock, Description, GlobalOpacity, ItemDate, ItemMonth,
PersonCard, PersonDate,PersonDay,PersonEvent,PersonFooter,PersonHeader,
PersonLink,PersonLocation, PersonName, PersonTime } from "../../style/style"
import { weekDay } from "../helpers/date";
import getMonth from '../helpers/date'
interface props {
    del:()=>void,
    data:item,
    sort:(time:string)=>boolean
}
 

function PersonalCard({del,data,sort}:props):JSX.Element{
  const {date_end,date_start,title,location,
  description,url,ticket_price}:item = data;
  const startDay:string = date_start.split("/")[1];
  const endDay:string = date_end.split("/")[1];
  const year:number = new Date(date_start).getFullYear();
  const weekStart:string = weekDay[new Date(date_start).getDay()];
  const weekEnd:string = weekDay[new Date(date_end).getDay()];
  const month:string = new Date(date_start).toLocaleString('default',{month:'long'});
  const time:boolean = sort(date_start);
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
            <PersonDate>
              <PersonTime>
                <ItemDate color={time}>
                  {startDay}-{endDay}
                </ItemDate>
                <ItemMonth color={time}>
                   {getMonth(month)}
                </ItemMonth>
                <PersonDay>
                  {`${year},${weekStart}-${weekEnd}`}
                </PersonDay>
              </PersonTime>
              <PersonLocation>
                {location}
              </PersonLocation>
            </PersonDate>
            <Description>
                {description}
            </Description>
            <PersonFooter>
              <PersonEvent>
                <PersonLink href={url}>
                  Visit event's website
                </PersonLink>
              </PersonEvent>
              <PersonEvent>
                {ticket_price}
              </PersonEvent>
            </PersonFooter>
          </PersonCard>
        </>
    )
};

export default memo(PersonalCard)