const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture');
const fileInput = document.getElementById('file-input');
const context = canvas.getContext('2d');
const video = document.querySelector('video');

var constraints = {
    audio: false,
    video: {
        width: {
            min: 640,
            ideal: 1280,
            max: 1920
        },
        height: {
            min: 480,
            ideal: 720,
            max: 1080
        },
        facingMode: "environment" //Defualt direct of the camera for mobile devices.
    }
};

// ================================================
//                                  FUNCTIONS
// ================================================





// Media Devices

navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {
        var videoTracks = stream.getVideoTracks();
        video.srcObject = stream;
    })
    .catch(function (err) {
        console.log(err.name + ": " + err.message);
    });

// Attach the video stream to the video element and autoplay.
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        player.srcObject = stream;
    });

document.querySelector("#capture").addEventListener("click", function (event) {
    if (video) {
        canvas.width = video.clientWidth;
        canvas.height = video.clientHeight;
        var context = canvas.getContext("2d");
        context.drawImage(video, 0, 0);
    }
});

var maxwidth = 100;
var maxheigth = 100;

$(captureButton).on('click', function (event) {
    // Draw the video frame to the canvas.
    console.log(this);
    context.drawImage(player, 0, 0, canvas.maxwidth, canvas.maxheight);









    // Stop all video streams.
    player.srcObject.getVideoTracks().forEach(track => track.stop());





    // image = canvas.toDataURL('image/jpeg', 1.0);

    // $.ajax({
    //         type: "POST",
    //         url: "/user/image",
    //         data: {
    //             img: image
    //         }
    //     }).done(function (result) {
    //             console.log('saved: ' + result);
    //     });

});