define(function (require) {

  "use strict";

  var $                   = require('jquery'),
      _                   = require('underscore'),
      Backbone            = require('backbone'),
      Marionette          = require('marionette'),
      ListItemView        = require('app/views/missions/list_item'),
      tpl                 = require('text!tpl/missions/list.html'),

      template = _.template(tpl);

  return Marionette.CompositeView.extend({
    itemView: ListItemView,
    itemViewContainer: "tbody",
    template: template,

    initialize: function (options) {
      this.listenTo(this.collection, "change reset", this.render);
    },
  });
});
