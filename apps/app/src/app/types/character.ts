export enum AllegienceType {
  Sith = 'Sith',
  Jedi = 'Jedi',
}

export enum SaberType {
  Red = 'Red',
  Blue = 'Blue',
  Green = 'Green',
  Black = 'Black',
  Purple = 'Purple',
}

export interface Character {
  id: number;
  name: string;
  allegeance: AllegienceType;
  lightSaber: SaberType;
}
