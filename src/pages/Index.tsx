import { useState, useCallback, useRef } from "react";
import BackgroundParticles from "@/components/features/BackgroundParticles";
import Page1 from "@/components/features/Page1";
import Page2 from "@/components/features/Page2";
import Page3 from "@/components/features/Page3";
import Page4 from "@/components/features/Page4";
import Page5 from "@/components/features/Page5";
import NoState from "@/components/features/NoState";

type PageId = "page1" | "page2" | "page3" | "page4" | "page5" | "no-state";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<PageId>("page1");
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const transitionTo = useCallback((nextPage: PageId) => {
    if (transitioning) return;
    setTransitioning(true);

    const el = containerRef.current;
    if (el) {
      el.classList.add("page-exit");
    }

    setTimeout(() => {
      setCurrentPage(nextPage);
      setTransitioning(false);

      if (el) {
        el.classList.remove("page-exit");
        el.classList.add("page-enter");
        setTimeout(() => el.classList.remove("page-enter"), 600);
      }
      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 320);
  }, [transitioning]);

  const renderPage = () => {
    switch (currentPage) {
      case "page1":
        return <Page1 onContinue={() => transitionTo("page2")} />;
      case "page2":
        return <Page2 onContinue={() => transitionTo("page3")} />;
      case "page3":
        return <Page3 onContinue={() => transitionTo("page4")} />;
      case "page4":
        return (
          <Page4
            onYes={() => transitionTo("page5")}
            onNo={() => transitionTo("no-state")}
          />
        );
      case "page5":
        return <Page5 onRestart={() => transitionTo("page1")} />;
      case "no-state":
        return <NoState onRestart={() => transitionTo("page1")} />;
      default:
        return <Page1 onContinue={() => transitionTo("page2")} />;
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100dvh" }}>
      {/* Ambient background particles */}
      <BackgroundParticles />

      {/* Page content */}
      <div ref={containerRef} style={{ position: "relative", zIndex: 5 }}>
        {renderPage()}
      </div>
    </div>
  );
};

export default Index;
