import {memo,useContext} from 'react'
import { PersonEvent, PersonFooter, PersonLink } from '../../../style/style'
import { DataContext } from '../../../App';
import { context } from '../../../types/type';

function PersonFooterCard():JSX.Element{
 const {date} = useContext<context>(DataContext);
    return (
        <PersonFooter>
          <PersonEvent>
            <PersonLink href={date.url}>
              Visit event's website
            </PersonLink>
          </PersonEvent>
          <PersonEvent>
            {date.ticket_price}
          </PersonEvent>
        </PersonFooter>
    )
};

export default memo(PersonFooterCard)