$(document).ready(applyLinks)
function applyLinks() {
    $('#homeLink').click(navHome)
    $('.nav-projects').click(navProjects)
}
function navHome() {
    $('#projects').hide();
    $('#home').show();
}
function navProjects() {
    $('#home').hide();
    $('#projects').show();
}
