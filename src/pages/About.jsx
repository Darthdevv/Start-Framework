

function About() {
  return (
    <>
      <main className="hero min-h-screen bg-pink-700 text-[#eee]">
        <div className="hero-content">
          <div className="max-w-[920px]">
            <h1 className="text-center text-4xl font-bold">{"About ".toUpperCase()}</h1>
            <div className="w-[100%] flex items-center justify-between gap-5">
              <p className="py-6 text-center italic">
                Start Framework is a free Tailwind theme created by me. The
                download includes the complete source files you can either clone the
                repository or download zip file from github
                It is created using react , tailwind and daisyui 
                feel free to add your own customization or use the templete itself
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About