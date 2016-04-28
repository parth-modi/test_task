  var app = app || {};


//Init the view using the readyselector module 
//http://brandonhilkert.com/blog/page-specific-javascript-in-rails/
$(".players.index").ready(function(){
  console.log("Creating players index view");
  app.players_index=new app.PlayersView({players:gon.players});
});



(function ($) {
  'use strict';


  app.PlayersView = Backbone.View.extend({

    el:"#players",

    events: {
        'click .btn_hide, .btn_show' : 'onHidePlayer'
      },
    
    /*
    Input params:
    * players: the list of player objects
    * tags_bundle: Array of all tags in the recording over all videos.
    * play_video_by_video_id_and_time: a function callback
    **/
    initialize: function(inp) {
    console.log("Started RecordingTagControl initialize with input: %o", inp);
    this.players=inp.players;
        this.list_template=HandlebarsTemplates["players"];//uses the fila assets/javascripts/templates/players.hbs
        this.initHandleBarsHelpers();
        this.render();
    },

    initHandleBarsHelpers:function()
    {
      Handlebars.registerHelper('I18n',
        function(str){
          console.log(str);
          return (I18n != undefined ? I18n.t(str) : str);

        }
      );
    },

    onHidePlayer:function(evt)
    {
        console.log("Clicked on .hide/ .show, elem: %o", evt.target);
        console.log($(evt.target).parent()); //td
        console.log("logo::  " +$(evt.target).hasClass('btn_show')); //button.btn.btn-default.btn_hide
        console.log($(evt.target));
        console.log(this.players[0].logo);
        
        if ($(evt.target).hasClass('btn_show')){
          console.log("see");
          var x = $(evt.target).parent();
          var y = $(evt.target).parent().parent();
          var row = document.createElement("td");
          row.innerHTML = "<img src = \"" +gon.players[x[0].id].logo + "\" style='height:33px; width:100px;'></img>";
          //$(evt.target).parent().appendChild(row);
          y[0].appendChild(row);

        }else{
          $(evt.target).parent().parent().fadeOut();
        }
        // var row = document.createElement("td");
        // row.innerHTML = model.get("logo");
        // $(evt.target).parent().appendChild(row);
        
    },
    onShowPlayer:function(evt)
    {
        console.log("Clicked on .show", evt.target);
        window.alert("show Clicked");
    },
    render:function()
    {
        $(this.el).html(this.list_template(this.players));
    }


  });
})(jQuery);