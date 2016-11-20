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

        this.view.addRenderResultHandler((params) => {
            return this.model.calculate(params);
        });
    }
}