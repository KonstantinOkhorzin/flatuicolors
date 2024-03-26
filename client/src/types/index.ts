export interface IPalette {
  _id: string;
  paletteName: string;
  emoji: string;
  colors: IColor[];
}

export interface IColor {
  name: string;
  color: string;
  _id: string;
}

export enum Status {
  IDLE = 'idle',
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}
