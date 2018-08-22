const alphanumericRegx = /^[a-z0-9\.\-_]+$/i;

const alphanumeric = constraints => prevSchema => prevSchema.merge({
  validators: {
    alphanumericRegx: value => ({
      valid: alphanumeric.test(value),
      message: 'Only alphanumeric characters allowed',
    }),
  },
});

module.exports = alphanumeric;
