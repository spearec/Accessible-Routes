import { BuildingsState } from "./buildings";
import { OptionsState } from "./options";

export interface State {
    buildings: BuildingsState;
    options: OptionsState;
}