function get_delicious_json( tags, settings) {

  var url = 'http://feeds.delicious.com/v2/json/' + settings.username + '/';
  var tagStories = new Object();

  var target = $('<ul>', {}).appendTo(settings.target);
  
  $.each(tags.split(settings.separator), function(index, tagStr) { 
	  $.getJSON(url + tagStr + "?callback=?", function(data) { 
		  $.each(data, function(key, val) {
		    t = val.u;
		    if (!(t in tagStories)) {
		      // add tagStr to the ahref text value to see where each link is coming from.
		      $('<a>', { href : val.u, title : val.d, text : val.d  }).appendTo($('<li>').appendTo(target));
		      tagStories[val.u] = val;
		    }
	     });
	  });
  });
  
}