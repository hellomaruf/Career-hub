import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className=" max-w-7xl mx-auto">
      <div className="flex justify-center gap-10 ">
        {jobs.map((items, index) => (
          <JobCard key={index} job={items} />
        ))}
      </div>
    </div>
  );
}

export default Jobs;
