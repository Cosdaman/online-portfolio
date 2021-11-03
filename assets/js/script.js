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
        type: 'featured',
        name: 'Weather Dashboard',
        description: "This is a basic weather dashboard that is meant to showcase the developer's recently learned skills in third party web APIs.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/138566576-b1711bf6-e2f4-42b5-bb18-547c963fa4db.png',
        repoLink: 'https://github.com/Cosdaman/BCHW6-WeatherDashboard'
    },
    {
        type: 'solo',
        name: 'Code Quiz',
        description: "This is a basic code quiz utilizing some advanced topics of javascript.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/136621768-f17ce87f-166c-421b-bb3e-15c24226809c.png',
        repoLink: 'https://github.com/Cosdaman/BCHW4-WebAPI-CodeQuiz'
    },
    {
        type: 'solo',
        name: 'Day Planner',
        description: "This is a day planner utilizing Bootstrap, JQUERY, and 3rd-party APIs.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/137196650-13721e26-9c5a-4a7b-b15d-b88f39a52b28.png',
        repoLink: 'https://github.com/Cosdaman/BCHW5-DayPlanner'
    },
    {
        type: 'solo',
        name: 'Password Generator',
        description: "This project is aimed to demonstrate the developer's understanding of basic javascript.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/134982354-fec98408-e1ff-446b-b8c5-f17605205edf.png',
        repoLink: 'https://github.com/Cosdaman/bootcampHW3-JavascriptPWGen'
    },
    {
        type: 'solo',
        name: 'Discord Event Builder',
        description: "This application is designed to help users with event announcements for discord.",
        screenshotLink: 'https://user-images.githubusercontent.com/3162991/140001467-617b6057-fbe9-4f20-af6e-640697702539.png',
        repoLink: 'https://github.com/Cosdaman/DiscordEventBuilder'
    },
    {
        type: 'team',
        name: 'Impulse Flights',
        description: "This is an application that utilizes two separate third-party APIs to display data to the user.",
        screenshotLink: 'https://github.com/Williamskj/Project-01/raw/main/assets/screenshots/LandingView.PNG',
        repoLink: 'https://github.com/Williamskj/Project-01'
    },
];


for (let i = 0; i < projects.length; i++) {
    if (projects[i].type === 'featured') {
        console.log("featured");
        $("#featuredImg").attr("src", projects[i].screenshotLink);
        $("#featuredTitle").text(projects[i].name);
        $("#featuredDescription").text(projects[i].description);
        $("#featuredLink").attr("href", projects[i].repoLink);
    }else{
        console.log("not featured")
    }

}