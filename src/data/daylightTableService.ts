import daylightTables from "./daylight_tables.json";

// Daylight tables
export interface DaylightRange {
    Date: string, // Date, represented in MM-DD (year omitted)
    MCT: string, // Morning Civil Twilight (when the sun rises above the horizon)
    ECT: string // Evening Civil Twilight (when the sun sets 6 degrees below the horizon)
}

export interface DaylightRangeZones {
    Zone: string // Value of what Daylight Zone this group can belong to. Can be Zone 1 to Zone 8.
    DaylightRanges: DaylightRange[] // Array of all the daylight range objects.
}

export interface IDaylightTableService {

    // 
    retrieveDaylightRangeGivenDate(date: string): Promise<DaylightRange>
    retrieveEntireDaylightTable(): Promise<DaylightRangeZones>
}

export class DaylightTableService implements IDaylightTableService {
    async retrieveEntireDaylightTable(): Promise<DaylightRangeZones> {
        const daylightRange: DaylightRangeZones = {
            Zone: daylightTables[0].Zone,
            DaylightRanges: daylightTables[0].DaylightRanges
        }
        
        console.log({daylightRange});
        return daylightRange;
    }
    async retrieveDaylightRangeGivenDate(date: string): Promise<DaylightRange> {
        throw new Error("Method not implemented.")
    }
}