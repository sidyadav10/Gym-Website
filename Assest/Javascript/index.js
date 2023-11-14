let navlist = document.querySelector(".navlist");
let header = document.querySelector("header")
        let menu = document.querySelector(".menubar");
        
        menu.addEventListener("click",()=>{
            menu.classList.toggle("click")
            navlist.classList.toggle("active")
        });
        navlist.addEventListener("click",(e)=>{
            let active = document.querySelector(".select");
            console.log(active)
            if(active){
                active.classList.remove("select");
                menu.classList.remove("click")
            }
          
            e.target.classList.add("select");
            navlist.classList.remove("active")
            
        });
        window.addEventListener("scroll",()=>{
            if(window.scrollY >640){
                header.classList.add("sticky")
            }else{
                header.classList.remove("sticky")

            }
        })
       