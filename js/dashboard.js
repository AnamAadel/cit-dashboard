
// menu items selection

const hover_items = document.querySelectorAll('.hover_items');

// wd_button click & show white and dark color

const wd_button = document.querySelectorAll('.wd_button');
const point = document.querySelectorAll('.wd_button .point');
const wd_button2 = document.querySelectorAll('.wd_button2');


const wd_noti = document.querySelectorAll('.wd_noti');

for(item of wd_button){
    item.addEventListener('click',function(){
        for(item of colorBtn){
            item.children[0].removeAttribute('id','shown');
            item.children[0].className = 'bg';
        }
        // console.log(colorBtn[index_num.ind]);
        if(index_num.ind<=5){
            index_num.ind += 5;
            colorBtn[index_num.ind].children[0].setAttribute('id','shown');
            document.getElementById(colorBtn[index_num.ind].children[0].getAttribute('id')).className = 'bg active';
        }
        dbg_color(darkColor,black)

        for(item of wd_button){
            item.classList.add('dark');
            item.style.border = '1px solid'+ hover_color.value;
        }
        for(item of point){
            item.style.background = dataColor.color;

        }
        for(item of wd_button2){
            item.style.zIndex = 1;

        }
        for(item of wd_noti){
            item.classList.add('border');
            
        }
        for(item of window_box){
            item.classList.add('border');
            
        }
        for(item of ball_noti){
            
            item.classList.add('border');
        }
        for(item of Stud_menu){
            item.classList.add('border');

        }
        
    })

}

for(item of wd_button2){
    item.addEventListener('click',function(){
        for(item of colorBtn){
            item.children[0].removeAttribute('id','shown');
            item.children[0].className = 'bg';
        }
        
        if(index_num.ind>=5){
            index_num.ind -= 5;
            colorBtn[index_num.ind].children[0].setAttribute('id','shown');
            document.getElementById(colorBtn[index_num.ind].children[0].getAttribute('id')).className = 'bg active';
        }
        for(item of wd_button2){
            item.style.zIndex = -1;
        }
        for(item of wd_button){
            item.classList.remove('dark');
            item.style.border = 'none';
        }

        for(item of point){
            item.style.background = lightColor;
        }

        for(item of wd_noti){
            item.classList.remove('border');
            
        }
        for(item of window_box){
            item.classList.remove('border');
            
        }
        for(item of ball_noti){
            
            item.classList.remove('border');
        }
        for(item of Stud_menu){
            
            item.classList.remove('border');
        }
        dbg_color(lightColor,lightGray);
    })

}

// clicking button & show navigation boxes

const wd = document.querySelectorAll('.wd');
const window_button = document.querySelectorAll('.window_button');
const window_box = document.querySelectorAll('.window_box');

const ball_button = document.querySelectorAll('.ball_button');
const ball_noti = document.querySelectorAll('.notification');
const studentBox = document.querySelectorAll('.student');
const Stud_menu = document.querySelectorAll('.Stud_menu');

for(item of window_button){
    item.addEventListener('click',function(){
        for(item of window_box){
            item.classList.toggle('show');

        }
    });

}
for(item of ball_button){
    
    item.addEventListener('click',function(){
        for(item of ball_noti){
            item.classList.toggle('show');

        }
    });
    
}
for(item of studentBox){

    item.addEventListener('click',function(){
        for(item of Stud_menu){
            item.classList.toggle('show');

        }
    });
}
// for(item of ball_button){

// }

for(item of wd){
    
    item.addEventListener('mouseover',function(){
        for(item of wd_noti){
            item.classList.add('show');

        }
        
    })
}

for(item of wd){
    item.addEventListener('mouseleave',function(){
        for(item of wd_noti){
            item.classList.remove('show');

        }
    
    })

}


// dashboard pages show after cilicking menu items
const menuItems = document.querySelectorAll('.menu_box');
const menu_item = document.querySelectorAll('.menu_item');
const container = document.querySelectorAll('.page');

let menuIndex = {ind:0};



for(var i=0;i<menuItems.length;i++){
    menuItems[i].addEventListener('click',function(){
        for(var i=0;i<container.length;i++){
            container[i].classList.add('hide');
            menu_item[i].style.color = gray;
        }
        document.getElementById(this.dataset.id).classList.remove('hide');

        if(i=4){
            menuIndex.ind = 4;
            menu_item[menuIndex.ind].style.color = dataColor.color;
        }
        
        // acad_menu.classList.remove('collapse');

    })
    
}




for(var i=0;i<menu_item.length;i++){
    menu_item[i].addEventListener('click',function(){

        for(item of menu_item){
            item.style.color = gray;

        }
        menuIndex.ind = parseFloat(this.dataset.ind);
        menu_item[menuIndex.ind].style.color = dataColor.color;    

    }) 
}
function activeColor(){
    menu_item[menuIndex.ind].style.color = dataColor.color;
}

for(item of hover_items){
    item.addEventListener('mouseover',function(){
        this.style.color = hover_color.value;
        
    })
    item.addEventListener('mouseout',function(){
        this.removeAttribute('style');
    })
    
}

