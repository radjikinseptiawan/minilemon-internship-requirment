interface CardsType{
    sekolah:string;
    path:string;
    alamatJalan:string;
    kabupaten:string;
}

export default function Cards({sekolah,path,alamatJalan,kabupaten}:CardsType){
    return(
        <>
        <div className="shadow-xl p-4 w-72 m-2 rounded-md">
            <h1 className="font-bold">{sekolah}</h1>
            <hr />
            <p>{alamatJalan}</p>
            <p>{kabupaten}</p>
            <div className="flex justify-end">
                <button 
                className="bg-blue-500 p-2 text-sm rounded-xl font-bold text-blue-900 hover:cursor-pointer"
                onClick={()=>window.location.href= `products/${path}`}
                >Details</button>
            </div>
        </div>
        </>
    )
}