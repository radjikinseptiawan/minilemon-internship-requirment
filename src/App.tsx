import { useEffect, useState } from "react";
import HeroSection from "./components/section/mainSection";
import Cards from "./components/section/cards";
import LazyCards from "./components/section/cards/lazyCards";

interface DataType {
    sekolah:string;
    npsn:string;
    alamat_jalan:string;
    kabupaten_kota:string;
}


export default function App(){
  const [data, setData] = useState<DataType[]>([])
  const [filled, setIsFilled] = useState<boolean>(false)
  const fetchingData = async()=>{
    try{
    const response = await fetch(`https://api-sekolah-indonesia.vercel.app/sekolah?page=1&perPage=5`,{
      method:"GET"
    })
    const data = await response.json()
    setData(data.dataSekolah)
    setIsFilled(true)
    return true
    }catch(e){
        console.log(e)
        return 
    }
  }

  useEffect(()=>{
    fetchingData()
  },[])


  return(
    <>
      <HeroSection/>
      <div className="p-2">
        <h1 className="text-2xl text-center md:text-justify font-bold underline" onClick={()=>window.location.href = "/products"}>Kilasan</h1>
        <div className="flex justify-center mx-auto flex-col md:flex-row">
            {
              filled ? 
              
              data.map((item,index)=>{
                return(
                  <Cards sekolah={item.sekolah} key={index++} path={item.npsn} alamatJalan={item.alamat_jalan} kabupaten={item.kabupaten_kota}/>
                )
              })
              :
              Array.from({length:5}).map((_,index)=>{
                return(
                  <LazyCards key={index++}/>
                )
              })
            }
        </div>
      </div>
    </>
  )
}