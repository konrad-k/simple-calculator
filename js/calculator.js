class Calculator {
  constructor(options) {
    this.element = document.querySelector(options.element);
    this.a = '';
    this.b = '';
    this.operation = null;
    this.result = null;
    this.error = null;
    this.buttons = this.element.querySelectorAll('button');
    this.input = this.element.querySelector('input[type="text"]');
    this.output = this.element.querySelector('output');
    this.resultInput = this.element.querySelector('input[type="hidden"]');
    this.operations = { add: '+', subtract: '-', multiply: 'x', divide: '/' };
  }

  init() {
    this.buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        this.actionHandle(event.target);
      });
    });

    document.addEventListener('keydown', (event) => {
      const button = this.element.querySelector('button[aria-keyshortcuts="' + event.key + '"]');
      if (button) this.actionHandle(button);
    });
  }

  actionHandle(target) {
    if (typeof target.ariaKeyShortcuts === 'string' && target.ariaKeyShortcuts.length === 1 && this.operation === null) {
      this.a = Number(String(this.a) + target.ariaKeyShortcuts);
      this.renderA();
    }

    if (typeof target.dataset.operation !== 'undefined' && this.operation === null && this.a !== '') {
      this.operation = target.dataset.operation;
      this.renderOperation();
    }

    if (typeof target.dataset.operation !== 'undefined' && this.operation !== null && this.a !== '' && this.result !== null) {
      this.operation = target.dataset.operation;
      this.a = this.result;
      this.b = '';
      this.result = null;
      this.renderOperation();
    }

    if ((target.dataset.action === 'result' || target.ariaKeyShortcut === 'Enter') && this.operation !== null && this.a !== '' && this.result !== null) {
      this.a = this.result;
      this.count();
      this.renderB();
      this.renderResult();
    }

    if (typeof target.ariaKeyShortcuts === 'string' && isFinite(Number(target.ariaKeyShortcuts)) && this.operation !== null) {
      this.b = Number(String(this.b) + target.ariaKeyShortcuts);
      this.renderB();
    }

    if (target.dataset.action === 'result' && this.operation === 'divide' && this.a !== '' && this.b === 0) {
      this.error = "You can't divide by zero";
      this.renderError();
      return;
    }

    if (target.dataset.action === 'result' && this.operation !== null && this.a !== '' && this.b !== '' && this.result === null) {
      this.count();
      this.renderResult();
    }

    if (target.dataset.action === 'reset') {
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
    this.resultInput.value = '';
    this.renderResult();
    this.element.classList.remove('calculator--is-result');
  }

  getOperator() {
    return this.operations[this.operation];
  }

  renderA() {
    this.input.value = String(this.a);
  }

  renderB() {
    this.input.value = String(this.a) + ' ' +  this.getOperator() + ' ' + this.b;
  }

  renderOperation() {
    this.input.value = String(this.a) + ' ' +  this.getOperator();
  }

  renderResult() {
    this.element.classList.add('calculator--is-result');
    this.output.innerHTML = this.result;
    this.resultInput.value = this.result;
  }

  renderError() {
    this.output.innerHTML = this.error;
  }

}