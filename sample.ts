/*
 * Test issue for class-transformer/ts-jest
*/

import "reflect-metadata";
import { plainToClass, Type } from "class-transformer";

export class Weapon {
  constructor(public model: string,
    public range: number) {
  }
}

export class User {
  public id: number;
  public name: string;

  @Type(() => Weapon)
  public weapons: Map<string, Weapon>;
}

export const plainUser = {
  id: 1,
  name: "Max Pain",
  weapons: {
    firstWeapon: {
      model: "knife",
      range: 1,
    },
    secondWeapon: {
      model: "eagle",
      range: 200,
    },
    thirdWeapon: {
      model: "ak-47",
      range: 800,
    },
  },
};

const classedUser = plainToClass(User, plainUser);

console.log("classedUser is instance of User?", classedUser instanceof User);
console.log("classedUser.weapons is instance of Map?", classedUser.weapons instanceof Map);
console.log("classedUser.weapons is instance of Weapon?", classedUser.weapons instanceof Weapon);
