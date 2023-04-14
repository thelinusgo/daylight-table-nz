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