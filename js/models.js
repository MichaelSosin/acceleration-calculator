'use strict';

const ACCELERATION_MULTIPLIER = .9;

class AccelerationModel {
    constructor() {
        this.power = 0;
        this.weight = 0;
        this.driveTypeMultiplier = 0;
        this.transmissionMultiplier = 0;
    }

    calculate(power, powerType, weight, weightType, driveType, tranmissionType) {
        this.power = power;
        this.weight = weight;

        this._convertPower(powerType);
        this._convertWeight(weightType);
        this._convertDriveType(driveType);
        this._convertTransmissionType(tranmissionType);

        return Math.pow(this.weight / this.power * this.driveTypeMultiplier * this.transmissionMultiplier * ACCELERATION_MULTIPLIER, .75);
    }

    _convertPower(type) {
        switch(type.toLowerCase()) {
        case 'ps':
            this.power *= .9863;
            break;
        case 'kw':
            this.power *= 1.341;
            break;
        case 'hp':
        default:
            this.power *= 1;
        }
    }

    _convertDriveType(type) {
        switch(type.toLowerCase()) {
        case 'fwd':
            this.driveTypeMultiplier = 1.07;
            break;
        case 'rwd':
            this.driveTypeMultiplier = .93;
            break;
        case 'awd':
            this.driveTypeMultiplier = 1.17;
            break;
        default:
            this.driveTypeMultiplier = 1.07;            
        }
    }

    _convertTransmissionType(type) {
        switch(type.toLowerCase()) {
        case 'man':
            this.transmissionMultiplier = 1.1;
            break;
        case 'auto':
            this.transmissionMultiplier = 0.925;
            break;
        default:
            this.transmissionMultiplier = 1.1;
        }
    }
    
    _convertWeight(type) {
        switch(type.toLowerCase()) {
        case 'lbs':
            this.weight *= 1;
            break;
        case 'kilo':
            this.weight *= 2.2046
            break;
        default: 
            this.weight *= 1;        
        }
    }
}