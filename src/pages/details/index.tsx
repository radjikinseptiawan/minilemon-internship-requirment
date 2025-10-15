import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetails from "../../components/section/cardDetail";
import LazyCardDetail from "../../components/section/cardDetail/lazyCardDetail";
interface DetailCardType{
    sekolah : string,
    npsn: string,
    status: string,
    propinsi: string,
    kode_prop:string,
    kode_kec:string,
    kode_kab_kota:string,
    kecamatan:string,
    kabupaten_kota:string,
    bentuk:string,
    bujur:string,
    lintang:string,
    alamat_jalan:string
}
export default function Details(){
    const { id } = useParams<{id:string}>()
    const [detail,setDetails] = useState<DetailCardType | null>(null)
    const [isFilled,setIsFilled] = useState<boolean>(false)
    const fetchingData = async()=>{
        try{
        const response = await fetch(`https://api-sekolah-indonesia.vercel.app/sekolah?npsn=${id}`,{
            method:"GET"
        })
        const data = await response.json()
        setDetails(data.dataSekolah[0])
        setIsFilled(true)
        return
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchingData()
    },[])

    console.log(detail)
    return(
        <div className="flex justify-center my-20 text-center">
        <div className="shadow-xl p-5 rounded-md">
            <h1>Detail Sekolah</h1>
            {isFilled && detail !== null? 
            <>
                <CardDetails 
                sekolah={detail.sekolah} 
                npsn={detail.npsn} 
                status={detail.status} 
                propinsi={detail.propinsi} 
                kode_prop={detail.kode_prop} 
                kode_kec={detail.kode_kec} 
                kode_kab_kota={detail.kode_kab_kota}
                kecamatan={detail.kecamatan} 
                kabupaten_kota={detail.kabupaten_kota} 
                bentuk={detail.bentuk} 
                bujur={detail.bujur} 
                lintang={detail.lintang} 
                alamatJalan={detail.alamat_jalan}/>
            </>
                : 
                <>
                <LazyCardDetail/>
                </>
            }
        </div>
        </div>
    )
}