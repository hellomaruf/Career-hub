

function DisplayAppliedJobs({ appliedJob }) {
  
  return (
      <div>
          
      <div className="card card-side bg-base-100 shadow-md">
        <figure>
          <img className="px-10 py-20 w-60" src={appliedJob.logo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{appliedJob.job_title}</h2>
          <p>{appliedJob.company_name}</p>
          <div className="flex gap-6">
            <button className="border-2 px-3 py-2 rounded-lg border-blue-400 font-medium text-blue-400">
              {appliedJob.job_type}
            </button>
            <button className="border-2 px-3 py-2 rounded-lg border-blue-400 font-medium text-blue-400">
              {appliedJob.remote_or_onsite}
            </button>
          </div>
          <div className=" font-medium text-gray-400 text-lg py-3">
            <p>
              <i className="ri-map-pin-2-line"></i>
              {appliedJob.location}
            </p>
            <p>
              <i className="ri-map-pin-2-line"></i>
              {appliedJob.salary}
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn bg-gradient-to-r from-blue-400 to-purple-400 text-white">
              Show Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayAppliedJobs;
