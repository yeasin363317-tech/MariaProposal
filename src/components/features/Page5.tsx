import { useEffect, useRef } from "react";
import MariaPortrait from "@/components/features/MariaPortrait";

interface Page5Props {
  onRestart: () => void;
}

const HEART_CHARS = ["❤️", "🩷", "💕", "✨", "💗", "🌸"];

const Page5 = ({ onRestart }: Page5Props) => {
  const heartsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const container = heartsRef.current;
    if (!container) return;

    let count = 0;
    const MAX = 30;

    const spawnHeart = () => {
      if (count >= MAX) return;
      count++;

      const el = document.createElement("span");
      el.className = "floating-heart";
      el.textContent = HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)];
      el.style.left = `${Math.random() * 90 + 5}%`;
      el.style.fontSize = `${Math.random() * 14 + 10}px`;
      const duration = Math.random() * 3 + 3.5;
      el.style.animationDuration = `${duration}s`;
      el.style.animationDelay = `${Math.random() * 0.5}s`;
      container.appendChild(el);

      setTimeout(() => {
        el.remove();
        count--;
      }, (duration + 0.6) * 1000);
    };

    // Initial burst
    for (let i = 0; i < 12; i++) {
      setTimeout(spawnHeart, i * 150);
    }

    // Continuous trickle
    intervalRef.current = setInterval(spawnHeart, 600);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="page-wrapper bg-mesh">
      <div className="blob-1" aria-hidden="true" />
      <div className="blob-2" aria-hidden="true" />

      {/* Floating hearts layer */}
      <div ref={heartsRef} className="hearts-container" aria-hidden="true" />

      {/* Celebration glow overlay */}
      <div className="celebration-overlay" aria-hidden="true" />

      <div className="page-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Badge */}
        <div className="fade-in" style={{ textAlign: "center" }}>
          <span className="badge-label" style={{ color: "hsl(345,60%,52%)" }}>
            ❤️ Thank You
          </span>
        </div>

        {/* Celebration portrait */}
        <div className="fade-in-delay-1 flex justify-center">
          <MariaPortrait variant="celebration" />
        </div>

        {/* Main heading */}
        <div className="fade-in-delay-2" style={{ width: "100%", textAlign: "center" }}>
          <h1
            className="heading-hero"
            style={{
              background: "linear-gradient(135deg, hsl(345,65%,55%), hsl(340,60%,65%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "0.5rem",
            }}
          >
            Thank You, Maria ❤️
          </h1>
        </div>

        <div className="divider-rose fade-in-delay-2" />

        {/* Final message */}
        <div
          className="glass-card fade-in-delay-3"
          style={{ padding: "1.75rem 1.5rem", width: "100%" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <p className="final-message">
              তোমার এই উত্তরটা আমার কাছে অনেক বড় কিছু। ছোট্ট একটা "হ্যাঁ", কিন্তু
              এই মুহূর্তে এটাই যথেষ্ট।
            </p>

            <p className="final-message">
              আমি চাই না কোনো কিছু তাড়াহুড়ো করে হোক। একে অপরকে জানতে সময় লাগে,
              এবং সেই সময়টা নেওয়াই উচিত। কথা বলতে বলতে, বুঝতে বুঝতে — এভাবেই
              এগোতে চাই।
            </p>

            <p className="final-message">
              তোমার উপর কোনো চাপ নেই। বিশ্বাস এবং সম্মান — এই দুটোই আমার কাছে
              সবচেয়ে জরুরি। যা কিছু হোক, সেটা যেন স্বাভাবিকভাবেই হয়।
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p className="final-tagline fade-in-delay-4">
          তাহলে গল্পটা এখান থেকেই শুরু হোক। ❤️
        </p>

        {/* Restart */}
        <div className="fade-in-delay-4">
          <button
            className="btn-secondary"
            onClick={onRestart}
            style={{ fontSize: "0.85rem" }}
            aria-label="আবার শুরু থেকে"
          >
            আবার শুরু থেকে
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page5;
