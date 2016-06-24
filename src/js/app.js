(function($, app){

	console.log('my-note app.js');
	var $header = $('.header');
	var $memo = $('#memo')
	var initData = app.util.storage.load();

	
	
	$header.on('click', '.btn-fullscreen', function(event){

		app.BtnAction.fullScreen();

	});

	$header.on('click','.btn-about' , function(){

		app.BtnAction.about();
	});

	$header.on('click','.btn-savenote' ,function(){

		app.view.addTodo();

	});

	$header.on('click', '.btn-newnote' ,function(){
		$memo.val('');
		
	});

	if(initData.length >= 1) {
		console.log(initData)
		var index = initData.length-1;
		$memo.val(initData[index].value);
		// app.collection.set( initData );
	}
})(jQuery,NoteApp)