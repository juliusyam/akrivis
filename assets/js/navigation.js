$('button#project1').click(function(){
    $('.individual-project').empty();
    $('.individual-project').load('/projects/project1');
});

$('button#project2').click(function(){
    $('.individual-project').empty();
    loadProject2JSON();
});

$('button#project3').click(function(){
    $('.individual-project').empty();
    $('.individual-project').load('/projects/project3');
});

function loadProject2JSON() {
    $.ajax({
        type: 'GET',
        url: '/assets/json/stuff.json',
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        success: function(response) {
            console.log(response);

            listGroupDiv = $('<div>', {
                class: 'list-group-div'
            });

            $.each(response, function(key, value) {
                //$('.people').append(document.createTextNode(value.Name))

                listGroupItem = $('<li>', {
                    class: 'list-group-item'
                });

                var ajaxTitle = $('<h1>');
                var listName = $('<h1>');
                var listCity = $('<h2>');
                var listAlignment = $('<h3>');
                var listBorn = $('<p>');
                var listPicture = $('<img>');
                var listPictureSrc = value.Picture;
                console.log(listPictureSrc);

                ajaxTitle.html("First JSON AJAX");
                listName.html(document.createTextNode(value.Name));
                listCity.html(document.createTextNode(value.City));
                listAlignment.html(document.createTextNode(value.Alignment));
                listBorn.html(document.createTextNode(value.Born));
                listPicture.attr("src", listPictureSrc);
                console.log(listPicture.attr("src"));

                listGroupItem.append(ajaxTitle);
                listGroupItem.append(listName);
                listGroupItem.append(listCity);
                listGroupItem.append(listAlignment);
                listGroupItem.append(listBorn);
                listGroupItem.append(listPicture);
                listGroupDiv.append(listGroupItem);
            });

            $('.individual-project').append(listGroupDiv);
        },
        error: function(response) {
            console.log("error " + response);
        }
    });
}