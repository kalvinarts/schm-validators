# VALIDATORS

## Collection of [schm](https://github.com/diegohaz/schm) validators

### Installation

`npm install validators` or `yarn add validators`

### Usage

```javascript
const schema = require('schm');
const { email } = require('schm-validators');

const testEmail = schema({
  user: String,
  email: {
    type: String,
    email: true,
  }
}, email());

testEmail.validate({
  user: 'testUser',
  email: 'testUser@example.com'
});
```
