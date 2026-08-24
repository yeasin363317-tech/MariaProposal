import MariaPortrait from "@/components/features/MariaPortrait";

interface NoStateProps {
  onRestart: () => void;
}

const NoState = ({ onRestart }: NoStateProps) => {
  return (
    <div className="page-wrapper" style={{ background: "hsl(220,18%,97%)" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, hsla(220,20%,92%,0.6) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <div className="page-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Portrait — calm, desaturated */}
        <div className="fade-in flex justify-center">
          <MariaPortrait variant="calm" />
        </div>

        {/* Heading */}
        <div className="fade-in-delay-1" style={{ width: "100%", textAlign: "center" }}>
          <h2 className="no-state-heading">ঠিক আছে, Maria. ❤️</h2>
        </div>

        {/* Divider */}
        <div
          className="fade-in-delay-1"
          style={{
            width: "50px",
            height: "2px",
            background: "hsla(220,15%,70%,0.5)",
            borderRadius: "999px",
            margin: "0 auto",
          }}
        />

        {/* Message card */}
        <div
          className="fade-in-delay-2"
          style={{
            background: "hsla(0,0%,100%,0.7)",
            border: "1px solid hsla(220,15%,85%,0.6)",
            borderRadius: "1.25rem",
            padding: "1.75rem 1.5rem",
            width: "100%",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <p className="no-state-text">
            তোমার সিদ্ধান্তকে আমি সম্মান করি।
          </p>
          <p className="no-state-text" style={{ marginTop: "0.75rem" }}>
            আমার কথাটা শোনার জন্য ধন্যবাদ।
          </p>
          <p
            className="no-state-text"
            style={{ marginTop: "0.75rem", fontSize: "0.9rem", opacity: 0.7 }}
          >
            যে কোনো উত্তরই সম্মানের সাথে গ্রহণ করার মানসিকতা রাখি।
            তুমি ভালো থেকো।
          </p>
        </div>

        {/* Restart */}
        <div className="fade-in-delay-3">
          <button
            className="btn-secondary"
            onClick={onRestart}
            style={{ fontSize: "0.9rem" }}
            aria-label="আবার শুরু থেকে"
          >
            আবার শুরু থেকে
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoState;
