import JobsBanner from "../Components/JobsBanner"
import JobMain from "../Components/JobsMain"




function Jobs() {
    return (
        <>
            <section id="Jobs-Body" className='App'>
                <header className='grid min-h-[40vh] mb-20 bg-gradient-to-r from-[#E8E8E8] to-[#7c7e7f24]'>
                    <JobsBanner></JobsBanner>
                </header>
                <main>
                    <JobMain></JobMain>
                </main>
            </section>
        </>
    )
}

export default Jobs