
var cities = [
    {
        id: 1,
        city_name: "ירושלים",
        description: "בירת ישראל",
        Image: '‏‏https://eng.beithillel.org.il/wp-content/uploads/2013/12/western-wall.jpg',
        map: '‏‏‏‏kh.GIF',
        icons: { position: [[33, 90], [10, 77]], text: ["blblbb", "mamamamam"] }

    },
    {
        id: 2,
        city_name: "כוכב השחר",
        description: "ישוב קהילתי דתי",
        Image: '‏‏kh.GIF',
        map: 'https://eng.beithillel.org.il/wp-content/uploads/2013/12/western-wall.jpg',
        icons: { position: [[20, 43], [76, 21]], text: ["blblbb", "mamamamam"] }

    }]


$(document).ready(function () {
    $("button").click(
        function () {
            var city = cities.find(item => item.id == this.id);
            icons_html = ''
            for (var i = 0; i < city.icons.position.length; i++) {
                icons_html += '<div class="icon12" id="' + i + '" style="position: absolute; top:' + city.icons.position[i][0] + '%; right:' + city.icons.position[i][1] + '%;" ><img src="icons8-info-64.png"  style=" transform: translate(-50%, -50%); "></img></div>'
            };

            $(".main_map").html(
                '<div class="image_map" id ="image_map" ><img src=' + city.map + '></img>' +
                icons_html +
                '</div>'
            )
            $('.icon12').mouseenter(function () {
                $(this).append('<div class="popup" >' + city.icons.text[this.id] + '</div>')
                $(".popup").css({ top: city.icons.position[this.id][0] });
                $(".popup").css({ right: city.icons.position[this.id][1] });
                $(".popup").show();
            })

            $('.icon12').mouseleave(function (e) {
                $(".popup").remove();
            });
        })
})

function fetchIssues() {


    var issuesList = document.getElementById('issuesList');
    issuesList.innerHTML = '';

    for (var i = 0; i < cities.length; i++) {
        var id = cities[i].id;
        var name = cities[i].city_name;
        var desc = cities[i].description;
        var Image = cities[i].Image;

        issuesList.innerHTML += '<div class="well">' +
            '<button type="button" id="' + id + '" onclick="console.log(this)">' +
            '<h3>' + name + '</h3>' +
            '<h6>' + desc + '</h6>' +
            '<img src=' + Image + '></img>' +
            '</button>'
        '</div>';
    }


}


