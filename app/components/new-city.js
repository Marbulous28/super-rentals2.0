import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    newCityFormShow(){
      this.set('addNewCity', true);
    },
    saveCity(){
      var cityParams = {
        name: this.get('city') ? this.get('city') : "",
        country: this.get('country') ? this.get('country') : ""
      };
      console.log(cityParams);
      this.set('addNewCity', false);
      this.sendAction('saveCity', cityParams);
      this.set('city', '');
      this.set('country', '');
    }
  }
});
