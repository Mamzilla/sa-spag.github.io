window.onload = function() {
    $('.popup').popup();

    var ctx = document.getElementById("skill").getContext("2d");
    var chart = new Chart(ctx).Radar(skills, null);
}