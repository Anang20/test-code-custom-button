import React, { createContext } from 'react';
import { IconPositionType, SizeType, TooltipPositionType } from '@/types';

const AppContext = createContext({
    label: "",
    handleChangeLabel: (event: React.ChangeEvent<HTMLInputElement>) => {},
    background: "",
    handleChangeBackground: (val: string) => {},
    size: "",
    handleChangeSize: (val: SizeType) => { },
    isTooltip: false,
    handleChangeIsTooltip: (val: boolean) => {},
    tooltip: "",
    handleChangeTooltip: (event: React.ChangeEvent<HTMLInputElement>) => { },
    tooltipPosition: "",
    handleChangeTooltipPosition: (val: TooltipPositionType) => { },
    icon: "",
    handleChangeIcon: (val: string) => { },
    iconPosition: "",
    handleChangeIconPosition: (val: IconPositionType) => {}
});

export default AppContext;