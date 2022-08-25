var canvas = document.querySelector('canvas'); 
var c = canvas.getContext('2d');

//canvas.width = window.innerWidth;
//canvas.height = windows.innerHeight;

var time_point_past_frame = Date.now();
var time_point_current_frame;
var time_delta;
var time_accumulator=0;//time accumulator


function mainloop()
{
    requestAnimationFrame(mainloop);
    //if time is accumulated perform animation

    //time accumulator
    //time_accumulator+= ?diff

    //calculate time difference
    var time_difference = time_point_past_frame - Date.now();
    console.log("time accumulator = " + time_accumulator);
    /*if(time_delta>1000)
    {
        console.log(time_delta);
    }*/

    //document.getElementById("demo").innerHTML = time_delta.toString();

    //requesting to call function after next time 
    //when ?(function is completed and before browser is redrawing)
    //and works only once

    //requestAnimationFrame(animate);
    //setTimeout(animate, 1000);
}

mainloop();
