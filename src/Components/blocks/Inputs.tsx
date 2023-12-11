import { Count, InputsBlock, SerInput, SortOption,
 SortSelect } from '../../style/style'
import { EvtC, item } from '../../types/type'

const vals:string[] = ["All",'Istanbul, Turkey', "Online",
'Caribbean Sea','New York City, USA','Tokyo, Japan','Reykjavik, Iceland',
'Virtual Mars Habitat','London, UK','Houston, USA','Rio de Janeiro, Brazil']

 interface props {
    filter:(e:EvtC)=>void,
    sort:(e:EvtC)=>void,
    data:item[]
 }

function InputBlock({sort,filter,data}:props):JSX.Element{
    return (
        <InputsBlock>
        <SerInput
         onChange={filter}
         placeholder="Search event names"
         />
        <SortSelect onChange={sort}>
          {vals.map((i:string):JSX.Element=>(
           <SortOption key={`${i}`} value={i}>
              {i}
           </SortOption>
          ))}
        </SortSelect>
        <Count>
          {data.length} events
        </Count>
      </InputsBlock>
    )
}

export default InputBlock