describe('Controller: MainCtrl', function(){

	beforeEach(module('dbApp'));

	var ctrl;

	beforeEach(inject(function($controller){
		ctrl = $controller('MainCtrl');
	}));

	it('should have items available on load', function() {
		expect(ctrl.posts).toEqual([
			{id: 1, artist: 'Blah', title: 'Blah Blah', link: 'https://www.youtube.com/embed/hzqFmXZ8tOE?list=FL7wg_Gt_lNNcI8-Wxes6KGw}'},
	    {id: 2, artist: 'Bblah', title: 'Who knows', link: 'https://www.youtube.com/embed/9Bmh9A8Dl1c?list=FL7wg_Gt_lNNcI8-Wxes6KGw}'},
	    {id: 3, artist: 'Bblah', title: 'Who knows', link: 'https://www.youtube.com/embed/9Bmh9A8Dl1c?list=FL7wg_Gt_lNNcI8-Wxes6KGw}'},
	    {id: 4, artist: 'Bbblah', title: 'Summat', link: 'https://www.youtube.com/embed/9Bmh9A8Dl1c?list=FL7wg_Gt_lNNcI8-Wxes6KGw}'}
    	])
	});
});	