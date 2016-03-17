import Ember from 'ember';
import layout from '../templates/components/slider-item';

const {computed} = Ember;
const {htmlSafe} = Ember.String;

export default Ember.Component.extend({
  layout,
  classNames: ['slider-item'],
  classNameBindings: ['image.picked'],
  attributeBindings: ['style'],
  style: computed('image.width', 'image.height', function(){
  	return htmlSafe(`flex:0 0 ${this.get('image.width')}px;`);
  }),

  didInsertElement(){
    this.set('image.outerWidth', $(this.element).outerWidth());
    this.set('image.offsetLeft', $(this.element).position().left);
  },

  click(){
  	const newIsPickedValue = !this.get('image.picked');
  	this.get('beforePick')();
  	this.set('image.picked', newIsPickedValue);
    let output = this.get('image');
    if(!newIsPickedValue){
      output = null;
    }
  	this.get('afterPick')(output);
  },

  touchStart(){
  }

});
