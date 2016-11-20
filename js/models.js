'use strict';

const ACCELERATION_MULTIPLIER = .9,
      POWER_CONVERSION = {
          'hp': 1,
          'ps': 0.9863,
          'kw': 1.341
      },
      WEIGHT_CONVERSION = {
          'kg': 2.2046,
          'lbs': 1
      },
      DRIVE_TYPE_MULTIPLIER = {
          'fwd': 1.07,
          'rwd': 0.93,
          'awd': 1.17
      },
      TRANSMISSION_MULTIPLIER = {
          'man': 1.1,
          'auto': 0.925
      };

class AccelerationModel {
    constructor() {
        this.power = 0;
        this.weight = 0;
    }

    calculate(params) {
        this.power = params.power * POWER_CONVERSION[params.powerType];
        this.weight = params.weight * WEIGHT_CONVERSION[params.weightType];
       
        return Math.pow(this.weight / this.power *
                        DRIVE_TYPE_MULTIPLIER[params.driveType] *
                        TRANSMISSION_MULTIPLIER[params.tranmissionType] *
                        ACCELERATION_MULTIPLIER, .75);
    }
}