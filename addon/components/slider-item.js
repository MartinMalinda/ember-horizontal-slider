import Ember from 'ember';
import layout from '../templates/components/slider-item';

const {computed} = Ember;
const {htmlSafe} = Ember.String;

export default Ember.Component.extend({
  layout,
  classNames: ['slider-item'],
  classNameBindings: ['image.picked'],
  style: computed('image.width', 'image.height', function(){
  	return htmlSafe(`max-width:${this.get('image.width')}px;`);
  }),

  didInsertElement(){
    this.set('image.outerWidth', $(this.element).outerWidth());
    this.set('image.offsetLeft', $(this.element).position().left);
    console.log(this.get('image'));
  },

  click(){
  	const newIsPickedValue = !this.get('image.picked');
  	this.get('beforePick')();
  	this.set('image.picked', newIsPickedValue);
  	this.get('afterPick')(this.get('image'));
  },

  touchStart(){
  }

});
