export default function HeroSection(){
    return(
        <>
        <div className="mt-20">
        <div className="flex justify-center">
          <img src="sekolah.png" width={"800"} className="rounded-md" alt="" />
        </div>
        <h1 className="font-bold text-2xl mx-2 my-2 text-center">Find yours School</h1>
        <div className="flex justify-center">
          <div className="text-center">
           <button onClick={()=>window.location.href="/products"} className="bg-blue-600 mx-2 p-2 w-40 h-12 my-2 font-bold text-white rounded-md shadow">Start</button>
           <button onClick={()=>window.location.href="/about"} className="bg-blue-600 mx-2 p-2 w-40 h-12 my-2 font-bold text-white rounded-md shadow">About</button>
          </div>
        </div>

      </div>
        </>
    )
}