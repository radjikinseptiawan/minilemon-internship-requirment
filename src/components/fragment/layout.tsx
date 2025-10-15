import type { ReactNode } from "react";
import Footer from "../section/footer";
import Header from "../section/header";

export default function LayoutPage({children}: {children: ReactNode}){
    return(
        <>
        <div className="flex flex-col min-h-screen">
            <Header/>
                <main className="flex-grow">
                    {children}
                </main>    
            <Footer/>
        </div>
        </>
    )
}