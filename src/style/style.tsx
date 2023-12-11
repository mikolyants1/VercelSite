import { ChangeEvent } from "react";
import styled,{IStyledComponent, keyframes} from "styled-components";
import { BaseObject, Keyframes } from "styled-components/dist/types";

const show:Keyframes = keyframes`
 from {
    opacity:0
 }
 to {
    opacity:1
 }
`
export const Wrapper:IStyledComponent<'web',BaseObject> = styled.div`
    width:900px;
    min-width:300px;
    margin:auto;
    @media (max-width:900px){
        width:95%
    }
`;

export const HeaderBlock:IStyledComponent<"web",BaseObject> = styled.div({
    width:"100%",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    fontSize:17,
    marginTop:40,
    color:"rgb(45,45,45)"
});

export const HeaderLogo:IStyledComponent<"web",{src:string}> = styled.img({
    width:160,
    height:40
});

export const HeaderLinks:IStyledComponent<"web",BaseObject> = styled.div`
    display:flex;
    width:420px;
    justify-content:space-between;
    @media(max-width:900px){
        display:none
    }
`

export const HeaderLink:IStyledComponent<"web",{
    key:string,children:string
}> = styled.div({
    textAlign:"center"
})

export const HeaderButton:IStyledComponent<"web",BaseObject> = styled.button`
 width:100px;
 text-align:center;
 height:40px;
 background:transparent;
 font-size:16px;
 font-weight:bold;
 border-radius:15px;
 border: 1px solid #6A42E9;
 color:#6A42E9;
 display:block;

 &:hover{
    color:white;
    background-color:#6A42E9
 }

 @media(max-width:900px){
    display:none
 }
`
export const SubBlock:IStyledComponent<"web",BaseObject> = styled.div`
 width:100%;
 display:flex;
 margin-top:30px;
 @media(max-width:900px){
    display:block
 }
`
export const SubTitle:IStyledComponent<"web",BaseObject> = styled.div`
width:50%;
font-size:47px;
font-weight:bold;
@media(max-width:900px){
    font-size:27px;
    width:100%
}
`
export const SubMiniTitle:IStyledComponent<"web",BaseObject> = styled.div`
font-weight:normal;
font-size:18px;
margin-top:20px
`
export const SubImgBlock:IStyledComponent<"web",BaseObject> = styled(SubTitle)`
display:flex;
justify-content:flex-end;

@media(max-width:900px){
    justify-content:flex-start
}
`

export const SubImg:IStyledComponent<"web",{src:string}> = styled.img`
    width:400px;
    height:400px;
    border-radius:20px;

    @media(max-width:900px){
        width:300px;
        height:300px
    }
`

export const InputsBlock:IStyledComponent<"web",BaseObject> = styled.div`
    width:100%;
    height:40;
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media(max-width:900px){
        display:block;
    }
`

export const SerInput:IStyledComponent<"web",{
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}> = styled.input`
 width:65%;
 height:50px;
 border-radius:10px;
 border:1px solid rgb(230,230,230);

 &::placeholder{
    color:grey;
    font-size:18px
 }

 @media(max-width:900px){
    width:100%;
 }
`
export const SortSelect:IStyledComponent<"web",{
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void,
    children:JSX.Element[]
}> = styled.select`
  width:180px;
  height:50px;
  border-radius:10px;
  border:1px solid rgb(230,230,230);
  font-size:18px;

  @media(max-width:900px){
    margin-top:30px;
    width:100%;
 }
`
export const SortOption:IStyledComponent<"web",{
    key:string,value:string,children:string
}> = styled.option`
 padding:0 5px;
 border:none;
 height:20px;
`

export const Count:IStyledComponent<"web",BaseObject> = styled.div({
textAlign:'center',
fontSize:18,
fontWeight:'bold'
})

export const MainBlock:IStyledComponent<"web",BaseObject> = styled.div({
    width:"100%",
    marginTop:80,
    borderRadius:20,
    overflow:"hidden",
    minHeight:40,
    boxShadow:'0 3px 3px 0 grey',
})

export const MainBlockTitle:IStyledComponent<"web",BaseObject> = styled.div({
    width:"100%",
    height:50,
    color:"grey",
    display:"grid",
    gridTemplateColumns:"30% 40% 30%",
    alignItems:"center",
    fontSize:18,
    backgroundColor:"rgb(245,245,245)"
});

export const MainTitleBorder:IStyledComponent<"web",BaseObject> = styled.div({
    padding:"0 4px"
})

export const MainTitleMain:IStyledComponent<"web",BaseObject> = styled(MainTitleBorder)``
interface item {
    i:number,
    children:JSX.Element[]
}
export const ItemBlock:IStyledComponent<"web",item> = styled(MainBlockTitle)`
 background-color:white;
 color:black;
 border-bottom:1px solid grey;
 min-height:100px;
 opacity:0;
 animation-name:${show};
animation-duration: 1s;
animation-timing-function: ease;
animation-fill-mode: forwards;
animation-delay:${({i}:item)=>i}s;
 @media(max-width:900px){
    padding:20px 10px;
    display:block;
    min-height:140px;
    width:100%
 }
`
export const ItemTitleBorder:IStyledComponent<"web",BaseObject> = styled(MainTitleBorder)`
 font-size:20px;
 font-weight:normal;
 display:flex;
 justify-content:space-around;
 @media(max-width:900px){
    width:200px;
    text-align:start;
 }
`
export const ItemTitleMain:IStyledComponent<"web",{
    onClick:()=>void,
    children:string
}> = styled(ItemTitleBorder)`
font-weight:bold;
@media(max-width:900px){
    min-width:150px;
    text-align:start;
 }
`
interface color {
    color:boolean,
    children?:any
}
export const ItemDate:IStyledComponent<"web",color> = styled.div`
  padding:5px 9px;
  background-color:${({color}:color)=>color ? "#F34F6D" : "grey"};
  color:white;
  min-width:40px;
  height:26px;
  font-weight:bold;
  border-radius:10px;
  font-size:18px
`

