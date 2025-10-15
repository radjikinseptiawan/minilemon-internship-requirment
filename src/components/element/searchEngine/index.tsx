import { type ChangeEvent } from "react"

export default function SearchEngine({changed,clicked}:{
    changed: {
        sekolah : (e : ChangeEvent<HTMLInputElement>)=> void,
        propinsi:(e:ChangeEvent<HTMLInputElement>)=>void,
        kabupaten_kota:(e: ChangeEvent<HTMLInputElement>)=>void,
        kecamatan:(e:ChangeEvent<HTMLInputElement>)=>void
    };
    clicked:()=>void
}){
    
    return(
        <>
        <div className="pt-18 items-center flex-col md:flex-row shadow-2xl rounded-md gap-2 pb-4 flex justify-center">
                <input onChange={changed.sekolah} type="text" className="border w-52 rounded-xl" placeholder="Nama Sekolah"/>
                <input disabled onChange={changed.propinsi} type="text" className="border w-52 rounded-xl" placeholder="Nama Provinsi"/>
                <input disabled onChange={changed.kecamatan} type="text" className="border w-52 rounded-xl" placeholder="Nama Kecamatan"/>
                <input disabled onChange={changed.kabupaten_kota} type="text" className="border w-52 rounded-xl" placeholder="Nama Kabupaten"/>
                <button onClick={clicked} className="bg-blue-600 p-3 font-bold text-blue-900 hover:text-white hocer:cursor-pointer rounded-md w-28">Cari</button>
        </div>
        </>
    )
}