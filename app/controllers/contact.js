import Controller from '@ember/controller';
import { match, gte, and, not } from '@ember/object/computed';

export default Controller.extend({

  emailAddress: '',
  message: '',

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: gte("message.length", 5),

  isBothTrue: and('isValidEmail', 'isMessageEnoughLong'),
  isBothNotTrue: not('isBothTrue'),

  actions: {
    sendMsg() {
      let email = this.get('emailAddress');
      let message = this.get('message');

      alert('Your message to: ' + email + ' Message: '+ message);

      let responseMessage = 'We got your message and we’ll get in touch soon';
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
