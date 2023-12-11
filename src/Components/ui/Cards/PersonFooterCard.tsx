import {memo,useContext} from 'react'
import { PersonEvent, PersonFooter, PersonLink } from '../../../style/style'
import { DataContext } from '../../../App';
import { context } from '../../../types/type';

function PersonFooterCard():JSX.Element{
 const {item} = useContext<context>(DataContext);
    return (
        <PersonFooter>
          <PersonEvent>
            <PersonLink href={item.url}>
              Visit event's website
            </PersonLink>
          </PersonEvent>
          <PersonEvent>
            {item.ticket_price}
          </PersonEvent>
        </PersonFooter>
    )
};

export default memo(PersonFooterCard)