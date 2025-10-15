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
    alamatJalan:string
}

export default function CardDetails({
    sekolah,
    npsn,
    status,
    propinsi,
    kode_prop,
    kode_kec,
    kode_kab_kota,
    kecamatan,
    kabupaten_kota,
    bentuk,
    bujur,
    lintang,
    alamatJalan
}: DetailCardType){
    return(
        <>
            <h1 className="font-bold">{sekolah}</h1>
                <p className="italic">{npsn}</p>
                <div className="text-justify">
                    <p>Status : {status}</p>
                    <p>Provinsi : {propinsi}</p>
                    <p>Kode Provinsi : {kode_prop}</p>
                    <p>Kode Kecamatan : {kode_kec}</p>
                    <p>Kode Kabupaten/Kota : {kode_kab_kota}</p>
                    <p>Kecamatan : {kecamatan}</p>
                    <p>Kabupaten/Kota : {kabupaten_kota}</p>
                    <p>Tingkat : {bentuk}</p>
                    <p>Bujur : {bujur}</p>     
                    <p>Lintang : {lintang}</p>
                    <p>Alamat : {alamatJalan}</p>
                </div>
        </>
    )
}