import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

    headerMessage: 'Coming Soon!',
    emailAddress: '',
    responseMessage: '',

    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),

    actions: {
      saveInvitation() {
        const email = this.get('emailAddress')
        const newInvintation = this.store.createRecord('invintation', { email: email});
        newInvintation.save();

        this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
        this.set('emailAddress', '')
      }
    }

  /*
    actualEmailAddress: computed('emailAddress', function() {
      console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    }),

    emailAddressChanged: observer('emailAddress', function() {
      console.log('observer is called', this.get('emailAddress'));
    })
  */
});
