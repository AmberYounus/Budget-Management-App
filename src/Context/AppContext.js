import { createContext } from "react";

const initialState ={
    budget:2000,
    expenses:[
        {id:1212122,name:"shopping",cost:50},
        {id:1212122,name:"shopping",cost:50},
        {id:1212122,name:"shopping",cost:50},
        {id:1212122,name:"shopping",cost:50},
        {id:1212122,name:"shopping",cost:50},
    ],
}
export const AppContext =createContext();
