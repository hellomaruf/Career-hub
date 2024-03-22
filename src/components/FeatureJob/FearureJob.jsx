function FearureJob({ job }) {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="p-10 border-2 rounded-lg">
      <img className="pb-6" src={logo} alt="" />
      <div className="pb-4">
        <h2 className="font-bold text-2xl">{job_title}</h2>
        <p className="text-xl font-medium text-gray-500">{company_name}</p>
      </div>
      <div className="flex gap-6">
        <button className="border-2 px-3 py-2 rounded-lg border-blue-400 font-medium text-blue-400">
          {job_type}
        </button>
        <button className="border-2 px-3 py-2 rounded-lg border-blue-400 font-medium text-blue-400">
          {remote_or_onsite}
        </button>
      </div>
      <div className="flex gap-4 font-medium text-gray-400 text-lg py-3">
        <p>
          <i className="ri-map-pin-2-line"></i>
          {location}
        </p>
        <p>
          <i className="ri-map-pin-2-line"></i>
          {salary}
        </p>
      </div>
      <button className="btn bg-gradient-to-r from-blue-400 to-purple-400 text-white">
        View Ditails
      </button>
    </div>
  );
}

export default FearureJob;
