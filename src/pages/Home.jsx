import myImg from "../images/peep-1.png";

function Home() {
  return (
    <>
      <main className="hero min-h-screen bg-indigo-500 text-[#121212]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img className="w-[100%] max-sm:w-[70%] max-sm:ml-[60px]" src={myImg} alt="profilePicture" />
            <h1 className="text-4xl max-sm:text-3xl font-bold">
              {"start framework".toUpperCase()}
            </h1>
            <p className="py-6 italic">
              Fullstack developer - Content Creator - Web Designer
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
