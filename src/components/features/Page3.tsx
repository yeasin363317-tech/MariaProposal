import MariaPortrait from "@/components/features/MariaPortrait";

interface Page3Props {
  onContinue: () => void;
}

const Page3 = ({ onContinue }: Page3Props) => {
  return (
    <div
      className="bg-mesh"
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2.5rem 1.25rem 3rem",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <div className="blob-1" aria-hidden="true" />
      <div className="blob-2" aria-hidden="true" />

      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {/* Section label */}
        <div className="fade-in" style={{ textAlign: "center" }}>
          <span className="label-for">একটি চিঠি</span>
        </div>

        {/* Letter card */}
        <div className="letter-card fade-in-delay-1" style={{ padding: "1.75rem 1.5rem" }}>
          {/* Letter header with portrait */}
          <div className="letter-header">
            <MariaPortrait variant="sm" />
            <div>
              <p className="letter-salutation">প্রিয় Maria,</p>
              <p className="letter-date">আজকের এই মুহূর্তে</p>
            </div>
          </div>

          {/* Letter body */}
          <div className="letter-body fade-in-delay-2">
            <p>
              হয়তো আমাদের এখনো সামনাসামনি দেখা হয়নি। আমাদের পরিচয়টা শুরু হয়েছে
              অনলাইনে — কিছু কথোপকথনের মাধ্যমে। কিন্তু অদ্ভুতভাবে, সেই কথাগুলোই
              ধীরে ধীরে আমার কাছে অনেক গুরুত্বপূর্ণ হয়ে উঠেছে।
            </p>

            <p>
              তোমার সাথে কথা বলতে বলতে মনে হয়েছে, তুমি যেভাবে চিন্তা করো, যেভাবে
              কথা বলো — সেটা আমার কাছে অন্যরকম লেগেছে। ঠিক কী কারণে, সেটা হয়তো
              গুছিয়ে বলা কঠিন। কিন্তু একটা সময়ের পর থেকে টের পেলাম, তোমার কথা
              মনে আসছে।
            </p>

            <p>
              আমি জানি আমরা এখনো অনেকটা অচেনা। পরিচয়টা এখনও খুব গভীর নয়।
              কিন্তু সেটাই তো কারণ — তোমাকে আরো ভালো করে জানতে চাই। তোমার সাথে
              আরো কথা বলতে চাই, তোমাকে বুঝতে চাই।
            </p>

            <p>
              কোনো তাড়া নেই, কোনো চাপও নেই। শুধু মনে হলো, এই কথাটা মনের মধ্যে
              রেখে দেওয়াটা ঠিক হবে না। তাই সরাসরি জানালাম।
            </p>

            <p>
              তুমি যা-ই উত্তর দাও, আমি সেটাকে শ্রদ্ধা করব। কিন্তু একটু সুযোগ
              পেলে ভালো লাগত — একে অপরকে আরো জানার সুযোগ।
            </p>

            <p style={{ marginTop: "1.25rem", fontWeight: 600, color: "hsl(345,55%,50%)" }}>
              — তোমার একজন শুভাকাঙ্ক্ষী
            </p>
          </div>
        </div>

        {/* Continue button */}
        <div
          className="fade-in-delay-3"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
        >
          <button
            className="btn-secondary"
            onClick={onContinue}
            aria-label="আরেকটা কথা আছে"
          >
            আরেকটা কথা আছে...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
