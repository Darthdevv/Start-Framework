

function Contact() {
  return (
    <>
      <main className="hero min-h-screen pt-[80px] pb-[20px] bg-indigo-500">
        <div className="hero-content w-[100%] flex-col lg:flex-row-reverse">
          <div className="card shrink-0 sm:w-[550px] shadow-2xl bg-[#121212]">
            <h1 className="text-center pt-[25px] text-4xl font-bold">
              {"get in touch ".toUpperCase()}
            </h1>
            <form className="card-body w-[100%]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="number"
                  placeholder="age"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact