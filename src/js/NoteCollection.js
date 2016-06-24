
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
