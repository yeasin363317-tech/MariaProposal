import MariaPortrait from "@/components/features/MariaPortrait";

interface Page1Props {
  onContinue: () => void;
}

const Page1 = ({ onContinue }: Page1Props) => {
  return (
    <div className="page-wrapper bg-mesh">
      {/* Blobs */}
      <div className="blob-1" aria-hidden="true" />
      <div className="blob-2" aria-hidden="true" />

      <div className="page-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Badge */}
        <div className="fade-in">
          <span className="badge-label">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
              <path d="M5 0.5C5 0.5 8.5 3.5 8.5 6C8.5 7.933 6.933 9.5 5 9.5C3.067 9.5 1.5 7.933 1.5 6C1.5 3.5 5 0.5 5 0.5Z"/>
            </svg>
            For Maria
          </span>
        </div>

        {/* Portrait */}
        <div className="fade-in-delay-1 flex justify-center">
          <MariaPortrait variant="lg" />
        </div>

        {/* Heading */}
        <div className="fade-in-delay-2" style={{ width: "100%" }}>
          <h1 className="heading-hero" style={{ marginBottom: "0.75rem" }}>
            Maria, তোমার জন্য ছোট্ট একটা কথা...
          </h1>
        </div>

        {/* Divider */}
        <div className="fade-in-delay-2 divider-rose" />

        {/* Subtext */}
        <div className="fade-in-delay-3" style={{ width: "100%" }}>
          <p className="subtext">
            কিছু কথা আছে, যেগুলো সরাসরি বলা হয়তো একটু কঠিন।<br />
            তাই আজ এই ছোট্ট জায়গাটায় বলছি।
          </p>
        </div>

        {/* Button */}
        <div className="fade-in-delay-4">
          <button
            className="btn-primary"
            onClick={onContinue}
            aria-label="Continue to next page"
          >
            Continue
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
