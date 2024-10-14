import bg1 from '../Media/images/bg1.png'
import bg2 from '../Media/images/bg2.png'




const JobsBanner = () =>{
    return(
        <>
        <div
        style={{
            backgroundImage: `url(${bg1}), url(${bg2})`,
            backgroundPosition: 'left bottom, right top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '350px, 350px',
          }}>
        <h1 className="text-center mt-32 font-bold text-3xl">Job Details</h1>
        </div>
        </>
    )
}
export default JobsBanner