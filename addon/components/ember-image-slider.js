import Ember from 'ember';
import layout from '../templates/components/ember-image-slider';

const {computed} = Ember;
const {htmlSafe} = Ember.String;

export default Ember.Component.extend({
  layout,
  classNames: ['ember-image-slider'],

  limit: 5,

  convertedContent: computed('content.[]', function(){
  	return this.get('content').map((image) => {
  		return Ember.Object.create(image);
  	});
  }),

  limitedContent: computed('convertedContent.[].@each','limit', function(){
  	return this.get('convertedContent').slice(0, this.get('limit'));
  }),

  allItemsDisplayed: computed('limit', 'convertedContent.length', function(){
  	return this.get('limit') >= this.get('content.length');
  }),

  actions: {
  	increaseLimit(amount){
  		this.incrementProperty('limit', amount);
  	},

  	clearPicks(){
  		this.get('convertedContent').forEach((image) => {
  			image.set('picked', false);
  		});
  	}
  }
});
