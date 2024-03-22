import { useEffect, useState } from "react";
import FearureJob from "../FeatureJob/FearureJob";

function FeaturedJobs() {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);
  console.log(featuredJobs);
  return (
    <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto pb-16">
      {featuredJobs.map((items, index) => (
        <FearureJob key={index} job={items} />
      ))}
    </div>
  );
}

export default FeaturedJobs;
