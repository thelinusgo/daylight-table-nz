// Daylight tables
export interface DaylightRange {
    Date: string,
    MorningCivilTwilight: string,
    EveningCivilTwilight: string
}

export interface Zone {
    DaylightRanges: DaylightRange[]
}

export interface DaylightTable {
    Zones: Zone[]
}

export interface IDaylightTableService {
    retrieveDaylightRangeGivenDate(date: string): Promise<DaylightRange>
    retrieveAllDaylightRangesGivenZone(zone: Zone): Promise<DaylightRange[]>
    retrieveEntireDaylightTable(): Promise<Zone>
}

export class DaylightTableService implements IDaylightTableService {
    async retrieveEntireDaylightTable(): Promise<Zone> {
        throw new Error("Method not implemented.")
    }
    async retrieveDaylightRangeGivenDate(date: string): Promise<DaylightRange> {
        throw new Error("Method not implemented.")
    }
    async retrieveAllDaylightRangesGivenZone(zone: Zone): Promise<DaylightRange[]> {
        throw new Error("Method not implemented.")
    }

}