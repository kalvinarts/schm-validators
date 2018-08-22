const alphanumericRegx = /^[a-z0-9\.\-_]+$/i;

const alphanumeric = constraints => prevSchema => prevSchema.merge({
  validators: {
    alphanumeric: value => ({
      valid: alphanumericRegx.test(value),
      message: 'Only alphanumeric characters allowed',
    }),
  },
});

module.exports = alphanumeric;
