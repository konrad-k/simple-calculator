class Calculator {
  constructor(options= {element: '.calculator'}) {
    this.element = document.querySelector(options.element);
    this.a = '';
    this.b = '';
    this.operation = null;
    this.result = null;
    this.error = null;
    this.buttons = this.element.querySelectorAll('button');
    this.operations = { add: '+', subtract: '-', multiply: 'x', divide: '÷' };
  }

  init() {
    this.buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        this.actionHandle(event.target.dataset);
      });
    });
  }

  actionHandle(dataset) {
    if (typeof dataset.number !== 'undefined' && this.operation === null) {
        this.a = Number(String(this.a) + dataset.number);
        this.renderA();
      }

      if (typeof dataset.operation !== 'undefined' && this.operation === null && this.a !== '') {
        this.operation = dataset.operation;
        this.renderOperation();
      }

      if (typeof dataset.operation !== 'undefined' && this.operation !== null && this.a !== '' && this.result !== null) {
        this.operation = dataset.operation;
        this.a = this.result;
        this.b = '';
        this.result = null;
        this.renderOperation();
      }

      if (dataset.action === 'result' && this.operation !== null && this.a !== '' && this.result !== null) {
        this.a = this.result;
        this.count();
        this.renderB();
        this.renderResult();
      }

      if (typeof dataset.number !== 'undefined' && this.operation !== null) {
        this.b = Number(String(this.b) + dataset.number);
        this.renderB();
      }

      if (dataset.action === 'result' && this.operation === 'divide' && this.a !== '' && this.b === 0) {
        this.error = "You can't divide by zero";
        this.renderError();
        return;
      }

      if (dataset.action === 'result' && this.operation !== null && this.a !== '' && this.b !== '' && this.result === null) {
        this.count();
        this.renderResult();
      }

      if (dataset.action === 'reset') {
        this.reset();
      }
  }

  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }

  count() {
    if (isFinite(this.a) && isFinite(this.b))
      this.result = this[this.operation](this.a, this.b);
    else {
      this.error = 'Error';
      this.renderError();
    }
  }

  reset() {
    this.a = '';
    this.b = '';
    this.operation = null;
    this.result = null;
    this.error = null;
    this.renderResult();
  }

  renderA() {
    this.element.querySelector('input').value = String(this.a);
  }

  renderB() {
    this.element.querySelector('input').value = String(this.a) + ' ' + this.operations[this.operation] + ' ' + this.b;
  }

  renderOperation() {
    this.element.querySelector('input').value = String(this.a) + ' ' + this.operations[this.operation];
  }

  renderResult() {
    this.element.querySelector('output').innerHTML = this.result;
  }

  renderError() {
    this.element.querySelector('output').innerHTML = this.error;
  }

}