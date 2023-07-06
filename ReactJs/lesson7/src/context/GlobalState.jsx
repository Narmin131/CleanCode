import axios from "axios";
import { createContext, useEffect, useState } from "react";

// 1. context yaradilmali
export const GlobalContext = createContext()

// 2.contextimin provider yaratmaq
// 3.index.js yada router provider daxiline almaq

export const ContextProvider = ({ children }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
    }, [])

    const [a, setA]= useState('')

    return (
        <GlobalContext.Provider value={{ data, setData, a, setA }}>
            {children}
        </GlobalContext.Provider>
    )
}