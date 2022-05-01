var key = 'chametel';
var query = 'europeana_collectionName%3A9200434*';
var start = '1';
var rows = '6';
var profile = 'rich';
var apiCall = 'https://www.europeana.eu/api/v2/search.json?wskey= ' + key + '&query=' + query + '&start=' + start + '&rows=' + rows + '&profile=' + profile + '';

var json = $.getJSON(apiCall);
$.getJSON(apiCall, function (json) {
    $.each(json.items, function (i, item) {
        var title = item.title;
        var link = item.guid;
        var thumbnail = item.edmPreview;
        var description = item.dcDescription;
        var author = item.dcCreator;
        if (!author) author = 'Author unknown';
        var year = item.year;
        var dataProvider = item.dataProvider;
        var objecthtml = '';
        if (i==0) {
            objecthtml += '<a href="'
            + link + '" class="thumbnail" title="'
            + title + '" target="_blank"><img src="'
            + thumbnail + '" alt="'
            + title + '" class="displayed"></a><h2>'
            + title + '</h2><h3><i>'
            + author + ', ' + year + '</i></h3><p>'
            + dataProvider + '</p></div></div>';
            $('#preview').append(objecthtml);
        }else{
            objecthtml += '<div class="recommend"><div><a href="' + link + '" class="thumbnail" title="'
            + title + '" target="_blank"><img src="' + thumbnail + '" alt="'
            + title + '"></a></div><div class="text"><h2>'
            + title + '</h2><h3><i>'
            + author + ', ' + year + '</i></h3><p>'
            + dataProvider + '</p><form id="rating-area-form' + i + '"><div id="rating-area' + i + '" class="rating-area"><input type="radio" id="star-5'
            + i + '" name="rating" value="5"><label for="star-5'
            + i + '" title="«5»"></label><input type="radio" id="star-4'
            + i + '" name="rating" value="4"><label for="star-4'
            + i + '" title="«4»"></label><input type="radio" id="star-3'
            + i + '" name="rating" value="3"><label for="star-3'
            + i + '" title="«3»"></label><input type="radio" id="star-2'
            + i + '" name="rating" value="2"><label for="star-2'
            + i + '" title="«2»"></label><input type="radio" id="star-1'
            + i + '" name="rating" value="1"><label for="star-1'
            + i + '" title="«1»"></label></div></form></div></div>';
            $('#recommends').append(objecthtml);
        }
    });
});