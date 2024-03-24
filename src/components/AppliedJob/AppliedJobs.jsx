import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../loacalStorage";
import DisplayAppliedJobs from "../DisplayAppliedJobs/DisplayAppliedJobs";

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
      {appliedJob.map((items, index) => (
        <DisplayAppliedJobs appliedJob={items} key={index} />
      ))}
    </div>
  );
}

export default AppliedJobs;
