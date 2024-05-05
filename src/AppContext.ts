import React, { createContext } from 'react';
import { IconPositionType, SizeType, TooltipPositionType } from '@/types';

const AppContext = createContext({
    label: "",
    // @ts-ignore
    handleChangeLabel: (event: React.ChangeEvent<HTMLInputElement>) => {},
    background: "",
    // @ts-ignore
    handleChangeBackground: (val: string) => {},
    size: "",
    // @ts-ignore
    handleChangeSize: (val: SizeType) => { },
    isTooltip: false,
    // @ts-ignore
    handleChangeIsTooltip: (val: boolean) => {},
    tooltip: "",
    // @ts-ignore
    handleChangeTooltip: (event: React.ChangeEvent<HTMLInputElement>) => { },
    tooltipPosition: "",
    // @ts-ignore
    handleChangeTooltipPosition: (val: TooltipPositionType) => { },
    icon: "",
    // @ts-ignore
    handleChangeIcon: (val: string) => { },
    iconPosition: "",
    // @ts-ignore
    handleChangeIconPosition: (val: IconPositionType) => {}
});

export default AppContext;