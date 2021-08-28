canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
greencar_width=100;
greencar_height=90;
greencar_x=10;
greencar_y=10;

background_img="bg.jpg";
greencar_img="gc.jpg";

function add(){
background_img_tag= new Image();
background_img_tag.onload=uploadbackground;
background_img_tag.src=background_img;

greencar_img_tag= new Image();
greencar_img_tag.onload=uploadbackground;
greencar_img_tag.src=greencar_img;
}
function uploadbackground(){
ctx. drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}
function uploadgreencar(){
ctx. drawImage(greencar_img_tag,greencar_x,greencar_y,greencar_width,greencar_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='38'){
    up();
    console.log("up");
    }
    if (keypressed=='40'){
        down();
        console.log("down");
    }
        if (keypressed=='37'){
            left();
            console.log("left");
        }
            if (keypressed=='39'){
                right();
                console.log("right")
            }    
    }
        
function up(){
    if(greencar_y>=0){
        greencar_y=greencar_y-10;
        console.log("when up arow prwssed,x="+greencar_x+"y="+greencar_y);
        uploadbackground();
        uploadgreencar();
    }

}


function down(){
    if(greencar_y<=300){
        greencar_y=greencar_y+10;
        console.log("when down arow pressed,x="+greencar_x+"y="+greencar_y);
        uploadbackground();
        uploadgreencar();
    }

}

function left(){
    if(greencar_x>=0){
        greencar_x=greencar_x-10;
        console.log("when down arow pressed,x="+greencar_x+"y="+greencar_y);
        uploadbackground();
        uploadgreencar();
    }

}


function right(){
    if(greencar_x<=700){
        greencar_x=greencar_x+10;
        console.log("when down arow pressed,x="+greencar_x+"y="+greencar_y);
        uploadbackground();
        uploadgreencar();
    }

}
