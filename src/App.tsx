import { useState,useEffect,useReducer,useCallback,useMemo} from 'react'
import axios,{AxiosResponse} from 'axios'
import { EvtC, action, context, data, item, state } from './types/type'
import { Wrapper } from './style/style';
import PersonalCard from './Components/blocks/Personal';
import Footer from './Components/blocks/Footer';
import Header from './Components/blocks/Header';
import Sub from './Components/ui/Sub';
import InputBlock from './Components/blocks/Inputs';
import Main from './Components/blocks/Main';
import { Error, Loader } from './Components/ui/Loader';
import {createContext} from 'react'

export const DataContext = createContext<context>({
  date:null!,sort:_=>true,
})

function App():JSX.Element {
  const [state,dispatch] = useReducer(
  (prv:state,nxt:action)=>({...prv,...nxt}),
  {origin:null!,data:null!});
  const memoData:item[] = useMemo(():item[]=>state.data,[state.data])
  const [error,setError] = useState<boolean>(false);
  const [load,setLoad] = useState<boolean>(true);
  const [person,setPerson] = useState<boolean>(false);
  const [id,setId] = useState<item>(null!);

  useEffect(():void=>{
    async function getData():Promise<void> {
      return await axios
      .get(`https://events.vortex.foundation/events`)
      .then(({data}:AxiosResponse<data>)=>(
       dispatch({origin:data.data,data:data.data})
      ))
      .catch(()=>setError(true))
      .finally(()=>setLoad(false))
    };
    getData();
  },[])
  
  const dataFilter = useCallback((e:EvtC):void => {
    const text:string = e.target.value.trim().toLocaleLowerCase();
    const newData:item[] = state.origin.filter((i:item)=>{
      if (i.title.toLocaleLowerCase().indexOf(text)!==-1){
        return i;
      };
    });
    dispatch({data:newData});
  },[state.data])

  const getTitle = useCallback((id:item):void=>{
    setId(id);
    setPerson(true);
  },[]);

  const close = useCallback(():void=>{
    setPerson(false);
  },[]);

  const sortedByPlace = useCallback((e:EvtC):void => {
    const sortedPlaces:item[] = e.target.value == 'All' ? [...state.origin]
    : state.origin.filter((i:item)=>{
      if (i.location == e.target.value) return i;
    });
    dispatch({data:sortedPlaces});
  },[state.data]);
  
  const sortedPast = useCallback(():void => {
    const sortedPlaces:item[] =  state.origin.filter((i:item)=>{
      if (new Date(i.date_start) <= new Date(Date.now())) return i;
    });
    dispatch({data:sortedPlaces});
  },[state.data]);

  const sortedByTime = useCallback((time:string):boolean => {
   const Now:Date = new Date(Date.now());
   const Day:Date = new Date(time);
   return Now < Day;
  },[]);
  
  const context:context = {
    date:id,
    sort:sortedByTime
  };
  
  if (load) return <Loader />;
  if (error) return <Error />;
  return (
    <DataContext.Provider value={context}>
      {person&&
      <PersonalCard
       del={close}
      />}
      <Wrapper>
        <Header />  
        <Sub />
        <InputBlock
          data={memoData}
          filter={dataFilter}
          sort={sortedByPlace}
         />
        <Main
         data={memoData}
         sort={sortedByTime}
         get={getTitle}
        />
        <Footer 
         sort={sortedPast}
         />
      </Wrapper>
    </DataContext.Provider>
  )
}

export default App
