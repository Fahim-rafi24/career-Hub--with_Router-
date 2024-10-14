import { Link } from "react-router-dom"



const NavBar = () => {
    return (
        <>
            <nav className="mx-auto pt-5 md:px-20 bg-[#E8E8E8]">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {/* <li><Link to={'/'}>Home</Link></li> */}
                                <li><Link to={'/'}>Statistics</Link></li>
                                <li><Link to={'/jobs'}>Applied Jobs</Link></li>
                                <li><Link to={'/blog'}>Blog</Link></li>
                            </ul>
                        </div>
                        <Link to={'/'} className="btn btn-ghost text-xl">CareerHub</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {/* <li className="hover:text-blue-400 text-lg"><Link to={'/'}>Home</Link></li> */}
                            <li className="hover:text-blue-400 text-lg"><Link to={'/'}>Statistics</Link></li>
                            <li className="hover:text-blue-400 text-lg"><Link to={'/jobs'}>Applied Jobs</Link></li>
                            <li className="hover:text-blue-400 text-lg"><Link to={'/blog'}>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to='/jobs' className="btn bg-gradient-to-r from-[#9873FF] to-[#7E90FE]">Star Applying</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar