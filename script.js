// menu bar

// window.addEventListener('scroll',function(){
//     let navbar = document.getElementById("menu-bar");

//     if(window.pageYOffset >= 190){

//         navbar.classList.add('sticky');

//     }
//     else{
//         navbar.classList.remove('sticky');
//     }
// });



// goa information

var  i = 0;

        function read11(){
           if(!i){

               document.getElementById('more').style.display = "inline";

               document.getElementById('dots').style.display = "none";

               document.getElementById('reads').innerHTML = "Read Less";

               i = 1;
           }

           else{

               document.getElementById('more').style.display = "none";

               document.getElementById('dots').style.display = "inline";

               document.getElementById('reads').innerHTML = "Read More";

               i = 0;
           }
        }


// tourism in goa 


        var  v = 0;

        function read112(){
           if(!v){

               document.getElementById('more1').style.display = "inline";

               document.getElementById('dots1').style.display = "none";

               document.getElementById('reads1').innerHTML = "Read Less";

               v = 1;
           }

           else{

               document.getElementById('more1').style.display = "none";

               document.getElementById('dots1').style.display = "inline";

               document.getElementById('reads1').innerHTML = "Read More";

               v = 0;
           }
        }



// 30 places in goa


//solve this problem

let flag = 0;

function controller(x){
    flag = flag + x;
    slideshows(flag);
}

slideshows(flag);

function slideshows(num){

    
    let slides = document.getElementsByClassName('section25');

    if(num == slides.length){
        flag = 0;
        num = 0;
    }

    if(num < 0){
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    for(let y of slides){
        console.log("check");
        y.style.display = "none";
    }

    slides[num].style.display = "block";
}