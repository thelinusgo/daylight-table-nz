import React from 'react';
import '../App.css';
import { IDaylightTableService } from '../data/daylightTableService';

interface DayLightTableInputProps {
    daylightService: IDaylightTableService;
}

export const DaylightTableInputComponent: React.FC<DayLightTableInputProps> = ({ daylightService }) => {
    const handleTableLookup = () => {
        const results = daylightService.retrieveEntireDaylightTable();
        console.log({results});
    };

    return (
    <div>
        <button onClick={handleTableLookup}>View all items in daylight table</button>
    </div>
    );
};

export default DaylightTableInputComponent;
