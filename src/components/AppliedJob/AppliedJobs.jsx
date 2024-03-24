import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../loacalStorage";
import DisplayAppliedJobs from "../DisplayAppliedJobs/DisplayAppliedJobs";
import JobsAndAppliedHeader from "../JobsAndAppliedHeader/JobsAndAppliedHeader";

function AppliedJobs() {
  const [appliedJob, setAppliedJob] = useState([]);
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobsId = getStoredJobApplication();

    if (jobs.length) {
      // const jobApplied = jobs.filter((job) => storedJobsId.includes(job.id));
      const jobApplied = [];
      for (const id of storedJobsId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setAppliedJob(jobApplied);
    }
  }, []);
  return (
    <div>
      <JobsAndAppliedHeader title={"Applied Jobs"} />
      <div className="max-w-7xl mx-auto space-y-10 my-16">
        {appliedJob.map((items, index) => (
          <DisplayAppliedJobs appliedJob={items} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AppliedJobs;
