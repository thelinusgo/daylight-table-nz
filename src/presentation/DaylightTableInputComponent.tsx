import React from 'react';
import '../App.css';
import { IDaylightTableService } from '../data/daylightTableService';

interface DayLightTableInputProps {
    daylightService: IDaylightTableService;
}

export const DaylightTableInputComponent: React.FC<DayLightTableInputProps> = ({ daylightService }) => {
    const handleEntireTableLookup = () => {
        const results = daylightService.retrieveEntireDaylightTable();
    };

    return (
    <div>
        <button onClick={handleEntireTableLookup}>View all daylight ranges in the daylight table!</button>
    </div>
    );
};

export default DaylightTableInputComponent;
