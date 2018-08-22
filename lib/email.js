const emailRegx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const email = constraints => prevSchema => prevSchema.merge({
  validators: {
    email: value => ({
      valid: emailRegx.test(value),
      message: 'Not a valid email',
    }),
  },
});

module.exports = email;
