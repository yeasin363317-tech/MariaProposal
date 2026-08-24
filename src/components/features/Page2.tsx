import MariaPortrait from "@/components/features/MariaPortrait";

interface Page2Props {
  onContinue: () => void;
}

const Page2 = ({ onContinue }: Page2Props) => {
  return (
    <div className="page-wrapper bg-mesh">
      <div className="blob-1" aria-hidden="true" />
      <div className="blob-2" aria-hidden="true" />

      <div className="page-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Portrait with decorative ring */}
        <div className="fade-in flex flex-col items-center" style={{ gap: "0.5rem" }}>
          <div style={{ position: "relative", display: "inline-flex" }}>
            <MariaPortrait variant="md" />
            {/* Decorative outer ring */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "-10px",
                borderRadius: "50%",
                border: "1px dashed hsla(345,55%,75%,0.5)",
                animation: "spin 20s linear infinite",
              }}
            />
          </div>
        </div>

        {/* Glass card */}
        <div className="glass-card fade-in-delay-1" style={{ padding: "2rem 1.75rem", width: "100%", textAlign: "center" }}>
          <h2 className="heading-page" style={{ marginBottom: "1rem" }}>
            Maria, একটা কথা বলব?
          </h2>

          <div className="divider-rose" style={{ marginBottom: "1rem" }} />

          <p className="subtext" style={{ marginBottom: "0.5rem" }}>
            কথাটা হয়তো একটু অপ্রত্যাশিত,<br />
            কিন্তু অনেকদিন ধরে মনের মধ্যে ছিল।
          </p>
        </div>

        <p
          className="fade-in-delay-2 subtext"
          style={{ fontSize: "0.875rem", opacity: 0.7, marginTop: "-0.5rem" }}
        >
          শুধু একটু মন দিয়ে শুনবে?
        </p>

        <div className="fade-in-delay-3">
          <button
            className="btn-primary"
            onClick={onContinue}
            aria-label="হ্যাঁ বলো"
          >
            হ্যাঁ, বলো
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Page2;
