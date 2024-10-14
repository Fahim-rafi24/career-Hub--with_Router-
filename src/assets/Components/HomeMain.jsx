import firstPng from '../Media/icons/accounts.png'
import secondPng from '../Media/icons/creative.png'
import thairdPng from '../Media/icons/marketing.png';
import fourthPng from '../Media/icons/chip.png';
// 
import google from '../Media/logo/google.png'
import netflix from '../Media/logo/netflix.png'
import tesla from '../Media/logo/tesla.png'
import airbnb from '../Media/logo/airbnb.png'




function HomeMain() {
    return (
        <>
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-1">Job Catagory List</h2>
                <code>Explore thousands of job opportunities with all the information you need. Its your future</code>
            </div>
            <section>
                <div className="top-div flex justify-between w-3/6 mx-auto mt-8">
                    <div className="card bg-[#5bafd626] p-4">
                        <img width={'50px'} src={firstPng} alt="" />
                        <h6 className='font-bold mt-2'>Account & Finance</h6>
                        <p className='text-sm'>300 Jobs Available</p>
                    </div>
                    <div className="card bg-[#5bafd626] p-4">
                        <img width={'50px'} src={secondPng} alt="" />
                        <h6 className='font-bold mt-2'>Account & Finance</h6>
                        <p className='text-sm'>300 Jobs Available</p>
                    </div>
                    <div className="card bg-[#5bafd626] p-4">
                        <img width={'50px'} src={thairdPng} alt="" />
                        <h6 className='font-bold mt-2'>Account & Finance</h6>
                        <p className='text-sm'>300 Jobs Available</p>
                    </div>
                    <div className="card bg-[#5bafd626] p-4">
                        <img width={'50px'} src={fourthPng} alt="" />
                        <h6 className='font-bold mt-2'>Account & Finance</h6>
                        <p className='text-sm'>300 Jobs Available</p>
                    </div>
                </div>
            </section>
            <div className='text-center mt-14'>
                <h2 className='text-4xl font-bold my-3'>Featured Jobs</h2>
                <small>Explore thousands of job opportunities with all the information you need. Its your future</small>
            </div>



            <section className='grid grid-cols-2 w-2/6 gap-10 mx-auto mt-32'>
                <div className="JobCard border rounded-xl w-fit p-5">
                    <img src={google} alt="" />
                    <h3 className='text-xl font-bold'>Technical Database Engineer</h3>
                    <h6 className='font-extralight my-2'>Google LLC</h6>
                    <span>
                        <button className="btn btn-outline btn-info mr-4">Remote</button>
                        <button className="btn btn-outline btn-info">Full Time</button>
                    </span>
                    <div className='mb-3'>
                        <small>Location : Dhaka, Bangladesh</small>
                        <br />
                        <small>Salary : 100K</small>
                    </div>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">View Details</button>
                </div>
                <div className="JobCard border rounded-xl w-fit p-5">
                    <img src={netflix} alt="" />
                    <h3 className='text-xl font-bold'>Senior Product Designer</h3>
                    <h6 className='font-extralight my-2'>Netflix</h6>
                    <span>
                        <button className="btn btn-outline btn-info mr-4">Onsite</button>
                        <button className="btn btn-outline btn-info">Full Time</button>
                    </span>
                    <div className='mb-3'>
                        <small>Location : Dhaka, Bangladesh</small>
                        <br />
                        <small>Salary : 100K</small>
                    </div>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">View Details</button>
                </div>
                <div className="JobCard w-full border rounded-xl p-5">
                    <img width={'100px'} src={tesla} alt="" />
                    <h3 className='text-xl font-bold'>Software Engineer</h3>
                    <h6 className='font-extralight my-2'>Tesla</h6>
                    <span>
                        <button className="btn btn-outline btn-info mr-4">Onsite</button>
                        <button className="btn btn-outline btn-info">Full Time</button>
                    </span>
                    <div className='mb-3'>
                        <small>Location : Dhaka, Bangladesh</small>
                        <br />
                        <small>Salary : 100K</small>
                    </div>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">View Details</button>
                </div>
                <div className="JobCard border rounded-xl w-fit p-5">
                    <img src={airbnb} alt="" />
                    <h3 className='text-xl font-bold'>Technical Database Engineer</h3>
                    <h6 className='font-extralight my-2'>Google LLC</h6>
                    <span>
                        <button className="btn btn-outline btn-info mr-4">Remote</button>
                        <button className="btn btn-outline btn-info">Full Time</button>
                    </span>
                    <div className='mb-3'>
                        <small>Location : Dhaka, Bangladesh</small>
                        <br />
                        <small>Salary : 100K</small>
                    </div>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">View Details</button>
                </div>
            </section>
            <div className='flex justify-center my-20'>
            <button className="btn glass bg-gradient-to-r from-cyan-500 to-blue-500">See All Jobs</button>
            </div>
        </>
    )
}
export default HomeMain