import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../loacalStorage";
import DisplayAppliedJobs from "../DisplayAppliedJobs/DisplayAppliedJobs";
import JobsAndAppliedHeader from "../JobsAndAppliedHeader/JobsAndAppliedHeader";

function AppliedJobs() {
  const [appliedJob, setAppliedJob] = useState([]);
  console.log(appliedJob);
  const [displayByFilterJobs, setDisplayByFilterJobs] = useState([]);
  const handleJobsByFilter = (filter) => {
    if (filter === "all") {
      setDisplayByFilterJobs(appliedJob);
    } else if (filter === "onsite") {
      const onsiteJob = appliedJob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayByFilterJobs(onsiteJob);
    } else if (filter === "remote") {
      const remoteJobs = appliedJob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayByFilterJobs(remoteJobs);
    }
  };
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
      setDisplayByFilterJobs(jobApplied);
      setAppliedJob(jobApplied);
    }
  }, []);
  return (
    <div>
      <JobsAndAppliedHeader title={"Applied Jobs"} />
      <div className="max-w-7xl mx-auto text-right my-4">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-gradient-to-r from-blue-400 to-purple-400 text-white m-1 "
          >
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleJobsByFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsByFilter("onsite")}>
              <a>Onsite</a>
            </li>
            <li onClick={() => handleJobsByFilter("remote")}>
              <a>Remote</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto space-y-10 my-16">
        {displayByFilterJobs.map((items, index) => (
          <DisplayAppliedJobs appliedJob={items} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AppliedJobs;
