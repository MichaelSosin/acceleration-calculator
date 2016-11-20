'use strict';

class AccelerationView {
    constructor() {
        this.dom = {
           powerInput: document.getElementsByClassName('power-input')[0],
           powerType: document.getElementById('power-type'),
           weightInput: document.getElementsByClassName('weight-input')[0], 
           weightType: document.getElementById('weight-type'),            
           driveType: document.getElementById('drive-type'),            
           transmissionType: document.getElementById('transmission-type'),
           submit: document.getElementsByClassName('submit')[0],
           result: document.getElementsByClassName('result')[0]            
        };
    }

    addRenderResultHandler(handler) {
        this.dom.submit.addEventListener('click', () => {
            let params = {
                power: this.dom.powerInput.value,
                powerType: this.dom.powerType.options[this.dom.powerType.options.selectedIndex].value,
                weight: this.dom.weightInput.value,
                weightType: this.dom.weightType.options[this.dom.weightType.options.selectedIndex].value,
                driveType: this.dom.driveType.options[this.dom.driveType.options.selectedIndex].value,
                tranmissionType: this.dom.transmissionType.options[this.dom.transmissionType.options.selectedIndex].value
            };

            if(params.power && params.weight) {
                this.dom.result.innerHTML = handler(params);
            } else {
                this.dom.result.innerHTML = 'Type in all data, please';                
            }
        });
    }
}