import { ActionType } from "./actions";

export type OptionsAction = UpdateSelectedStartAction | UpdateSelectedDestAction;

export interface UpdateSelectedStartAction {
    type: ActionType.UpdateSelectedStart;
    buildingID: number;
}

export interface UpdateSelectedDestAction {
    type: ActionType.UpdateSelectedDest;
    buildingID: number;
}

export interface OptionsState {
    selectedStart: number,
    selectedDest: number
}