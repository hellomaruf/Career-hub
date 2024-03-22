function Home() {
  return (
    <div>
      <div className="hero bg-blue-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="./images/user.png" className="max-w-2xl bottom-0" />
          <div>
            <h1 className="text-6xl font-bold">
              One Step Closer To Your{" "}
              <span className="bg-gradient-to-r from-blue-400  to-purple-400 inline-block text-transparent bg-clip-text">
                Dream Job!
              </span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn bg-gradient-to-r from-blue-400 to-purple-400 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
