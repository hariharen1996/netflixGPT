const VideoShimmer = () => {
  return (
    <div className="flex pt-10 mx-2 p-2 overflow-hidden cursor-pointer">
      <div className="flex gap-2 w-48 h-64">
        <div className="bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"></div>
        <div className="bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"></div>
        <div className="bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"></div>
        <div className="bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"></div>
        <div className="bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"></div>
        <div className="bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"></div>
        <div className="bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"></div>
        <div className="bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"></div>
      </div>
    </div>
  );
};

export default VideoShimmer;
