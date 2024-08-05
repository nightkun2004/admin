import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"


const Layout = ({ children }) => {
    return (
        <div className="flex">
            <div className="w-16 md:w-64 bg-white text-back border-r-2">
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col">
                <div className="shadow-md">
                    <Navbar />
                </div>
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout