import { createContext, useContext, useState } from "react";

const PageTransitionContext = createContext();

export function usePageTransitionContext() {
  return useContext(PageTransitionContext);
}

export function PageTransitionProvider({ children }) {
  const [pageTransition, setPageTransition] = useState({
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    transition: { duration: 0.6, ease: "easeInOut" },
  });

  const newPageTransition = (newPageTransition) => {
    setPageTransition(newPageTransition);
  };

  const value = {
    pageTransition,
    newPageTransition,
  };

  return (
    <PageTransitionContext.Provider value={value}>
      {children}
    </PageTransitionContext.Provider>
  );
}
