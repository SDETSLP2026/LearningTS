import { Car } from "./T12_Inheritance_Car.js";

export class BMW extends Car
{
    autoGearShift()
    {
        console.log("BMW Class ->This car has auto gear shift method.");   
    }

    override price():void{
        console.log("BMW Class -> price method -> 50L");
    }
}