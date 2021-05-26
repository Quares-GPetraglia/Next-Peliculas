import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer/footer";

export default function Layout({ children, title }) {
    return (
        <div className="dark:bg-gray-900">
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100 dark:bg-gray-900">
                <Navbar title={title} />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    )
}