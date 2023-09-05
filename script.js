function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}




function select_a_song(){
    switch (random(1,10)) {
        case 1:
            window.open('https://www.youtube.com/watch?v=oozJH6jSr2U', '_blank');
            break;
        case 2:
            window.open('https://www.youtube.com/watch?v=f4Mc-NYPHaQ', '_blank');
            break;
        case 3:
            window.open('https://www.youtube.com/watch?v=t99KH0TR-J4', '_blank');
            break;
        case 4:
            window.open('https://www.youtube.com/watch?v=2zDYTzeaM3I', '_blank');
            break;
        case 5:
            window.open('https://www.youtube.com/watch?v=rY0WxgSXdEE', '_blank');
            break;
        case 6:
            window.open('https://www.youtube.com/watch?v=LRt2jX1kaYo', '_blank');
            break;
        case 7:
            window.open('https://www.youtube.com/watch?v=yPKlrRwJB8A', '_blank');
            break;
        case 8:
            window.open('https://www.youtube.com/watch?v=zO6D_BAuYCI', '_blank');
            break;
        case 9:
            window.open('https://www.youtube.com/watch?v=v3xwCkhmies', '_blank');
            break;
        case 10:
            window.open('https://www.youtube.com/watch?v=-tJYN-eG1zk', '_blank');
            break;
    
        default:
            window.open("upss", '_blank');
            break;
      }
}


//console.log(select_a_song());


