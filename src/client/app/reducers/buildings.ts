import { BuildingsAction } from "../types/redux/buildings";

const defaultState = {
    byBuildingId: {}
}

export default function buildings(state = defaultState, action: BuildingsAction) {
    return state;
}