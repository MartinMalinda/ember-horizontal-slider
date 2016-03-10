import Ember from 'ember';

export default Ember.Controller.extend({
	images: [
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
	}],

	actions: {
		pickImage(image){
			console.log('image picked:', image);
		}
	}
});