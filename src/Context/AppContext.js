import { createContext ,useReducer } from "react";

const AppReducer =(state,action)=>{
    switch(action,type){
        default:
            return state
    }
}
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
const AppProvider =(props)=>{
    const[state,dispatch]=useReducer(AppReducer,initialState)
}