var apiCall = 'https://www.europeana.eu/api/v2/search.json?wskey=chametel&query=Roger%20Fenton&start=1&rows=24&profile=rich&theme=photography';

$.getJSON(apiCall, function (json) {
    // here we will do something with the response
    var totalcount = json.totalResults;
    var counthtml = '<h2>Total results: ' + totalcount + '</h2>';
    $('#europeana').append(counthtml);
    $.each(json.items, function (i, item) {
        var title = item.title;
        var link = item.guid;
        var thumbnail = item.edmPreview;
        var objecthtml = '';
        objecthtml += '<a href="' + link + '" class="thumbnail" title="' + title + '" target="_blank"><img src="' + thumbnail + '" alt="' + title + '"></a>';
        $('#europeana').append(objecthtml);
    });
}); 