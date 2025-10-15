export default function LazyCards(){
    return(
        <>
        <div className="bg-gray-200 shadow-xl animate-pulse p-4 w-72 m-2 rounded-md">
            <h1 className="font-bold p-3 my-1 animate-pulse bg-gray-400"></h1>
            <hr />
            <p className="font-bold animate-pulse p-3 bg-gray-400 my-2"></p>
            <p className="font-bold animate-pulse p-3 bg-gray-400 my-2"></p>
            <div className="flex justify-end">
                <button 
                className="w-27 bg-gray-400 p-3 text-sm rounded-xl font-bold text-gray animate-pulse hover:cursor-pointer"
                ></button>
            </div>
        </div>
        </>
    )
}