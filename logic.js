const images= [];
images[0]="bg0.jpg";
images[1]="bg1.jpg"; 
images[2]="bg2.jpg";
images[3]="bg3.jpg";
let image=document.querySelector(".img");
let time =3000;
let i=0;

function changeImage() {
 document.img.src=images[i];
    if (i<images.length-1) {
        i++;
    } else {
        i=0;
    }
    setTimeout("changeImage()",time);
}
console.log(images[i]);
window.onload=changeImage;