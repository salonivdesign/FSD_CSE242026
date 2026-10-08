import React,{useEffect} from 'react'

function FetchProducts() {

  useEffect(()=>{
    async function fetchData(){
      try{
        const res= await fetch("https://dummyjson.com/products");
        const data= await res.json();
        console.log(data);
      }catch(e){
        console.log("Error in fetching data", e);
      }finally{
        console.log("Fetching of data completed");
      }
    }
    fetchData();
  })
  return (
    <div>Fetch Products</div>
  )
}

export default FetchProducts