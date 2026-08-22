import { SIonicons } from "@/components/ui/Icons";
import { Button } from "heroui-native/button";
import React from "react";
import { Uniwind, useUniwind } from "uniwind";

interface ThemeToggleProps {
  size?: "sm" | "md";
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  size = "sm",
  className = "",
}) => {
  const { theme } = useUniwind();
  const isDark = theme === "dark";

  const handleToggle = () => {
    Uniwind.setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      size={size}
      isIconOnly
      onPress={handleToggle}
      className={`w-10 h-10 rounded-full bg-surface border border-border items-center justify-center ${className}`}>
      <SIonicons
        name={isDark ? "sunny-outline" : "moon-outline"}
        size={18}
        colorClassName={isDark ? "accent-warning" : "accent-accent"}
      />
    </Button>
  );
};

export default ThemeToggle;
