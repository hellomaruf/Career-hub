import { useEffect, useState } from "react";
import FearureJob from "../FeatureJob/FearureJob";

function FeaturedJobs() {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [jobsLength, setJobsLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto pb-8">
        {featuredJobs.slice(0, jobsLength).map((items, index) => (
          <FearureJob key={index} job={items} />
        ))}
      </div>
      <div
        className={
          jobsLength === featuredJobs.length
            ? "hidden text-center"
            : "text-center"
        }
      >
        <button
          onClick={() => setJobsLength(featuredJobs.length)}
          className="btn bg-gradient-to-r from-blue-400 to-purple-400 text-white"
        >
          Show All
        </button>
      </div>
    </div>
  );
}

export default FeaturedJobs;
