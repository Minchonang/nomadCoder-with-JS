function clog (log) {
   console.log (log);
}

const calculator = {
   plus: function (a, b) {
      clog (a + b);
   },
   sub: function (a, b) {
      clog (a - b);
   },
   powerOf: function (a, b) {
      clog (a ** b);
   },
   divide: function (a, b) {
      clog (a / b);
   },
};

calculator.plus (2, 5);
calculator.sub (4, 2);
calculator.powerOf (2, 10);
calculator.divide (100, 2);



