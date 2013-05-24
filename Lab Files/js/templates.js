var parkTabletTemplate = '{{#parks}}<a href="#parkDetailsPage" id="{{id}}"><div class="parkItem"><img src="img/thumbs/{{image}}" /><h1>{{name}}</h1><h2>{{state}}</h2></div></a>{{/parks}}';

var parklistTemplate = '<ul id="parkList" data-role="listview" data-autodividers="true" data-filter="true">{{#parks}}<li id="{{id}}"><a href="#parkDetailsPage"><img src="img/thumbs/{{image}}" width="160" height="160"><h2>{{name}}</h2><p>{{state}}</p></a></li>{{/parks}}</ul>';


var parkDetailsTemplate = '<img class="parkHeaderImg" src="img/headers/{{image}}"><h1 id="parkName">{{name}}</h1><p>{{data}}</p>';
parkDetailsTemplate += '<ul id="parkMenu" data-role="listview" data-inset="true" class="ui-listview ui-listview-inset ui-corner-all ui-shadow"><li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right"  class="ui-btn ui-btn-up-p ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-icon ui-first-child"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit"><img src="img/icons/86-camera.png" alt="Photo" class="ui-li-icon ui-corner-none ui-li-thumb">Add Your Photo</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li><li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right"  class="ui-btn ui-btn-up-p ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-icon"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit"><img src="img/icons/96-book.png" alt="Park Secrets" class="ui-li-icon ui-li-thumb">Park Secrets</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li><li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right"  class="ui-btn ui-btn-up-p ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-icon"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit"><img src="img/icons/71-compass.png" alt="What to See" class="ui-li-icon ui-li-thumb">What to See</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li><li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right"  class="ui-btn ui-btn-up-p ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-icon ui-last-child"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit"><img src="img/icons/102-walk.png" alt="What to Do" class="ui-li-icon ui-li-thumb">What to Do</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li></ul>';
parkDetailsTemplate += '<h3>Park Location</h3><p id="parkMap" ><img src="http://maps.google.com/maps/api/staticmap?center={{lat}},{{lon}}&zoom=10&markers=color:green|{{lat}},{{lon}}&size=400x400&sensor=true" width="400"></p>';
