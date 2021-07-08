
var cities = [
    {
        id: 1,
        city_name: "ירושלים",
        description: "בירת ישראל",
        Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zzbnB4lOKsmcW1qy18iQSrGwvZvgFTZtGQ&usqp=CAU',
        map: 'images/jerusalem_map.GIF',
        icons: { position: [[33, 90], [10, 77], [76, 37],[76, 21]], text: ["blblbb", "mamamamam", "dldldldld", "dldldldld"] }

    },
    {
        id: 2,
        city_name: "כוכב השחר",
        description: "ישוב קהילתי דתי",
        Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Kokhav_HaShahar_2020.jpg/540px-Kokhav_HaShahar_2020.jpg',
        map: 'images/kh_map.GIF',
        icons: { position: [[20, 43], [76, 21], [76, 37],[44, 15],], text: ["dldldldld","blblbb", "mamamamam","gagagagag"] }

    },
    {
        id: 3,
        city_name: "רימונים",
        description: "ישוב קהילתי ",
        Image: 'https://goyosh-storage.s3.eu-west-3.amazonaws.com/yeshuvim/rimonim.jpg',
        map: 'images/‏‏rimonim_map.GIF',
        icons: { position: [[11, 55], [76, 37], [76, 3], [11, 2]], text: ["dldldldld","blblbb", "mamamamam","gagagagag"] }

    },
    {
        id: 4,
        city_name: "חיפה",
        description: "העיר האדומה",
        Image: 'https://haifahaifa.co.il/wp-content/uploads/2019/06/55.jpg',
        map: '‏‏images/hifa_map.png',
        icons: { position: [[89, 98], [44, 15], [76, 37],[20, 43]], text: ["blblbb","dldldldld", "mamamamam","gagagagag"] }

    }
]


$(document).ready(function () {
    $(".button_city").click(
        function () {
            var city = cities.find(item => item.id == this.id);
            icons_html = ''
            for (var i = 0; i < city.icons.position.length; i++) {
                icons_html += '<div class="icon" id="' + i + '" style="position: absolute; top:' + city.icons.position[i][0] + '%; right:' + city.icons.position[i][1] + '%;" ><img src="icons8-info-64.png"  style=" transform: translate(-50%, -50%); "></img></div>'
            };

            $(".main_map").html(
                '<div class="image_map" id ="image_map" ><img src=' + city.map + '>' +
                icons_html +
                '</img></div>'
            )
            $('.icon').mouseenter(function () {
                $(this).append('<div class="popup" >' + city.icons.text[this.id] + '</div>')
                $(".popup").css({ top: city.icons.position[this.id][0] });
                $(".popup").css({ right: city.icons.position[this.id][1] });
                $(".popup").show();
            })

            $('.icon').mouseleave(function (e) {
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
            '<button class="button_city" type="button" id="' + id + '">' +
            '<h3>' + name + '</h3>' +
            '<h6>' + desc + '</h6>' +
            '<img src=' + Image + '></img>' +
            '</button>'
        '</div>';
    }


}


