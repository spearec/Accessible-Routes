import * as React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../types/redux/state';
import { updateSelectedStart } from '../actions/options';
import { Label } from 'reactstrap';

export default function PathSelectComponent() {
    const dispatch = useDispatch();
    
    // TODO: initialize this into state
    // const buildingsState = useSelector((state: State) => state.buildings);
    const state = useSelector((state: State) => state)

    if(state.options.selectedStart == -1) {
        state.options.selectedStart = 0;
    }
    if(state.options.selectedDest == -1) {
        state.options.selectedDest = 0;
    }

    const buildingOptions = [
        { value: -1, label: 'Not Selected' },
        { value: 1, label: 'Troy Building'},
        { value: 2, label: 'Ricketts Building'},
        { value: 3, label: 'Russell Sage Laboratory'},
        { value: 4, label: 'Johnsson Rowland Science Center'},
        { value: 5, label: 'Amos Eaton'}
    ];
    return (
        <div>
            <Label for='startBuilding'>Select Start Building</Label>
            <Select
                id='startBuilding'
                name='startBuilding'
                options={buildingOptions}
                value={{ label: buildingOptions[state.options.selectedStart].label, value: buildingOptions[state.options.selectedStart].value }}
                onChange={newSelectedStart => {
                    if(newSelectedStart) {
                        dispatch(updateSelectedStart(newSelectedStart.value));
                    }
                }}
            />
            <Label for='destBuilding'>Select Destination Building</Label>
            <Select
                id='destBuilding'
                name='destBuilding'
                options={buildingOptions}
                value={{ label: buildingOptions[state.options.selectedDest].label, value: buildingOptions[state.options.selectedDest].value }}
                onChange={newSelectedDest => {
                    if(newSelectedDest) {
                        dispatch(updateSelectedStart(newSelectedDest.value));
                    }
                }}
            />
        </div>
    );
}