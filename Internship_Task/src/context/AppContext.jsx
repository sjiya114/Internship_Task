import { createContext, useState } from "react";
export const AppContext=createContext();
export const AppContextProvider=({children})=>
{
const [hide,setHide]=useState(true);
const [token,setToken]=useState(localStorage.getItem("token"));
const [status,setStatus]=useState("Join Group")
const [user,setUser]=useState(localStorage.getItem("user"));
const [filter,setFilter]=useState("all");
const values={token,setToken,user,setUser,filter,setFilter,hide,setHide};
return(
<AppContext.Provider value={values}> 
 {children}
</AppContext.Provider>
);
}
