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
        let _ = this.dom;
        _.submit.addEventListener('click', () => {
            _.result.innerHTML = handler(_.powerInput.value,
                                                 _.powerType.options[_.powerType.options.selectedIndex].value,
                                                  _.weightInput.value,
                                                   _.weightType.options[_.weightType.options.selectedIndex].value,
                                                    _.driveType.options[_.driveType.options.selectedIndex].value,
                                                     _.transmissionType.options[_.transmissionType.options.selectedIndex].value);
        });
    }
}