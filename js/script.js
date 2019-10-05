$(document).ready(applyLinks)
function applyLinks() {
    $('#homeLink').click(navHome)
    $('#projectsLink').click(navProjects)
}
function navHome() {
    $('#projects').hide();
    $('#home').show();
}
function navProjects() {
    $('#home').hide();
    $('#projects').show();
}
