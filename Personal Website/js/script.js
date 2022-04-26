var heading = document.getElementById('heading');
var hcaption = document.createElement('h1');
//<h1>This is the Gallery Page</h1>
hcaption.innerText = "This is the Gallery page";
heading.appendChild(hCaption);

//JSON Text
var jText = '{ "Images": ['+
            '{"URL":"img/01.jpg", "Caption": "Image 1"},' +
            '{"URL":"img/02.jpg", "Caption": "Image 2"},' +
            '{"URL":"img/03.jpg", "Caption": "Image 3"},' +
            '{"URL":"img/04.jpg", "Caption": "Image 4"},' +
            '{"URL":"img/05.jpg", "Caption": "Image 5"},' +
            '{"URL":"img/06.jpg", "Caption": "Image 6"},' +
            '{"URL":"img/07.jpg", "Caption": "Image 7"},' +
            '{"URL":"img/08.jpg", "Caption": "Image 8"},' +
            '{"URL":"img/09.jpg", "Caption": "Image 9"},' +
            ']}';

            var json = JSON.parse(jText);
            //Console.Log(json);


            var gallery = document.getElementById('Gallery');
            for(var i = 0; i < json.Images.length ; i++){
                var img = document.createElement('Img');
                var aImg = document.createElement('a');
                aImg.href=json.Images[i].URL;
                img.src = json.Images[i].URL;
                img.alt = json.Images[i].Caption;
                img.style = "width:33";
                gallery.appendChild(img);

            }