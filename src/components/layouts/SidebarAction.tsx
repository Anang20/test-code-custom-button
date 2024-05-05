import React, { useContext } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GradientPicker } from "../custom/ColorPicker";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Icons } from "@/components/Icons";
import { iconItems } from "@/constants";
import AppContext from "@/AppContext";

const SidebarAction: React.FC = () => {
  const {
    label,
    background,
    size,
    isTooltip,
    tooltip,
    tooltipPosition,
    icon,
    iconPosition,
    handleChangeLabel,
    handleChangeBackground,
    handleChangeSize,
    handleChangeIsTooltip,
    handleChangeTooltip,
    handleChangeTooltipPosition,
    handleChangeIcon,
    handleChangeIconPosition,
  } = useContext(AppContext);

  return (
    <nav className="space-y-5 max-w-64 md:max-w-56">
      <div className="space-y-2">
        <Label>Label</Label>
        <Input value={label} onChange={handleChangeLabel} />
      </div>
      <div className="space-y-2">
        <Label>Background Color</Label>
        <GradientPicker
          className="w-full truncate"
          background={background}
          setBackground={handleChangeBackground}
        />
      </div>
      <div className="space-y-2">
        <Label>Size</Label>
        {/* @ts-ignore */}
        <Tabs value={size} onValueChange={handleChangeSize}>
          <TabsList className="w-full">
            <TabsTrigger value="small">Small</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="large">Large</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="space-y-2">
        <Label>Visible Tooltip</Label>
        <div className="flex items-center gap-3">
          <Switch
            checked={isTooltip}
            onCheckedChange={handleChangeIsTooltip}
            id="show-tooltip"
          />
          <Label htmlFor="show-tooltip">{isTooltip ? "Hide" : "Show"}</Label>
        </div>
      </div>
      {isTooltip && (
        <>
          <div className="space-y-2">
            <Label>Tooltip</Label>
            <Input
              placeholder="Masukkan tooltip"
              value={tooltip}
              onChange={handleChangeTooltip}
            />
          </div>
          <div className="space-y-2">
            <Label>Tooltip Position</Label>
            {/* @ts-ignore */}
            <Tabs value={tooltipPosition} onValueChange={handleChangeTooltipPosition}>
              <TabsList className="w-full">
                <TabsTrigger value="top">Top</TabsTrigger>
                <TabsTrigger value="right">Right</TabsTrigger>
                <TabsTrigger value="bottom">Bottom</TabsTrigger>
                <TabsTrigger value="left">Left</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </>
      )}
      <div className="space-y-2">
        <Label>Icon Position</Label>
        {/* @ts-ignore */}
        <Tabs value={iconPosition} onValueChange={handleChangeIconPosition}>
          <TabsList className="w-full">
            <TabsTrigger value="left">Left</TabsTrigger>
            <TabsTrigger value="right">Right</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="space-y-2">
        <Label>Icon</Label>
        <ToggleGroup
          type="single"
          size="sm"
          value={icon}
          onValueChange={handleChangeIcon}
        >
          <div className="grid grid-cols-4 w-full gap-2">
            {iconItems?.map((item: any, key: number) => {
              {/* @ts-ignore */}
              const Icon = Icons[item];
              return (
                <ToggleGroupItem key={key} value={item}>
                  <Icon className="mr-2 h-4 w-4" />
                </ToggleGroupItem>
              );
            })}
          </div>
        </ToggleGroup>
      </div>
    </nav>
  );
};

export default SidebarAction;
