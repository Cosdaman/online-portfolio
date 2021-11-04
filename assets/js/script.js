console.log("js script connected")

//projects data

//==================
//new entry template
//==================
//
// {
//     type: '',
//     name: '',
//     description: "",
//     screenshotLink: '',
//     repoLink: '',
//     liveLink: '',
// },

const projects = [
    {
        type: 'normal',
        name: 'Discord Event Builder',
        description: "This application is designed to help users with event announcements for discord.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/140001467-617b6057-fbe9-4f20-af6e-640697702539.png',
        repoLink: 'https://github.com/Cosdaman/DiscordEventBuilder',
        liveLink: 'https://cosdaman.github.io/DiscordEventBuilder/',
    },
    {
        type: 'normal',
        name: 'Weather Dashboard',
        description: "This is a basic weather dashboard that is meant to showcase the developer's recently learned skills in third party web APIs.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/138566576-b1711bf6-e2f4-42b5-bb18-547c963fa4db.png',
        repoLink: 'https://github.com/Cosdaman/BCHW6-WeatherDashboard',
        liveLink: 'https://cosdaman.github.io/BCHW6-WeatherDashboard/',
    },

    {
        type: 'normal',
        name: 'Day Planner',
        description: "This is a day planner utilizing Bootstrap, JQUERY, and 3rd-party APIs.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/137196650-13721e26-9c5a-4a7b-b15d-b88f39a52b28.png',
        repoLink: 'https://github.com/Cosdaman/BCHW5-DayPlanner',
        liveLink: 'https://cosdaman.github.io/BCHW5-DayPlanner/',
    },
    {
        type: 'featured',
        name: 'Impulse Flights',
        description: "This is an application built by a team which utilizes two separate third-party APIs to display data to the user.",
        screenshotLink: 'https://github.com/Williamskj/Project-01/raw/main/assets/screenshots/LandingView.PNG',
        repoLink: 'https://github.com/Williamskj/Project-01',
        liveLink: 'https://williamskj.github.io/Project-01/'
    },
];

//project display initialization
for (let i = 0; i < projects.length; i++) {
    if (projects[i].type === 'featured') {
        $("#featuredImg").attr("src", projects[i].screenshotLink);
        $("#featuredTitle").text(projects[i].name);
        $("#featuredDescription").text(projects[i].description);
        $("#featuredRepoLink").attr("href", projects[i].repoLink);
        $("#featuredLiveLink").attr("href", projects[i].liveLink);
    } else {
        let divEl = $("<div>").addClass('card text-center');
        let imgEl = $("<img>").addClass('card-img-top');
        imgEl.attr("src", projects[i].screenshotLink);
        let divEl2 = $("<div>").addClass("card-body");
        let h5El = $("<h5>").addClass("card-title");
        h5El.text(projects[i].name);
        let pEl = $("<p>").addClass("card-text");
        pEl.text(projects[i].description);
        let divEl3 = $("<div>").addClass("btnDiv");
        let aEl = $("<a>").addClass("btn btn-secondary");
        aEl.attr("href", projects[i].repoLink);
        aEl.text("Link to Repo");
        let aEl2 = $("<a>").addClass("btn btn-secondary");
        aEl2.attr("href", projects[i].liveLink);
        aEl2.text("Link to Site");
        $("#otherProjects").append(divEl)
        divEl.append(imgEl);
        divEl.append(divEl2);
        divEl2.append(h5El);
        divEl2.append(pEl);
        divEl2.append(divEl3);
        divEl3.append(aEl);
        divEl3.append(aEl2);
    }

}
$(".btn-secondary").attr('target', '_blank');
