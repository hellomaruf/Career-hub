function JobCard({ job }) {
  return (
    <div className="">
      <div className="space-y-6 bg-blue-50 rounded-2xl bg-opacity-60 p-9">
        <img src={job.logo} alt="" />
        <div className="space-y-2">
          <h2 className="font-bold text-2xl">{job.category_name}</h2>
          <p>{job.availability}</p>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
