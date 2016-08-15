import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

<<<<<<< HEAD
    save() {
      var params = {
=======
    save1() {
      var params ={
>>>>>>> cdb4abb57eb093ffc7eb6f65a4ab90deb477cc77
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('addNewRental', false);
<<<<<<< HEAD
      this.sendAction('save', params);
=======
      this.sendAction('save2', params);
>>>>>>> cdb4abb57eb093ffc7eb6f65a4ab90deb477cc77
    }
  }
});
