export default function Footer(){
    return(
        <>
            <div className="bg-slate-900 z-10 mt-auto p-3 flex-col md:flex-row flex justify-between items-center align-middle w-full h-auto md:h-28">
              <div className="text-slate-400">
                <h1 className="text-xl font-bold underline">Contact</h1>
                <p>Whatsapp: +62-858-8052-8744</p>
                <p>gmail: radjikinseptiawan@gmail.com</p>
              </div>
              
              <div className="mt-8 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} FindSchools. All rights reserved.
                </div>

                
                <div className="text-slate-400 flex gap-5">
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <a href="">About Us</a>
                </div>
            </div>
        </>
    )
}