'use strict';

import './view.html';

class SpinnerClab extends Polymer.Element {
        
  static get is() { return 'spinner-clab'; }

  static get properties() {
    return {
      dark: {
        type: Boolean,
        value: false
      },
      big: {
        type: Boolean,
        value: false
      },
      background: {
        type: String,
        value: '240, 240, 240, 0.9'
      },
      visible: {
        type: Boolean,
        value: false,
      }
    }
  }



  /*----------
  COMPUTED
  ----------*/
  _computeClass(big, dark) {
    let str = 'spinner-overlay ';
    this.dark ? str += ' dark ' : null;
    this.big ? str += ' big ' : null;
    return str;
  }

  _computeBgColor(color) {
    return 'background-color: rgba(' + color + ')';
  }

}

customElements.define(SpinnerClab.is, SpinnerClab);