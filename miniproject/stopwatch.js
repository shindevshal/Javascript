var timer = true;  
        var sec = 0,hr=0,min=0;   
        var second = document.getElementById('sec')
        var minute = document.getElementById('min')
        var hour = document.getElementById('hr')

        function clock(){           
            sec = sec+1;             
            if(sec==60){            
                    min = min+1
                    minute.innerText=min;   
                    sec=0;
            }
            else if(min ==60)   
                {
                    hr = hr+1
                    hour.innerText=hr;  
                    min = 0;
                }
            second.innerText=sec; 
        }
        
        function start(){       
            if (timer) {   
            window.intervalClock=setInterval(clock,1000) ;      
            timer=false;
            }  
            else{
                console.log("Already Started"); 
            }
        }
        
        function reset(){       
            hr=0;
            min=0;
            sec=0;

            second.innerText=0;
            minute.innerText=0;
            hour.innerText=0
            clearInterval(window.intervalClock);
            timer=true;

        }

        function stop(){    
            clearInterval(window.intervalClock);
            timer=true;
        } 