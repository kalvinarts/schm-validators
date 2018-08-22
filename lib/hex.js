const hexRegx = /^[a-f0-9]+$/i;

const hex = constraints => prevSchema => prevSchema.merge({
  validators: {
    hex: value => ({
      valid: hexRegx.test(value),
      message: 'Valid characters are numbers and a b c d e f',
    }),
  },
});

module.exports = hex;
