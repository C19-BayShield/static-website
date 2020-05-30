var spData = null;
function doData(json) {
    spData = json.feed.entry;
}

function readData() {
    var data = spData;
    $("#ppe").html(data[2]['content']['$t']);
    $("#deliv").html(data[4]['content']['$t']);
}
$(document).ready(function () {
    readData();
});