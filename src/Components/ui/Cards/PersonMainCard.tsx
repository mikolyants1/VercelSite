import {memo,useContext} from 'react'
import { DataContext } from '../../../App'
import getMonth, { weekDay } from '../../helpers/date'
import { context, item } from '../../../types/type';
import { ItemDate, ItemMonth, PersonDate, PersonDay,
 PersonLocation, PersonTime } from '../../../style/style';

function PersonMainCard():JSX.Element{
 const {date,sort} = useContext<context>(DataContext);
 const {date_end,date_start,location}:item = date;
 const startDay:string = date_start.split("/")[1];
 const endDay:string = date_end.split("/")[1];
 const year:number = new Date(date_start).getFullYear();
 const weekStart:string = weekDay[new Date(date_start).getDay()];
 const weekEnd:string = weekDay[new Date(date_end).getDay()];
 const month:string = new Date(date_start).toLocaleString('default',{month:'long'});
 const time:boolean = sort(date_start)
    return (
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
    )
}

export default memo(PersonMainCard)