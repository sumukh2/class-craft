var canvas=new fabric.Canvas('canavas');
function wid(){
    window.alert("hel;mvndvyurhvksncygkcnhdhcjdkwdjo you got rroobedddddddddddd again");
}
playerX=10;
playerY=10;
blockimagewidth=30;
blockimageheight=30;
var player_object="";
var block_object="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,
            left:playerX

        });
        canvas.add(player_object);
    });
}
function newimage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(blockimagewidth);
        block_object.scaleToHeight(blockimageheight);
        block_object.set({
            top:playerY,
            left:playerX

        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    if(e.shiftKey==true&&keyPressed=='80'){
        blockimagewidth=blockimagewidth+10;
        blockimageheight=blockimageheight+10;
    document.getElementById("current-widtha").innerHTML=blockimagewidth;
    document.getElementById("current-heightss").innerHTML=blockimageheight;    
    }
    if(e.shiftKey&&keyPressed=='77'){
        blockimagewidth=blockimagewidth-10;
        blockimageheight=blockimageheight-10;
    document.getElementById("current-widtha").innerHTML=blockimagewidth;
    document.getElementById("current-heightss").innerHTML=blockimageheight;    
    }
    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();
}
if(keyPressed=='37'){
    left();
}
if(keyPressed=='39'){
    right();
}
if(keyPressed == '87') { 
newimage('wall.jpg'); console.log("w"); }
if(keyPressed == '84') { 
newimage('trunk.jpg'); console.log("t"); }
if(keyPressed == '90') { 
newimage('player.jpg'); console.log("z"); }
if(keyPressed == '76') { 
newimage('light_green.png'); console.log("l"); }
if(keyPressed == '68') { 
newimage('dark_green.png'); console.log("4bhrfu84"); }
if(keyPressed == '71') { 
newimage('ground.png'); console.log("="); }
if(keyPressed == '67') { 
newimage('cloud.jpg'); console.log("csalswsd"); }
}
function up(){
    if(playerY>=000){
        playerY=playerY-blockimageheight;
        canvas.remove(player_object);
        playerupdate();
    }
}
function down(){
    if(player<=500){
        playerY=playerY+blockimageheight;
        canvas.remove(player_object);
        playerupdate();
    }
}
function right(){
    if(playerX<=850){
        playerX=playerX+blockimagewidth;
        canvas.remove(player_object);
        playerupdate();
    }
}
function left(){
    if(playerX>=000){
        playerX=playerX-blockimagewidth;
        canvas.remove(player_object);
        playerupdate();
    }
}