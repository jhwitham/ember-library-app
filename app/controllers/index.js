import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

    emailAddress: '',

    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid')
    
  /*
    actualEmailAddress: computed('emailAddress', function() {
      console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    }),

    emailAddressChanged: observer('emailAddress', function() {
      console.log('observer is called', this.get('emailAddress'));
    })
  */
});
