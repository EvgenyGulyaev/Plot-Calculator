const op = {
  '-': 1,
  '+': 1,
  '*': 2,
  '/': 2,
  '^': 3,
  // 'sqrt': 3, -> Memory
};

const operators = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
  '^': (x, y) => Math.pow(x, y),
  'sqrt': (x) => Math.sqrt(x),
};

Object.defineProperty(Array.prototype, 'flat', {
  value: function(depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
    }, []);
  }
});

class OPZ {
  constructor() {
    this.setInitialValue()
  }

  setInitialValue() {
    this.input = '';
    this.result = [];
    this.stack = [];
    this.isContinue = false;
    this.value = 0;
    this.mayHaveChar = false;
    this.mayChangeSign = true;
  }

  popHead() {
    const operand = this.stack.pop();
    this.result.push(operand);
  }

  getValue(str) {
    this.getOPZformat(str);
    this.getOpzValue();
    return this.value;
  }

  getOPZformat(str) {

    try {
      this.input = str.replace(/\s+/g, '');
      for (let i = 0; i < this.input.length; i++) {

        if (this.input[i] === '.') {
          this.mayChangeSign = false;
          this.result[this.result.length - 1] += this.input[i];
          this.isContinue = true;
          continue;
        }

        if(this.input[i] === 's') {
          this.stack.push(this.input[i]);
          continue;
        }

        if (['q', 'r', 't'].includes(this.input[i])) {
          this.stack[this.stack.length - 1] += this.input[i];
          continue;
        }

        if (Number.isInteger(+this.input[i])) {
          this.mayChangeSign = false;
          if (this.isContinue) {
            this.result[this.result.length - 1] += this.input[i];
            continue;
          }
          this.result.push(this.input[i]);
          this.isContinue = true;
          continue;
        }

        if (this.input[i] === ')') {
          this.mayChangeSign = false;
          while (this.stack[this.stack.length - 1] !== '(') {
            this.popHead();
          }
          this.stack.pop();
          continue;
        }

        if (this.mayChangeSign && this.input[i] === '-') {
          this.result.push(this.input[i]);
          this.isContinue = true;
          continue;
        }

        if (this.stack.length && this.input[i] !== '(') {
          while (op[this.stack[this.stack.length - 1]] >= op[this.input[i]]) {
            this.popHead();
          }
        }

        if (this.input[i] === '(' || Object.keys(op)
        .includes(this.input[i])) this.mayChangeSign = true;

        if (!Object.keys(op).includes(this.input[i]) && this.input[i] !== '(') {
          this.mayHaveChar = true;
          this.result.push(this.input[i]);
          continue;
        }

        this.stack.push(this.input[i]);
        this.isContinue = this.input[i] === '.';
      }

      this.result = [...this.result, ...this.stack.reverse()];
      this.stack = [];
      return [...this.result];
    }
    catch (e) {
      this.setInitialValue();
      return e;
    }

  }

  replaceVariable(arr = [], vars = {}) {
    const keys = Object.keys(vars);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = keys.includes(arr[i]) ? `${vars[arr[i]]}` : arr[i];
    }
    return arr;
  }

  getOpzValue(opzArr = [], vars = {}) {
    if (!opzArr.length) opzArr = this.result;
    this.result = [];
    if (Object.keys(vars).length) {
      opzArr = this.replaceVariable(opzArr, vars);
    }

    this.stack = [];
    const opKeys = Object.keys(operators);

    for (let i = 0; i < opzArr.length; i++) {
      if (opKeys.includes(opzArr[i])) {
        if (opzArr[i] !== 'sqrt') {
          let [y, x] = [this.stack.pop(), this.stack.pop()];
          this.stack.push(operators[opzArr[i]](x, y));
          continue;
        }
        let [x] = [this.stack.pop()];
        this.stack.push(operators[opzArr[i]](x));
        continue;
      }
      this.stack.push(parseFloat(opzArr[i]));
    }
    this.value = this.stack.pop();
    this.stack = [];
    return this.value;
  }
}

module.exports = new OPZ();