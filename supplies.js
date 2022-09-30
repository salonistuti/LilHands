var inputs = ['s6', 's7', 's8', 's9', 'im', 'ih', 'im2', 'th', 'ca', 'av', 'im3', 'th2', 'ca2', 'gg', 'av2', 'am', 'ca3', 'ds', 'gg2', 'sm', 'th3', 'bp', 'av3'];

function save(id) {
    var checkbox = document.getElementById(id);
    localStorage.setItem('ggtz-' + id, checkbox.checked);
    update();
}

function load() {
    inputs.forEach(function (item) {
        var checked = JSON.parse(localStorage.getItem('ggtz-' + item));
        document.getElementById(item).checked = checked;
    });
}

function update() {
    var currentlyWatched = document.querySelectorAll('input[type="checkbox"]:checked').length;
    var totalMovies = inputs.length;
    var watchedPercentage = ((100 * currentlyWatched) / totalMovies).toFixed(2);
    var bgColor;
    var tweetText = 'https://twitter.com/intent/tweet?text=I%20watched%20' + watchedPercentage + '%25%20of%20Marvel%20Cinematic%20Universe!%20Check%20yours%20at%20https%3A%2F%2Fcodepen.io%2Fguiguetz%2Ffull%2FKoNvwo%2F%20(via%20%40npmguilherme)';

    if (watchedPercentage >= 0 && watchedPercentage < 25) {
        bgColor = 'red';
    } else if (watchedPercentage >= 25 && watchedPercentage < 50) {
        bgColor = 'orange';
    } else if (watchedPercentage >= 50 && watchedPercentage < 75) {
        bgColor = 'yellow';
    } else if (watchedPercentage >= 75 && watchedPercentage < 100) {
        bgColor = 'green';
    }

    document.getElementById('watchedPercentage').innerText = watchedPercentage;
    document.getElementById('progress').style.width = watchedPercentage + '%';
    document.getElementById('progress').style.backgroundColor = bgColor;
    document.getElementById('twitter-share').href = tweetText;
}

load();
update();