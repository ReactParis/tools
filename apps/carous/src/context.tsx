import React from "react";
import { useAsyncStorage } from "./hooks/useAsyncStorage";

export interface SlidesTheme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

export interface SlidesContextType {
  theme: SlidesTheme;
}

export const SlidesContext = React.createContext<SlidesContextType | null>(
  null,
);

export function useSlidesContext() {
  const context = React.useContext(SlidesContext);
  if (!context) {
    throw new Error("useSlidesContext must be used within a SlidesProvider");
  }
  return context;
}

const defaultTheme: SlidesTheme = {
  colors: {
    primary: "rgb(43,19,90)",
    secondary: "rgb(86,212,248)",
    tertiary: "rgb(245, 48, 236)",
  },
};

export function SlidesProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useAsyncStorage<SlidesTheme>("theme", defaultTheme);
  const value = React.useMemo(() => ({ theme }), [theme]);
  return (
    <SlidesContext.Provider value={value}>
      <div
        style={
          { "--s-color-primary": theme.colors.primary } as React.CSSProperties
        }
      >
        {children}
      </div>
    </SlidesContext.Provider>
  );
}
