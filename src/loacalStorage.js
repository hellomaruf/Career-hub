// const getStoredJobApplication = () => {
//   const storedJobApplication = localStorage.getItem("job-application");
//   if (storedJobApplication) {
//     return JSON.parse(storedJobApplication);
//   } else {
//     return [];
//   }
// };
// const saveJobApplication = (id) => {
//   const storedJobApplications = getStoredJobApplication();
//   const exists = storedJobApplications.find((jobId) => jobId === id);
//   if (!exists) {
//     storedJobApplications.push(id);
//     localStorage.setItem(
//       "job-application",
//       JSON.stringify(storedJobApplications)
//     );
//   }
// };
// export { getStoredJobApplication, saveJobApplication };

const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-application");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  } else {
    return [];
  }
};

const saveJobApplication = (id) => {
  const storedJobApplications = getStoredJobApplication();
  const exists = storedJobApplications.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem(
      "job-application",
      JSON.stringify(storedJobApplications)
    );
  }
};

export { saveJobApplication, getStoredJobApplication };
