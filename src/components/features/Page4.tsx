import { useRef, useState } from "react";
import MariaPortrait from "@/components/features/MariaPortrait";

interface Page4Props {
  onYes: () => void;
  onNo: () => void;
}

const MAX_DODGES = 5;

const Page4 = ({ onYes, onNo }: Page4Props) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = () => {
    if (dodgeCount >= MAX_DODGES) {
      onNo();
      return;
    }

    const btn = noButtonRef.current;
    const container = containerRef.current;
    if (!btn || !container) return;

    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const safeMargin = 20;
    const maxX = containerRect.width - btnRect.width - safeMargin;
    const maxY = containerRect.height - btnRect.height - safeMargin;

    const randomX = Math.floor(Math.random() * maxX - maxX / 2);
    const randomY = Math.floor(Math.random() * maxY - maxY / 2);

    const clampedX = Math.max(-maxX / 2, Math.min(maxX / 2, randomX));
    const clampedY = Math.max(-100, Math.min(100, randomY));

    setIsMoving(true);
    setNoPos({ x: clampedX, y: clampedY });
    setDodgeCount((c) => c + 1);

    setTimeout(() => setIsMoving(false), 400);
  };

  const handleNoClick = () => {
    if (dodgeCount >= MAX_DODGES) {
      onNo();
    }
  };

  const handleNoInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    moveNoButton();
  };

  return (
    <div className="page-wrapper bg-mesh">
      <div className="blob-1" aria-hidden="true" />
      <div className="blob-2" aria-hidden="true" />

      <div
        ref={containerRef}
        className="page-container"
        style={{ position: "relative", zIndex: 10 }}
      >
        {/* Portrait */}
        <div className="fade-in flex justify-center">
          <MariaPortrait variant="proposal" />
        </div>

        {/* Heading card */}
        <div className="fade-in-delay-1 glass-card" style={{ padding: "1.75rem 1.5rem", width: "100%", textAlign: "center" }}>
          {/* Emotional declaration */}
          <p
            style={{
              fontFamily: "'Noto Sans Bengali', sans-serif",
              fontSize: "clamp(1.15rem, 5vw, 1.55rem)",
              fontWeight: 700,
              color: "hsl(345,60%,52%)",
              lineHeight: 1.5,
              marginBottom: "0.5rem",
              animation: "fadeIn 0.7s ease 0.3s both",
            }}
          >
            Maria, আমি তোমাকে ভালোবাসি। ❤️
          </p>

          <div className="divider-rose" style={{ marginBottom: "1rem", marginTop: "0.75rem" }} />

          {/* Proposal question */}
          <h2 className="heading-page" style={{ marginBottom: "1rem", fontSize: "clamp(1rem, 4.2vw, 1.3rem)" }}>
            তুমি কি আমাকে একটা সুযোগ দেবে?
          </h2>

          <p className="subtext">
            কোনো চাপ নেই।<br />
            শুধু আমার মনের কথাটা তোমাকে জানাতে চেয়েছি।<br />
            সিদ্ধান্তটা পুরোপুরি তোমার।
          </p>
        </div>

        {/* Buttons */}
        <div className="fade-in-delay-2 proposal-buttons">
          <button
            className="btn-yes btn-yes-pulse"
            onClick={onYes}
            aria-label="হ্যাঁ"
          >
            হ্যাঁ ❤️
          </button>

          <div style={{ position: "relative", display: "inline-flex" }}>
            <button
              ref={noButtonRef}
              className={`btn-no ${isMoving ? "moving" : ""}`}
              style={{
                transform: `translate(${noPos.x}px, ${noPos.y}px)`,
              }}
              onMouseEnter={dodgeCount < MAX_DODGES ? moveNoButton : undefined}
              onTouchStart={handleNoInteraction}
              onClick={handleNoClick}
              aria-label={dodgeCount >= MAX_DODGES ? "না" : "না (সরে যাচ্ছে)"}
            >
              না
            </button>
          </div>

          {dodgeCount > 0 && dodgeCount < MAX_DODGES && (
            <p
              style={{
                fontSize: "0.78rem",
                color: "hsla(345,50%,60%,0.8)",
                fontFamily: "'Noto Sans Bengali', sans-serif",
                textAlign: "center",
                marginTop: "0.25rem",
                animation: "fadeIn 0.3s ease",
              }}
            >
              {dodgeCount === 1 && "একটু ভাবো..."}
              {dodgeCount === 2 && "সত্যিই?"}
              {dodgeCount === 3 && "আরেকবার ভাবো না?"}
              {dodgeCount === 4 && "শেষবারের মতো..."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page4;
