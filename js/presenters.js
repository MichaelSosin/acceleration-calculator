'use strict';

class Presenter {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }
}

class AccelerationPresenter extends Presenter {
    constructor() {
        super(new AccelerationView(), new AccelerationModel());

        this.view.addRenderResultHandler((power, powerType, weight, weightType, driveType, transmissionType) => {
            return this.model.calculate(power, powerType, weight, weightType, driveType, transmissionType);
        });
    }
}