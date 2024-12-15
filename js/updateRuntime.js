// <!-- Add blog running time -->

(function() {
    let s1 = '2024-11-30'; //website start date
    s1 = new Date(s1.replace(/-/g, "/"));
    let s2 = new Date();
    let timeDifference = s2.getTime() - s1.getTime();

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('ds').innerHTML = days;
    document.getElementById('hs').innerHTML = hours;
    document.getElementById('ms').innerHTML = minutes;
})();
