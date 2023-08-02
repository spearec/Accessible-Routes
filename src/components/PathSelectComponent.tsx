import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { State } from '../types/redux/state';
import { updateSelectedStart } from '../actions/options';

export default function PathSelectComponent() {
    const dispatch = useDispatch();
    
    // TODO: initialize this into state
    // const buildingsState = useSelector((state: State) => state.buildings);
    const state = useSelector((state: State) => state);

    const buildingOptions = [
        { value: 1, label: 'Troy Building'},
        { value: 2, label: 'Ricketts Building'},
        { value: 3, label: 'Russell Sage Laboratory'},
        { value: 4, label: 'Johnsson Rowland Science Center'},
        { value: 5, label: 'Amos Eaton'}
    ];
    return (
        <div>
            <Select
                options={buildingOptions}
                value={{ label: buildingOptions[state.options.selectedStart].label, value: buildingOptions[state.options.selectedStart].value }}
                onChange={newSelectedStart => {
                    if(newSelectedStart) {
                        dispatch(updateSelectedStart(newSelectedStart.value));
                    }
                }}
            />
        </div>
    );
}