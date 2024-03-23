function JobsAndAppliedHeader({ title }) {
  return (
    <div>
      <div className="h-64 bg-blue-50 relative flex justify-center items-center">
        <h1 className="text-center font-bold text-3xl">{title}</h1>
        <img
          className="absolute left-1 bottom-0"
          src="/images/bg1.png"
          alt=""
        />
        <img className="absolute top-0 right-2" src="/images/bg2.png" alt="" />
      </div>
    </div>
  );
}

export default JobsAndAppliedHeader;
