import {Link} from "react-router-dom";


export function NavBar() {
    return (
        <div>
            <nav className="navbar bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="logo text-xl font-bold">
                        MyApp
                    </div>
                    <div className="flex items-center space-x-6">
                        <ul className="flex space-x-4">
                            <li className="hover:text-gray-400"><Link to="/">Home</Link></li>
                            <li className="hover:text-gray-400"><Link to="/about">About</Link></li>
                            <li className="hover:text-gray-400"><Link to="/contact">Contact</Link></li>
                            <li className="hover:text-gray-400"><Link to="/shoppingCart">ShoppingCart</Link></li>
                        </ul>
                        <div>
                            <button className="bg-blue-900 w-30 h-10 rounded-3xl">
                                <Link to="/login"> LOGIN </Link>
                            </button>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
}