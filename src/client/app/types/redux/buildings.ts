import { UpdateSelectedStartAction } from "./options";

export type BuildingsAction = UpdateSelectedStartAction;

export interface BuildingData {
    id: number,
    name: string,
    location: [number, number]
}

export interface BuildingDataById {
    [buildingID: number]: BuildingData;
}

export interface BuildingsState {
    byBuildingId: BuildingDataById;
}