import {useContext} from 'react'
import { context, item } from '../../../types/type'
import { ItemBlock, ItemDate, ItemDay, ItemMonth, 
ItemTitleBorder, ItemTitleMain } from '../../../style/style'
import getMonth,{weekDay} from '../../helpers/date'
import { DataContext } from '../../../App'

interface props {
    i:number,
    key:string,
    time:boolean,
    item:item
}

function Card({i,time,item}:props):JSX.Element{
  const {get} = useContext<context>(DataContext);
  const {date_end,date_start,title,location}:item = item;
  const startDay:string = date_start.split("/")[1];
  const endDay:string = date_end.split("/")[1];
  const year:number = new Date(date_start).getFullYear();
  const weekStart:string = weekDay[new Date(date_start).getDay()];
  const weekEnd:string = weekDay[new Date(date_end).getDay()];
  const month:string = new Date(date_start).toLocaleString('default',{month:'long'});
    return (
        <ItemBlock i={i*0.2}>
          <ItemTitleBorder>
            <ItemDate color={time}>
              {startDay}-{endDay}
            </ItemDate>
            <ItemMonth color={time}>
                 {getMonth(month)}
              <ItemDay>
                {`${year},${weekStart}-${weekEnd}`}
              </ItemDay>
            </ItemMonth>
          </ItemTitleBorder>
          <ItemTitleMain onClick={()=>get(item)}>
             {title}
          </ItemTitleMain>
          <ItemTitleBorder>
             {location}
          </ItemTitleBorder>
        </ItemBlock>
    )
}

export default Card