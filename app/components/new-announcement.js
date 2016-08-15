import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    save() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        category: this.get('category')
      }
      this.set('addNewAnnouncement', false);
      this.sendAction("save", params);
    }
  }
});
