export default function LazyCardDetail(){
    return(
        <>
         <div className="font-bold bg-gray-300"></div>
                <div className="bg-gray-300"></div>
                <div className="text-justify">
                {
                    [
                        "Status",
                        "Provinsi",
                        "Kode Provinsi",
                        "Kode Kecamatan",
                        "Kode Kabupaten/Kota",
                        "Kecamatan",
                        "Kabupaten/Kota",
                        "Tingkat",
                        "Bujur",
                        "Lintang",
                        "Alamat"
                    ].map((item)=>(
                      <div className="flex gap-2">
                            <p className="my-1">{item} : </p>
                            <span className="my-1 p-3 w-28 animate-pulse bg-gray-300"></span>
                      </div>  
                    ))
                }
                </div>
        
        </>
    )
}