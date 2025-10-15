export default function Header(){
    return(
        <>
            <header className="flex items-center bg-blue-500 z-10 h-16 fixed font-bold text-blue-900 p-3 w-full">
                <nav>
                    <ul className="flex gap-4">
                        <li className="hover:text-white hover:underline"><a href="/">Home</a></li>
                        <li className="hover:text-white hover:underline"><a href="/products">Products</a></li>
                        <li className="hover:text-white hover:underline"><a href="/about">About</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}