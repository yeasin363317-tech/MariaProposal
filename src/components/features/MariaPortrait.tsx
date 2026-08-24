interface MariaPortraitProps {
  variant: "lg" | "md" | "sm" | "proposal" | "celebration" | "calm";
  className?: string;
  animate?: boolean;
}

const MariaPortrait = ({ variant, className = "" }: MariaPortraitProps) => {
  return (
    <div className={`portrait-${variant} ${className}`}>
      <img
        src="/assets/maria.webp"
        alt="Maria"
        className="portrait-img"
      />
    </div>
  );
};

export default MariaPortrait;
