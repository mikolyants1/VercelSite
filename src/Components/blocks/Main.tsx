import { MainBlock, MainBlockTitle, MainTitleBorder,
 MainTitleMain } from "../../style/style";
import { item } from "../../types/type";
import DataCard from "../ui/Cards/DataCard";

interface props {
    sort:(time:string)=>boolean,
    data:item[],
}

function Main({sort,data}:props):JSX.Element{
    return (
      <MainBlock>
        <MainBlockTitle>
          <MainTitleBorder>
            Date
          </MainTitleBorder>
          <MainTitleMain>
             Event names
          </MainTitleMain>
          <MainTitleBorder>
            Location
          </MainTitleBorder>
        </MainBlockTitle>
         {data.map((item:item,i:number):JSX.Element=>{
          const time:boolean = sort(item.date_start);
           return (
            <DataCard
             item={item}
             i={i}
             key={item.date_start}
             time={time}
              />
           )})}
      </MainBlock>
    )
};

export default Main