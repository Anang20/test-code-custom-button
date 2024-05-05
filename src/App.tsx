import { useState } from "react";
import "./App.css";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import Button from "@/components/custom/Button";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";
import AppContext from "@/AppContext";
import { IconPositionType, SizeType, TooltipPositionType } from "@/types";

function App() {
  const [label, setLabel] = useState("Klik");
  const [background, setBackground] = useState("red");
  const [size, setSize] = useState<SizeType>("small");
  const [isTooltip, setIsTooltip] = useState(false);
  const [tooltip, setTooltip] = useState(label);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPositionType>("top");
  const [icon, setIcon] = useState("");
  const [iconPosition, setIconPosition] = useState<IconPositionType>("left");

  const handleChangeLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  const handleChangeBackground = (value: string) => {
    setBackground(value);
  };

  const handleChangeSize = (value: SizeType) => {
    setSize(value);
  };
  
  const handleChangeIsTooltip = (value: boolean) => {
    setIsTooltip(value);
  };

  const handleChangeTooltip = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTooltip(event.target.value);
  };

  const handleChangeTooltipPosition = (value: TooltipPositionType) => {
    setTooltipPosition(value);
  };

  const handleChangeIcon = (value: string) => {
    setIcon(value);
  };

  const handleChangeIconPosition = (value: "left" | "right") => {
    setIconPosition(value);
  };

  const handleClick = () => {
    toast({
      title: label,
      description: `tooltip: ${tooltip}`,
    })
  }

  return (
    <AppContext.Provider
      value={{
        label,
        handleChangeLabel,
        background,
        handleChangeBackground,
        size,
        handleChangeSize,
        isTooltip,
        handleChangeIsTooltip,
        tooltip,
        handleChangeTooltip,
        tooltipPosition,
        handleChangeTooltipPosition,
        icon,
        handleChangeIcon,
        iconPosition,
        handleChangeIconPosition
      }}
    >
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar/>
        <main className="w-full flex justify-center items-center">
          <Button
            style={{ background }}
            label={label}
            size={size}
            isTooltip={isTooltip}
            tooltip={tooltip}
            tooltipPosition={tooltipPosition}
            icon={icon}
            iconPosition={iconPosition}
            onClick={handleClick}
          />
        </main>
        <Toaster />
      </div>
    </AppContext.Provider>
  );
}

export default App;
