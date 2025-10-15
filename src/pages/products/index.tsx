import { useEffect, useState } from "react"
import Cards from "../../components/section/cards"
import LazyCards from "../../components/section/cards/lazyCards";
import SearchEngine from "../../components/element/searchEngine";

interface CardsType{
    sekolah:string;
    alamat_jalan:string;
    kabupaten_kota:string;
    id:string;
    npsn:string;
}

interface InputDataSekolah {
    sekolah: string;
    propinsi: string;
    kabupaten_kota : string;
    kecamatan:string;
}

export default function Product(){
  const [data,setData] = useState<CardsType[]>([])  
  const [isFilled, setIsFilled] = useState<boolean>(false)
  const [value,setValue] = useState<InputDataSekolah>({
    sekolah:'',
    propinsi:'',
    kabupaten_kota:"",
    kecamatan:""
  })
  const fetchingData = async()=>{
    try{
    const response = await fetch(`https://api-sekolah-indonesia.vercel.app/sekolah?page=1&perPage=20`,{
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

   const sendingData = async()=>{
   try{
    if(value.sekolah){
        const response = await fetch(`https://api-sekolah-indonesia.vercel.app/sekolah/s?sekolah=${value.sekolah}`,{
        method : 'GET'
        })
        const data = await response.json();
        setData(data.dataSekolah)
    }else if(value.propinsi){
        const response = await fetch(`https://api-sekolah-indonesia.vercel.app/s?provinsi=${value.propinsi}&page=1&perPage=5`,{
            method:"GET"
        });
        const data = await response.json();
        setData(data.dataSekolah);
    }else if(value.kabupaten_kota){
        const response = await fetch(`https://api-sekolah-indonesia.vercel.app/sekolah?kab_kota=${value.kabupaten_kota}&page=1&perPage=5`,{
        method:"GET"
    });
        const data = await response.json();
        setData(data.dataSekolah);    
    }else if(value.kecamatan){
        const response= await fetch(`https://api-sekolah-indonesia.vercel.app/sekolah?kec=${value.kecamatan}&page=1$perPage=5`,{
            method : "GET"
        })
        const data = await response.json();
        setData(data.dataSekolah);    
    }
   }catch(e){
    console.log(e)
   }
    }
    return(
        <>
    <SearchEngine clicked={sendingData} changed={{
        sekolah : (e)=>setValue(prev=>({...prev,sekolah : e.target.value})),
        propinsi: (e)=>setValue(prev => ({...prev,propinsi: e.target.value})),
        kabupaten_kota:(e)=>setValue(prev => ({...prev, kabupaten_kota:e.target.value})),
        kecamatan:(e)=>setValue(prev=>({...prev, kecamatan:e.target.value}))
    }}></SearchEngine>
        <div className="py-10 grid-cols-1 items-center md:grid-cols-3 gap-0.5 grid">
            {isFilled ? 
                data.map((item,index)=>{
                    return(
                        <Cards
                            key={index++}
                            sekolah={item.sekolah}
                            alamatJalan={item.alamat_jalan}
                            kabupaten={item.kabupaten_kota}
                            path={item.npsn}
                            ></Cards>
                    )
                })
            :
                Array.from({length:20}).map(()=>{
                    return(
                        <LazyCards/>
                     )
                })
            }
        </div>
        </>
    )
}