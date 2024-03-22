import Hero from "../Hero/Hero";
import Jobs from "../Job/Jobs";
import JobHeader from "../JobHeader/JobHeader";

function Home() {
  return (
    <div>
      <Hero />
      <JobHeader />
      <Jobs />
    </div>
  );
}

export default Home;
