
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