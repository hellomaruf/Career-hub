import { useLoaderData, useParams } from "react-router-dom";

function JobDetails() {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    contact_information,
    job_title,
    experiences,
    educational_requirements,
    job_responsibility,
    job_description,
    salary,
  } = job;

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4">
            <span className="font-extrabold">Job Description : </span>
            {job_description}
          </p>
          <p className="py-4">
            <span className="font-extrabold">Job Responsibility : </span>
            {job_responsibility}
          </p>
          <p className="py-4">
            <span className="font-extrabold">Educational Requirements : </span>
            {educational_requirements}
          </p>
          <p className="py-4">
            <span className="font-extrabold">Experiences : </span>
            {experiences}
          </p>
        </div>
        <div className="col-span-1 p-6 bg-blue-50 bg-opacity-60">
          <h2 className="text-xl font-bold">Job Details</h2>
          <div className="py-4">
            <p className="py-1">
              <span className="font-bold">Salary : </span>
              {salary}{" "}
            </p>
            <p className="py-1">
              <span className="font-bold">Job Title : </span>
              {job_title}{" "}
            </p>
          </div>
          <h2 className="text-xl font-bold">Contact Information</h2>
          <div className="py-4">
            <p className="py-1">
              <span className="font-bold">Phone : </span>
              {contact_information.phone}{" "}
            </p>
            <p className="py-1">
              <span className="font-bold">Email : </span>
              {contact_information.email}{" "}
            </p>
            <p className="py-1">
              <span className="font-bold">Address : </span>
              {contact_information.address}{" "}
            </p>
          </div>
          <div className=" text-center w-full">
            <button className="btn bg-gradient-to-r w-full from-blue-400 to-purple-400 text-white">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
