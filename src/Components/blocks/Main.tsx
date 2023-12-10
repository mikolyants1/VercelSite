import { memo } from "react"
import { MainBlock, MainBlockTitle, MainTitleBorder, MainTitleMain } from "../../style/style";
import { item } from "../../types/type";
import DataCard from "../ui/DataCard";

interface props {
    sort:(time:string)=>boolean,
    data:item[],
    get:(id:item)=>void
}

function Main({sort,get,data}:props):JSX.Element{
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
             i={i}
             key={item.date_start}
             item={item}
             time={time}
             getId={get}
              />
           )})}
      </MainBlock>
    )
};

export default memo(Main)