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
//     repoLink: ''
// },

const projects = [
    {
        type: 'normal',
        name: 'Weather Dashboard',
        description: "This is a basic weather dashboard that is meant to showcase the developer's recently learned skills in third party web APIs.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/138566576-b1711bf6-e2f4-42b5-bb18-547c963fa4db.png',
        repoLink: 'https://github.com/Cosdaman/BCHW6-WeatherDashboard'
    },
    {
        type: 'normal',
        name: 'Code Quiz',
        description: "This is a basic code quiz utilizing some advanced topics of javascript.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/136621768-f17ce87f-166c-421b-bb3e-15c24226809c.png',
        repoLink: 'https://github.com/Cosdaman/BCHW4-WebAPI-CodeQuiz'
    },
    {
        type: 'normal',
        name: 'Day Planner',
        description: "This is a day planner utilizing Bootstrap, JQUERY, and 3rd-party APIs.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/137196650-13721e26-9c5a-4a7b-b15d-b88f39a52b28.png',
        repoLink: 'https://github.com/Cosdaman/BCHW5-DayPlanner'
    },
    {
        type: 'normal',
        name: 'Password Generator',
        description: "This project is aimed to demonstrate the developer's understanding of basic javascript.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/134982354-fec98408-e1ff-446b-b8c5-f17605205edf.png',
        repoLink: 'https://github.com/Cosdaman/bootcampHW3-JavascriptPWGen'
    },
    {
        type: 'normal',
        name: 'Discord Event Builder',
        description: "This application is designed to help users with event announcements for discord.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/140001467-617b6057-fbe9-4f20-af6e-640697702539.png',
        repoLink: 'https://github.com/Cosdaman/DiscordEventBuilder'
    },
    {
        type: 'featured',
        name: 'Impulse Flights',
        description: "This is an application built by a team which utilizes two separate third-party APIs to display data to the user.",
        screenshotLink: 'https://github.com/Williamskj/Project-01/raw/main/assets/screenshots/LandingView.PNG',
        repoLink: 'https://github.com/Williamskj/Project-01'
    },
];

//project display initialization
for (let i = 0; i < projects.length; i++) {
    if (projects[i].type === 'featured') {
        console.log("featured");
        $("#featuredImg").attr("src", projects[i].screenshotLink);
        $("#featuredTitle").text(projects[i].name);
        $("#featuredDescription").text(projects[i].description);
        $("#featuredLink").attr("href", projects[i].repoLink);
    } else {
        let divEl = $("<div>").addClass('card text-center');
        let imgEl = $("<img>").addClass('card-img-top');
        imgEl.attr("src", projects[i].screenshotLink);
        let divEl2 = $("<div>").addClass("card-body");
        let h5El = $("<h5>").addClass("card-title");
        h5El.text(projects[i].name);
        let pEl = $("<p>").addClass("card-text");
        pEl.text(projects[i].description);
        let aEl = $("<a>").addClass("btn btn-primary");
        aEl.attr("href", projects[i].repoLink);
        aEl.text("Link to Repo")
        $("#otherProjects").append(divEl)
        divEl.append(imgEl);
        divEl.append(divEl2);
        divEl2.append(h5El);
        divEl2.append(pEl);
        divEl2.append(aEl);
        console.log("not featured")
    }
}
