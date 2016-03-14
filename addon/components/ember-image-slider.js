import Ember from 'ember';
import layout from '../templates/components/ember-image-slider';

const {computed, $} = Ember;
const {htmlSafe} = Ember.String;

export default Ember.Component.extend({
  layout,
  classNames: ['ember-image-slider'],

  limit: 5,
  scrollLeft: 0,
  containerWidth: null, // computed in didInsertElement() and onResize()
  animationTime: 200,
  shouldDisplayArrows: true,

  convertedContent: computed('content.[]', function(){
  	return this.get('content').map((image) => {
  		return Ember.Object.create(image);
  	});
  }),

  limitedContent: computed('convertedContent.[].@each','limit', function(){
  	return Ember.A(this.get('convertedContent').slice(0, this.get('limit')));
  }),

  contentSorting: ['offsetLeft:desc'],
  descendingContent: computed.sort('limitedContent', 'contentSorting'),

  allItemsDisplayed: computed('limit', 'convertedContent.length', function(){
  	return this.get('limit') >= this.get('content.length');
  }),

  nextSlide: computed('limitedContent.[]','scrollLeft','containerWidth', function(){
    return this.get('limitedContent').find((slide) => {
      return slide.get('offsetLeft') > (this.get('scrollLeft') + this.get('containerWidth') - slide.get('width')*0.9);
    });
  }),

  previousSlide: computed('descendingContent.[]', 'scrollLeft', 'containerWidth', function(){
    return this.get('descendingContent').find((slide) => {
      return slide.get('offsetLeft') < (this.get('scrollLeft'));
    });
  }),

  setContainerWidth(){
    const $el = $(this.element);
    this.set('containerWidth', $el.width());
  },

  didInsertElement(){
    this.setContainerWidth();

    const $gridWrap = $(this.element).find('.grid-wrap');
    this.set('$gridWrap', $gridWrap);

    //bind events
    $gridWrap.scroll((event) => { this.scroll(event); });
    $(window).on('resize.' + this.elementId, () => { this.onResize() });
  },

  willDestroyElement(){

    //unbind events
    this.get('$gridWrap').unbind();
    $(window).off('resize.' + this.elementId);
  },


  scroll(event){
    this.set('scrollLeft', this.get('$gridWrap').scrollLeft());
  },

  onResize(){
    this.setContainerWidth();
  },

  actions: {
  	increaseLimit(amount){
  		this.incrementProperty('limit', amount);
  	},

  	clearPicks(){
  		this.get('convertedContent').forEach((image) => {
  			image.set('picked', false);
  		});
  	},

    moveLeft(){
      const gridWrap = this.get('$gridWrap');
      gridWrap.animate({scrollLeft: this.get('previousSlide.offsetLeft')}, this.get('animationTime'));

    },

    moveRight(){
      const gridWrap = this.get('$gridWrap');
      console.log(this.get('nextSlide'));
      gridWrap.animate({scrollLeft: this.get('nextSlide.offsetLeft') - this.get('containerWidth') + this.get('nextSlide.width') + 10}, this.get('animationTime'));
    }
  }
});
