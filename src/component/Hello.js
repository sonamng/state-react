
import React,{useState} from "react";
function Sum(){
    // const [data,setData]=useState("sima")
    const [data,setData]=useState(0)
    function updateData(){
        setData(data+1)
        // setData("sonam")

    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={updateData}>button</button>
        </div>
    )
}
export default Sum;










