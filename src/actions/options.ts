import { ActionType } from "../types/redux/actions";
import * as t from '../types/redux/options';

export function updateSelectedStart(buildingID: number): t.UpdateSelectedStartAction {
    return { type: ActionType.UpdateSelectedStart, buildingID };
}

export function updateSelectedDest(buildingID: number): t.UpdateSelectedDestAction {
    return { type: ActionType.UpdateSelectedDest, buildingID };
}