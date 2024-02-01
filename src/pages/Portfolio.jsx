import myGif1 from '../images/pixel1.gif';


function Portfolio() {
  return (
    <>
      <main className="hero min-h-screen pt-[50px] bg-indigo-500 text-[#121212]">
        <div className="hero-content">
          <div className="max-w-[1020px]">
            <h1 className="text-center pt-[20px] text-4xl font-bold">
              {"portfolio".toUpperCase()}
            </h1>
            <div className="w-[100%] mt-[20px] flex items-start justify-between flex-wrap gap-6">
              <img className='sm:w-[300px] mb-3' src={myGif1} alt="gif1" />
              <img className='sm:w-[300px] mb-3' src={myGif1} alt="gif1" />
              <img className='sm:w-[300px] mb-3' src={myGif1} alt="gif1" />
              <img className='sm:w-[300px] mb-3' src={myGif1} alt="gif1" />
              <img className='sm:w-[300px] mb-3' src={myGif1} alt="gif1" />
              <img className='sm:w-[300px] mb-3' src={myGif1} alt="gif1" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Portfolio