(function(app){

  app.model = {
    id: '',
    value: ''
  };
})(NoteApp);


(function(app, $){
  var data = [];

	app.collection = {
    set: function(arr){
      data = arr;
      app.$wrap.trigger("addCollection", [data]);
    },
    toJSON: function() {
      return data;
    },
    add: function (note) {
      data.push(note);
      app.$wrap.trigger("addCollection", [data]);
    }
  };
})(NoteApp, jQuery);

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
(function(app){


 app.BtnAction = {

  about: function(){
    var board = $('#about');

    board.attr("style", "");
    console.log('about');
  },

  fullScreen: function(){

    var fullScreen = document.documentElement;

    if (fullScreen.requestFullscreen) {
     fullScreen.requestFullscreen();
   }
   else if (fullScreen.mozRequestFullScreen) {
     fullScreen.mozRequestFullScreen();
   }
   else if (fullScreen.webkitRequestFullScreen) {
     fullScreen.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
   }
   else if (fullScreen.msRequestFullscreen) {
     fullScreen.msRequestFullscreen();
   }

 }
};

  // app.ButtonAction = BtnAction;

})(NoteApp);

var NoteApp = {
    $wrap: $(document.body),
    storageKey : 'note'
};


(function($, app){


	var $listDom = $('#todoList');
	var todoTemplateHtml = $('#todoTemplate').html();
	var $memo = $('#memo')

	app.view ={

		addTodo: function(event){
			var fieldValue = $memo.val();
			console.log(11);

			var todo = $.extend({}, app.model, {
				id: app.util.uniqId(),
				value: fieldValue,
			});
			app.collection.add(todo);
		}
	};

	app.$wrap.on('addCollection', app.view.render);
})(jQuery, NoteApp);





(function(app) {

  app.util = {
    uniqId: function() {
      return new Date().getTime();
    },
    storage : {
      load: function () {
        console.log('storage.load()');
        return JSON.parse(localStorage.getItem(app.storageKey) || "[]");
      },
      save: function (event, data) {
        console.log('storage.save()');
        localStorage.setItem(app.storageKey, JSON.stringify(data));

      }
    }
  };


  app.$wrap.on('addCollection', app.util.storage.save);
  // app.$wrap.on('removeCollection', app.util.storage.save);
  // app.$wrap.on('checkCollection', app.util.storage.save);

})(NoteApp);

