import { Sensor } from './sensor';

export class Room {
  constructor(
    public room: string,
    public sensors: Sensor[]
  ) { }
}
