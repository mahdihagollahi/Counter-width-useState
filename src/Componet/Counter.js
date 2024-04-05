import React,{useState} from "react"
const Counter = () =>{
    // زدن ست ایستیت و صفر برای دیفالت کانتره
    const [count,setCount]=useState(0)

    function Mines(){
        setCount(prevCount => prevCount -1)
    }
    function Add(){
        setCount(prevCount => prevCount +1)
    }
    return(
    <>
    <div className="container flex items-center  justify-center">
       <a className="p-10 bg-blue-700" onClick={Mines()}>
        Mines
       </a>
       <input className="w-3.5 h-3.5" onClick={count} />
       <a className="p-10 bg-blue-700" onClick={Add()}>
        Add
       </a>
    </div>
    </>
    )
}
export default Counter
