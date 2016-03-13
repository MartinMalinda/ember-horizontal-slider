import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const imageData = [
  {
    src:'images/first.jpg',
    height: 200,
    width: 200,
    picked: false
  },
  {
    src:'images/third.png',
    height: 200,
    width: 200,
    picked: false
  },
  {
    src: 'images/fourth.png',
    width: 200,
    height: 200,
    picked: false
  },
  {
    src: 'images/fourth.png',
    width: 200,
    height: 200,
    picked: false,
  },
  {
    src: 'images/fourth.png',
    width: 200,
    height: 200,
    picked: false,
  },
  {
    src: 'images/fourth.png',
    width: 200,
    height: 200,
    picked: false,
  },
  {
    src: 'images/fourth.png',
    width: 200,
    height: 200,
    picked: false,
  },
  {
    src: 'images/fourth.png',
    width: 200,
    height: 200,
    picked: false,
  },
  {
    src: 'images/fourth.png',
    width: 200,
    height: 200,
    picked: false,
  },
  {
    src: 'images/fourth.png',
    width: 200,
    height: 200,
    picked: false,
  },
  {
    src: 'images/fourth.png',
    width: 200,
    height: 200,
    picked: false,
  }];

moduleForComponent('ember-image-slider', 'Integration | Component | ember image slider', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.set('images', imageData);
  this.render(hbs`{{ember-image-slider content=images limit=20}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`{{#ember-image-slider content=images limit=20}}foo{{/ember-image-slider}}`);

  assert.equal(this.$().text().trim().replace(/\s/g, ""), Array(imageData.length + 1).join('foo'));
});

test('clicking on item calls action and applies a class', function(assert){

  assert.expect(5);

  this.set('images', imageData);
  this.set('afterPick', function(){
    assert.ok(true, 'afterPick action was called after clicking on item');
  });

  this.render(hbs`{{ember-image-slider content=images limit=20 afterPick=(action afterPick)}}`);

  const sliderItems = this.$().find('.slider-item');
  const firstSlide = $(sliderItems[0]);
  firstSlide.click();

  assert.equal(firstSlide.hasClass('picked'), true, 'picked class is applied to .slider-item');

  const secondSlide = $(sliderItems[1]);
  secondSlide.click();

  assert.equal(secondSlide.hasClass('picked'), true, 'picked class is, again, applied to .slider-item');

  assert.equal(this.$().find('.picked').length, 1, 'there is just one .slider-item with picked class');

});