export const ItemMonth:IStyledComponent<"web",color> = styled.div`
 font-size:18px;
 font-weight:bold;
 color:${({color}:color)=>color ? "#F34F6D" : "grey"};
`

export const ItemDay:IStyledComponent<"web",BaseObject> = styled.div({
 fontSize:15,
 color:"grey"
})

export const FootContent:IStyledComponent<"web",BaseObject> = styled.div({
    marginTop:20,
    fontSize:16,
    width:"100%",
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
})
export const FootBlock:IStyledComponent<"web",BaseObject> = styled(FootContent)({
    textAlign:"start"
})
export const PastButton:IStyledComponent<"web",{
    onClick:()=>void,
    children:string
}> = styled.button({
    border:"none",
    fontSize:17,
    fontWeight:500,
    color:"white",
    width:120,
    height:30,
    backgroundColor:"#6A42E9",
    borderRadius:5,
    marginLeft:5
})

export const PersonCard:IStyledComponent<"web",BaseObject> = styled.div`
    width:45%;
    min-width:200px;
    min-height:340px;
    top:40;
    right:0;
    margin:60px auto;
    left:0;
    background-color:white;
    border-radius:10px;
    opacity:0;
    position:fixed;
    animation-name:${show};
    animation-duration: 0.7s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    z-index:101;
    overflow:hidden;

    @media(max-width:900px){
        width:100%
    }
`

export const ShowOpacity:Keyframes = keyframes`
 from {
    opacity:0;
 }
 to {
    opacity:0.5;
 }
`
export const GlobalOpacity:IStyledComponent<"web",BaseObject> = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    z-index:100;
    opacity:0;
    animation-name:${ShowOpacity};
    animation-duration: 0.7s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    background-color:black;
`

export const PersonHeader:IStyledComponent<"web",BaseObject> = styled.div({
    width:"95%",
    display:"flex",
    margin:"auto",
    alignItems:"center",
    justifyContent:"flex-end",
})
export const CloseBlock:IStyledComponent<"web",{
    children:string,
    onClick:()=>void
}> = styled.div({
    fontSize:55,
    rotate:"45deg"
})

export const PersonName:IStyledComponent<"web",BaseObject> = styled.div({
    width:"100%",
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
})
export const PersonDate:IStyledComponent<"web",BaseObject> = styled.div`
    display:flex;
    align-items:center;
    margin-top:20px;
    width:90%;
    margin:auto;
    
    @media(max-width:800px){
        display:block
    }
`
export const PersonTime:IStyledComponent<"web",BaseObject> = styled.div`
    display:flex;
    width:50%;
    font-size:18px;
    align-items:center;
    justify-content:space-around;

    @media(max-width:800px){
        width:100%;
        justify-content:flex-start
    }
`

export const PersonLocation:IStyledComponent<"web",BaseObject> = styled(PersonTime)({
    color:"#6A42E9",
    fontWeight:"bold",
})

export const PersonDay:IStyledComponent<"web",BaseObject> = styled(ItemDay)({
    fontSize:18
})

export const Description:IStyledComponent<"web",BaseObject> = styled.div({
    width:"90%",
    margin:"30px auto",
    fontSize:18,
})
export const PersonFooter:IStyledComponent<"web",BaseObject> = styled.div({
    display:"flex",
    justifyContent:"space-between",
    bottom:0,
    alignItems:"center",
    width:"90%",
    margin:"auto",
})

export const PersonEvent:IStyledComponent<"web",BaseObject> = styled.div({
    width:"50%",
    fontSize:18,
    textAlign:"center"
})
export const PersonLink:IStyledComponent<"web",{
    href:string,
    children:string
}> = styled.a({
    color:"#6A42E9",
    textDecoration:"none"
})

export const MenuBlock:IStyledComponent<"web",BaseObject> = styled.div`
    width:25px;
    height:30px;
    display:none;
    justify-content:space-between;
    rotate:90deg;

    @media(max-width:900px){
        display:flex
    }
`

export const MenuLine:IStyledComponent<"web",BaseObject> = styled.div({
    height:"100%",
    width:5,
    backgroundColor:"black"
})

interface LoadProp{
    spin:number
}

export const Spin:IStyledComponent<'web',LoadProp>=styled.div`
  width:60px;
  height:60px;
  border-radius:50%;
  border-left:15px solid transparent;
  border-top:15px solid black;
  border-bottom:15px solid black;
  border-right:15px solid black;
  rotate:${({spin}:LoadProp)=>spin}deg
`
interface block{
    children:string[]|JSX.Element
}
export const Block:IStyledComponent<'web',block>=styled.div`
width:100%;
justify-content:center;
display:flex;
text-align:center;
color:black
`