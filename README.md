# Ember-image-slider (and picker)

Still alpha :).

## Install

### 1. Install the addon
``` ember install ember-image-slider```

### 2. Insert styles

Import the scss from the dummy app: https://github.com/MartinMalinda/ember-image-slider/blob/master/tests/dummy/app/styles/app.scss

(currently uses material icons, you may need to import the material icons font or style navigation arrows yourself)

## Usage

Insert the component in your template:

```hbs 
{{#ember-image-slider
	content=model
	limit=40
	shouldDisplayArrows=true
	afterPick=(action 'pickImage') as |image|}}
	<div>This image has width:{{image.width}}</div>
{{/ember-image-slider}}
```

Content is expected to be an array of objects with src and width properties:

```javascript

images: [{
		src: 'img1.jpg',
		width: 200,
		myImageName: 'Image 1'
	},
	{
		src: 'img2.jpg',
		width: 400
	},
	{
		src: 'img3.jpg',
		width: 600
	}]

```

##Notes

Multiselection should be easily achievable by overriding the beforePick action. 


