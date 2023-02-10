/// login page js start 
// login area selection

const login_card = document.querySelectorAll('.login_card');
const logo = document.querySelectorAll('.logo');
const loginSide = document.querySelectorAll('.login-side');
const formButton = document.querySelectorAll('.form-bottom button');



// theme colors area selection
const themeColors = document.querySelectorAll('.theme_colors');
const themeDirChange = document.querySelectorAll('.theme_colors.dir_change');
const colorBtn= document.querySelectorAll('.theme_color');
const hoverBg = document.querySelectorAll('.theme_color .bg');
const lightColorBtn= document.querySelectorAll('.light_theme .theme_color');
const darkColorBtn= document.querySelectorAll('.dark_theme .theme_color');
const themeButton = document.querySelectorAll('.theme-button');
const d_bg = document.querySelectorAll('.d_bg');
const d_color = document.querySelectorAll('.d_color');





// common radio Selection
const radio = document.querySelectorAll('.radio');
 

let black = '#1B191B';
let darkColor = '#232223';
let lightColor = '#fff';
let lightGray = '#F8F8F8';
let gray = '#96968E';
let colorText = document.querySelector('.colorText');

// create Object

let hover_color = {value:"#145388"};
let dataColor = {color:"#145388"};
let index_num = {ind: 0};
let gray_d = {color:'#96968E'};








// theme buttom clicked function

for( item of themeButton){
    item.addEventListener('click',function(){
        for(item of themeColors){

            item.classList.toggle('moving');
        }
        for(item of themeDirChange){

            item.classList.toggle('moving');
        }
        // themeDirChange.classList.toggle('moving');
    })

}


// theme_color btn active background start

// console.log(hoverBg);
for(var i=0; i<colorBtn.length;i++){
    // hoverBg[i].className = 'bg';
    
    colorBtn[i].addEventListener('click',function(){
        
        hoverBg.forEach(function(e){
            e.removeAttribute('id','shown');
            e.className = 'bg';   
        })
        this.children[0].setAttribute('id','shown');
        document.getElementById(this.children[0].getAttribute('id')).className = 'bg active';
        
    })
}



// giving dark color and color changing



for(var i = 0;i<darkColorBtn.length;i++){
    darkColorBtn[i].style.background = darkColorBtn[i].getAttribute('data-color');
    
    // giving dark color by theme color buttom
    darkColorBtn[i].addEventListener('click',function(){

        dataColor.color = this.getAttribute('data-color');

        // dark colors btn hover effect

        
        index_num.ind = parseFloat(this.getAttribute('data-num'));
        console.log(index_num.ind);
        
        // theme and form button changing color
        for(item of d_color){
            item.style.color = dataColor.color;            
        }
        // check box making color
        for(item of d_bg){
            item.style.background = dataColor.color;
            
        }
        dbg_color(darkColor,black);
        hover_color.value = this.getAttribute('data-color');
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

        
        for(item of logo){
            item.children[0].setAttribute('src','../images/logo2.png')

        }

        
        
        
        
        colorBtn.forEach(function(e){
            
            e.classList.add('dark');
        })
        
        activeColor();
        


    })
}


function dbc_color(){
    for(item of colorText){
        item.style.color = hover_color.value;

    }
}



// giving light color and color changing
for(var i = 0;i<lightColorBtn.length;i++){
    lightColorBtn[i].style.background = lightColorBtn[i].getAttribute('data-color');
    // giving light color by theme color buttom
    lightColorBtn[i].addEventListener('click',function(){

        dataColor.color = this.getAttribute('data-color');

        
        index_num.ind = parseFloat(this.getAttribute('data-num'));
        console.log(index_num.ind);

        
        // theme and form button changing color
        for(item of d_color){
            item.style.color = dataColor.color;
            
        }
        // check box making color
        for(item of d_bg){
            item.style.background = dataColor.color;
            
        }
        dbg_color(lightColor,lightGray);
        hover_color.value = this.getAttribute('data-color');

        for(item of wd_button){
            
            item.classList.remove('dark');
            item.style.border = '0px solid'+ hover_color.value;
        }
        for(item of point){
            item.style.background = lightColor;
        }
        for(item of wd_button2){
            
            item.style.zIndex = -1;
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
        
        for(item of logo){
            item.children[0].setAttribute('src','../images/logo.png');
            
        }
        
        activeColor();


        // login side making light


    })
}
// theme_color btn background end






    
// giving border radius start

// boder radius area selection

const round_value = document.querySelectorAll('.round_value');
const round = document.querySelectorAll('.round');
const flat = document.querySelectorAll('.flat');
const flat_value = document.querySelectorAll('.flat_value');


    for(item of round_value){
        item.addEventListener('click',function(){

            for(item of round){
                item.classList.add('active');
            }
    
            for(item of flat){
                item.classList.remove('active');
            }            
        
            // login card makign round
            for(item of login_card){
                item.style.borderRadius = 20+'px';

            }
        
            // form button round
            for(item of formButton){

                item.style.borderRadius = 30+'px';
            }
        
        
        })

    }
    
    for(item of flat_value){
        item.addEventListener('click',function(){
            
            for(item of round){
                item.classList.remove('active');

            }
    
            for(item of flat){
                item.classList.add('active');

            }
                
    
    
            // login card makign round
            for(item of login_card){
                item.style.borderRadius = 0+'px';
    
            }
        
            // form button round
            for(item of formButton){
    
                item.style.borderRadius = 0+'px';
            }
        
            // login card makign flat
        
            // login_card.style.borderRadius = 0+'px';
        
            // form button flat
            // formButton.style.borderRadius = 0+'px';
        })

    }


// giving border radius end 
// giving login box direction start

// direction area selection

const ltr_value = document.querySelectorAll('.ltr_value');
const ltr = document.querySelectorAll('.ltr');
const rtl_value = document.querySelectorAll('.rtl_value');
const rtl = document.querySelectorAll('.rtl');

for(item of ltr_value){
    item.addEventListener('click',function(){
        for(item of ltr){
            item.classList.add('show');

        }
        for(item of rtl){
            item.classList.remove('show');

        }
    
        // login card direction left to right
        for(item of login_card){
            item.classList.remove('dir_change');

        }
        for(item of themeColors){
            item.classList.remove('dir_change');

        }
    
        
    
    
    
    })

}

for(item of rtl_value){
    item.addEventListener('click',function(){
        for(item of ltr){
            item.classList.remove('show');

        }
        for(item of rtl){
            item.classList.add('show');

        }
        // login card direction left to right
        for(item of login_card){
            item.classList.add('dir_change');

        }
        for(item of themeColors){

            item.classList.add('dir_change');
        }
    
    })

}

// giving login box direction end 

// login form validation


function setError(id,error){
var element = document.getElementById(id);
element.getElementsByClassName('error')[0].innerHTML = error;
}


function clearForm(){
    var emailError = document.querySelector('.email');
    var passError = document.querySelector('.pass');

    emailError.innerHTML = 'E-mail';
    passError.innerHTML = 'Password';
}

function validateForm(){
    var returnVal = true;
    var mach_pass = "123456";

    clearForm();

    var email = document.forms['myform']['email'].value;

    if(email.length < 5){
        setError('email','The email field is required.');

        returnVal = false
    }
    
    var pass = document.forms['myform']['password'].value;

    if(pass.length < 2){
        setError('pass','The password field is required.');

        returnVal = false;
    }

    if(pass != mach_pass){
        setError('pass','invalid password.');

        returnVal = false;
    }

    return returnVal;
}


//********* */ login page js end

