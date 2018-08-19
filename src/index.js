import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import timer3 from './images/timer3.png';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

{/*------------------Using Plain Javascript--------------------------------------


function countdown(){
  console.log("inside countDown function");
  var countDownDate = new Date("Dec 24, 2018 23:59:01").getTime();
  console.log(countDownDate);

  var x= setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    console.log('distance is ',distance);
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    var seconds = Math.floor((distance % (1000*60))/1000);
    document.getElementById("root1").innerHTML = days + "Days"+ hours +"Hours"
    +minutes+"Minutes"+seconds+"Seconds";

    if(distance<0){
        clearInterval(x);
        document.getElementById("root1").innerHTML = "EXPIRED";
    }
  },1000);
}
countdown();
ReactDOM.render(
    <countdown/>,
    document.getElementById("root1")
);

---------------------------------------------------------------------------*/}


class Countdown extends React.Component{
    render(){
        var countDownDate = new Date("Jan 01, 2019 15:10:01").getTime();
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance/(1000*60*60*24));
        var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
        var seconds = Math.floor((distance % (1000*60))/1000);
        if(distance<0){
            clearInterval(tick);
            return (
                <h1>EXPIRED!!!</h1>
            );
        }
        else{
            return (
                <div>
                <h1 style={{fontSize:68}}>{days} Days {hours} Hours {minutes} Minutes {seconds} Seconds</h1>
                <img src={timer3} alt="" style = {{height:224}}/>
                </div>
            );
        }
        
    }
}
function tick(){

ReactDOM.render(<Countdown/>,
document.getElementById('root')
);
}
setInterval(tick,1000);                            



















