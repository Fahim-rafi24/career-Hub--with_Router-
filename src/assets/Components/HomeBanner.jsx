import { Link } from 'react-router-dom'
import userPng from '../Media/images/user.png'


const HomeBanner = () => {
    return (
        <section className='grid grid-cols-2 content-end w-4/5 mx-auto'>
            <div>
                <h1 className='text-3xl mt-32 mb-4'>One Step Closer To Your Dream Job</h1>
                <small className='text-gray-500'>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </small>
                <br />
                <Link to={'/jobs'}>
                    <button className="btn btn-outline mt-5 bg-gradient-to-r from-[#9873FF] border-none to-[#7E90FE]">Get Started</button>
                </Link>
            </div>
            <div className='w-[420px] ml-96'>
                <img className='content-end' src={userPng} alt="" />
            </div>
        </section>
    )
}

export default HomeBanner