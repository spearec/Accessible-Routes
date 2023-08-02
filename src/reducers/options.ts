import { ActionType } from "../types/redux/actions";
import { OptionsAction, OptionsState } from "../types/redux/options";

const defaultState: OptionsState = {
    selectedStart: -1,
    selectedDest: -1
};

export default function options(state = defaultState, action: OptionsAction) {
    switch(action.type) {
        case ActionType.UpdateSelectedStart:
            return {
                ...state,
                selectedStart: action.buildingID
            };
        case ActionType.UpdateSelectedDest:
            return {
                ...state,
                selectedDest: action.buildingID
            }
        default:
            return state;
    }
}