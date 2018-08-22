const alphanumericExtraRegx = /^[a-z0-9\.\-_]+$/i;

const alphanumericExtra = constraints => prevSchema => prevSchema.merge({
  validators: {
    alphanumericExtra: value => ({
      valid: alphanumericExtraRegx.test(value),
      message: 'Only alphanumeric characters and . - _ allowed',
    }),
  },
});

module.exports = alphanumericExtra;
