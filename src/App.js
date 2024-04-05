import React,{useState} from "react"
const Counter = () =>{
    // زدن ست ایستیت و صفر برای دیفالت کانتره
    const [count,setCount]=useState(0)

    function Mines(){
        setCount(prevCount => prevCount -1 && prevCount>0)
       
        }
       
    
    function Add(){
        setCount(prevCount => prevCount +1)
    }
    return(
    <>
    <div className="container flex items-center  justify-center">
       <a className=" text-center items-center bg-red-700 rounded-xl text-white flex text-base h-14 justify-center px-4 py-4 whitespace-nowrap w-50 font-semibold cursor-pointer hover:opacity-90 " onClick={Mines}>
        Mines
       </a>
       <span  class=" text-center items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{count}</span>
       <a className="items-center bg-blue-700 rounded-xl text-white flex text-base h-14 justify-center px-4 py-4 whitespace-nowrap w-50 font-semibold cursor-pointer hover:opacity-90"  onClick={Add}>
        Add
       </a>
    </div>
    </>
    )
}
export default Counter



// function App() {
//   return (
//    <>
   
//    </>
//   );
// }

// export default App;
