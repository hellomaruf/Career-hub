import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import FeaturedJobsHeader from "../FeaturedJobsHeader/FeaturedJobsHeader";
import Hero from "../Hero/Hero";
import Jobs from "../Job/Jobs";
import JobHeader from "../JobHeader/JobHeader";

function Home() {
  return (
    <div>
      <Hero />
      <div className="pt-10">
        <JobHeader />
        <Jobs />
      </div>
      <div className="pt-10">
        <FeaturedJobsHeader />
        <FeaturedJobs />
      </div>
    </div>
  );
}

export default Home;
