function webcam_attach()
{
	Webcam.attach( '#my_camera' );
	document.getElementById('my_camera').style.display = 'none';
}

function webcam_snap()
{
	Webcam.snap( function() {
        // the webcam image is now in your own canvas
    }, document.getElementById('canvas') ); 
}
