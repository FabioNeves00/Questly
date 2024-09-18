import { isCuid } from "@paralleldrive/cuid2";
import { registerDecorator } from "class-validator";

export function IsCuid2() {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: "isCuid2",
      target: object.constructor,
      propertyName,
      options: { message: "Invalid cuid" },
      validator: {
        validate(value: string) {
          return isCuid(value);
        },
      },
    });
  };
}
