import HomeBanner from '../Components/HomeBanner'
import HomeMain from '../Components/HomeMain'





function Home() {
    return (
        <>
            <section id="Body" className='App'>
                <header className='grid bg-[#E8E8E8] min-h-[40vh] mb-20'>
                    <HomeBanner></HomeBanner>
                </header>
                <main>
                    <HomeMain></HomeMain>
                </main>
            </section>
        </>
    )
}

export default Home