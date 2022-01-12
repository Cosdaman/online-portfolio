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
        type: 'featured',
        name: 'Joint Effort',
        description: "This application will assist users in choosing a cannabis dispensary and a food truck near one another so that they can pick up both in a fast and efficient manner.",
        screenshotLink: 'https://raw.githubusercontent.com/mteubnerfoster/project-2-electric-boogaloo/main/public/assets/photos/jointefforthomepage.jpg',
        repoLink: 'https://github.com/mteubnerfoster/project-2-electric-boogaloo',
        liveLink: 'https://joint-effort-kohmm.herokuapp.com/',
    },
    {
        type: 'normal',
        name: 'Tech Blog',
        description: "This is a tech-blog that features user authentication, password hashing, and database usage. The website is deployed on Heroku, and uses JawsDB MySQL2 as its database.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/147687054-56968d86-3f6b-419c-8137-e2b52ca1a358.png',
        repoLink: 'https://github.com/Cosdaman/BCHW14-MVC',
        liveLink: 'https://bchw14mvc.herokuapp.com/',
    },
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
        type: 'normal',
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