for(item of menu_item){
    item.addEventListener('mouseover',function(){
        this.children[0].style.color = hover_color.value;
        this.children[1].style.color = hover_color.value;
    })
    item.addEventListener('mouseout',function(){
        this.children[0].style.color = '';
        this.children[1].style.color = '';
    })
}


// menuItems.addEventListener('mouseleave')


// navigation bar start here 


// menu icon click & show menu bar
const menubtn = document.querySelectorAll('.menu_bar');
const menuBar = document.querySelectorAll('.menu');

for(item of menubtn){
    item.addEventListener('click',function(){
        for(item of menuBar){
            item.classList.toggle('move');

        }
        for(item of container){
            item.classList.toggle('l_padding');
        }
    })
    
}


// for(item of menuItems){
//     item.addEventListener('mouseover',function(){
//         dbc_color();
//     })
// }
// navigation bar end here 

// giving dainamic color function
let wd_color = document.querySelectorAll('.wd_color');
let wdl_color = document.querySelectorAll('.wdl_color');

function dbg_color(color,black){
    // let darkcolor = '#232223';

    for(item of wdl_color){
        item.style.background = color;

    }
    for(item of wd_color){
        item.style.background = black;

    }
}
// academic section js start

// academic box click and menu area show
const acad_box = document.querySelectorAll('.acad_box');
const acad_menu = document.querySelectorAll('.acad_menu');

for(item of acad_box){
    item.addEventListener('click',function(){
        for(item of acad_menu){
            item.classList.toggle('collapse');
        }
    })

}


// academic menu area
const course = document.querySelectorAll('.course');
const course_box = document.querySelectorAll('.course_box');

let coursIndex = {ind: 0};

for(item of course){
    item.addEventListener('click',function(){
        coursIndex.ind += 1;
    
        
        if(coursIndex.ind <= 1){
            for(item of course_box){
                item.classList.add('hieghtAnim1');
                item.classList.remove('hieghtAnim2');

            }
            for(item of course){
                item.children[0].style.transform = 'rotate(90deg)';

            }
            
        }else
        if(coursIndex.ind <= 2){
            for(item of course_box){
                item.classList.add('hieghtAnim2');
                item.classList.remove('hieghtAnim1');

            }
            for(item of course){
                item.children[0].style.transform = 'rotate(0deg)';
            }
            coursIndex.ind -= 2;
        }
    })

}


const applicate = document.querySelectorAll('.applicate');
const app_box = document.querySelectorAll('.app_box');

let appIndex = {ind: 0};

for(item of applicate){
    item.addEventListener('click',function(){
        appIndex.ind += 1;
    
        if(appIndex.ind <= 1){
            for(item of app_box){
                item.classList.add('hieghtAnim1');
                item.classList.remove('hieghtAnim2');

            }
            for(item of applicate){
                item.children[0].style.transform = 'rotate(90deg)';

            }
            
        }else
        if(appIndex.ind <= 2){
            for(item of app_box){
                item.classList.add('hieghtAnim2');
                item.classList.remove('hieghtAnim1');

            }
            for(item of applicate){
                item.children[0].style.transform = 'rotate(0deg)';

            }
    
            appIndex.ind -= 2;
        }
    })
    
}



// click batch button & show profile content & change password

let profileInd = {ind: 0}

const batch_btn = document.querySelectorAll('.batch_btn');
const underLine = document.querySelectorAll('.batch_btn span');
const prof_info = document.querySelectorAll('.prof_info');
const setting = document.querySelectorAll('.setting');



for(var i = 0;i< batch_btn.length;i++){
    batch_btn[i].addEventListener('click',function(){
        
        for(var i =0; i< prof_info.length;i++){
            underLine[i].removeAttribute('id','one');
            underLine[i].className = '';
            prof_info[i].className = 'prof_info hide';
        }
        // document.getElementById(this.dataset.prof).className = 'prof_info';
        this.children[0].setAttribute('id','one');
        document.getElementById(this.children[0].getAttribute('id')).className = 'active';
        
        profileInd.ind = parseFloat(this.dataset.prof);

        prof_info[profileInd.ind].className = 'prof_info';
        
        console.log(profileInd.ind)
    })
}

for(item of setting){
    
    item.addEventListener('click',function(){

        for(var i=0;i<prof_info.length;i++){
            prof_info[i].className = 'prof_info hide';
            underLine[i].className = '';
        }
        profileInd.ind = parseFloat(this.dataset.prof);
        prof_info[profileInd.ind].className = 'prof_info';
        underLine[profileInd.ind].className = 'active';

        console.log(profileInd.ind);
    })
}


// remove class function

const removeObj = document.querySelectorAll('.removeClass');
   
for(item of removeObj){
    item.addEventListener('click',function(){
        
        for(item of window_box){
            item.classList.remove('show');
        }
        for(item of ball_noti){
            item.classList.remove('show');
        }

        for(item of Stud_menu){
            item.classList.remove('show');
        }

        for(item of themeColors){
            item.classList.remove('moving');
        }
        for(item of acad_menu){
            item.classList.remove('collapse');
        }

    },true)
}
   
