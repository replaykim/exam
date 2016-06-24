
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

