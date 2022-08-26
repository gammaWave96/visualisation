var canvas = document.querySelector('canvas'); 
var c = canvas.getContext('2d');

//canvas.width = window.innerWidth;
//canvas.height = windows.innerHeight;

//
//Goal is to calculate time beetween animation and drawing "frames" 
//

//miliseconds are in use
var time_point_current_frame = Date.now();
var time_point_past_frame = time_point_current_frame;

var time_accumulator = 0;//time accumulator
var time_execution_banned_range = 1000/60;//fps regulation

//Keeps difference beetween two time points
var time_delta=0;


var animation_activity = false;
var animation_fps=0;


function mainloop()
{
    //
    //time difference and timeaccumulator
    //
    time_point_current_frame = Date.now();
    time_delta =  time_point_current_frame - time_point_past_frame;
    time_point_past_frame = time_point_current_frame;

    time_accumulator += time_delta;
    if(time_accumulator >= time_execution_banned_range)
    {
        animation_activity = true;
        time_delta = time_accumulator;
        time_accumulator = 0;
        animation_fps = 1000 / time_delta;
    }
    else
    {
        animation_activity = false;
    }
    //else wait next frame


    //
    //if time is accumulated perform animation
    //animation
    //

    if(animation_activity == true)
    {
        //effects,time manipulation...

        //paint,draw...
        console.log("time delta    :"+time_delta);
        console.log("fps:          :"+animation_fps);
        //document.getElementById("demo").innerHTML = time_delta.toString();

    }

    //requesting to call function after next time 
    //when ?(function is completed and before browser is redrawing)
    //and  ?works only once

    requestAnimationFrame(mainloop);
}

mainloop();
