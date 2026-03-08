const LightRays = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[60%] pointer-events-none z-0 overflow-hidden">
      {/* Central ray cluster */}
      <div className="absolute inset-0">
        <div className="light-ray light-ray-1" />
        <div className="light-ray light-ray-2" />
        <div className="light-ray light-ray-3" />
        <div className="light-ray light-ray-4" />
        <div className="light-ray light-ray-5" />
      </div>
      {/* Soft ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
    </div>
  );
};

export default LightRays;
