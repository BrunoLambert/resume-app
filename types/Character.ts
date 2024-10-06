export enum ChracterSpeed {
    WALKING = 10,
    RUNNING = 20
}

export type CharacterType = 'mage' | 'knight' | 'rogue';
export enum CharacterClass {
    MAGE = 'mage',
    KNIGHT = 'knight',
    ROUGUE = 'rogue'
}

export interface CharacterPosition {
    x: number,
    y: number
}

export interface CharacterComponentProps {
    state: CharacterStateType
    onlyDisplay?: boolean
}

export interface CharacterStateType {
    position: CharacterPosition,
    direction: string | null,
    walking: boolean,
    running: boolean,
    attack: boolean,
    pushing: boolean,
}

// Functions

export const generateEmptyCharacterState = (): CharacterStateType => ({
    direction: null,
    walking: false,
    running: false,
    attack: false,
    pushing: false,
    position: {
        x: 0,
        y: 0
    }
})