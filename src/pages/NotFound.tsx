import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "hsl(14,40%,97%)",
        fontFamily: "'Noto Sans Bengali', sans-serif",
      }}
    >
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌸</p>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "hsl(220,20%,25%)", marginBottom: "0.5rem" }}>
          পৃষ্ঠাটি পাওয়া যায়নি
        </h1>
        <p style={{ color: "hsl(220,12%,55%)", marginBottom: "1.5rem" }}>
          এই পথে কিছু নেই।
        </p>
        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "0.75rem 2rem",
            background: "linear-gradient(135deg, hsl(345,65%,68%), hsl(340,60%,60%))",
            color: "white",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
          }}
        >
          শুরুতে ফিরে যাও
        </a>
      </div>
    </div>
  );
};

export default NotFound;
