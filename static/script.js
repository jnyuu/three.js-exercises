$.ajax({
    url: "/cwiczenia",
    data: {},
    type: "GET",
    success: function (data) {
        console.log(data.dirs);
        console.log(data);
        console.log(data.dirs.length);
        data.dirs.forEach((dir, index) => {
            dir.forEach(element => {
                var link = document.createElement('a');
                $(link).addClass("cwiczenie")
                    .attr('href', "cwiczenia/cwiczenia" + (index + 1) + "/" + element)
                    .appendTo($("#cwiczenia"))
                    .html(element)
                    .css('display', "block")
            });
            var br = document.createElement('br');
            $(br).appendTo($("#cwiczenia"))
            var br = document.createElement('br');
            $(br).appendTo($("#cwiczenia"))
            // for (var i = 0; i < lol.length; i++) {
            //     var link = document.createElement('a');
            //     $(link).addClass("cwiczenie")
            //         .attr('href', "cwiczenia/cwiczenia" + (index + 1) + "/" + dir[i])
            //         .appendTo($("#cwiczenia"))
            //         .html(dir[i])
            //         .css('display', "block")
            // }
        });
    },
    error: function (xhr, status, error) {

    },
});