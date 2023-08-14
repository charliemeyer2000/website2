import { createContext, useContext, useState } from "react";

const SoundContext = createContext();

export function useSoundContext() {
  return useContext(SoundContext);
}

export function SoundProvider({ children }) {
  const [soundOn, setSoundOn] = useState(true);

  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  const value = {
    soundOn,
    toggleSound,
  };

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}
