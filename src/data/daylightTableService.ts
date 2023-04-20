// Daylight tables
export interface DaylightRange {
    Date: string,
    MorningCivilTwilight: string,
    EveningCivilTwilight: string
}

export interface DaylightRangeZones {
    DaylightRanges: DaylightRange[]
}

export interface IDaylightTableService {
    retrieveDaylightRangeGivenDate(date: string): Promise<DaylightRange>
    retrieveEntireDaylightTable(): Promise<DaylightRangeZones>
}

export class DaylightTableService implements IDaylightTableService {
    async retrieveEntireDaylightTable(): Promise<DaylightRangeZones> {
        const response = await fetch('daylight_tables.json');
        const jsonData = await response.text();
        const parsedData: DaylightRangeZones = JSON.parse(jsonData);
        return parsedData;
    }
    async retrieveDaylightRangeGivenDate(date: string): Promise<DaylightRange> {
        throw new Error("Method not implemented.")
    }
}