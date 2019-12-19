
const GitHub = require('github-api');
const inquirer = require("inquirer");
const fs = require("fs");
const pdf = require('html-pdf');

var token = process.env.GHAPITOKEN;
var gh = new GitHub({
    token: token
});

const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your favorite color?",
        name: "color"
    }
]

// generate profile
function generate_profile() {
    inquirer
        // get username and favorite color
        .prompt(questions)
        .then(function (response) {

            let me = gh.getUser(response.username);
            let repos = me.listRepos();
            let profile = me.getProfile()

            // get profile and repos
            Promise.all([repos, profile]).then(function (values) {

                // create profile_data
                let profile_data = {
                    profile_pic_url: values[1].data.avatar_url,
                    full_name: values[1].data.name,
                    user_name: values[1].data.login,
                    location: values[1].data.location,
                    google_map_link: `https://www.google.com/maps/place/${values[1].data.location}`.replace(/\s+/g, "+"),
                    github_profile_link: values[1].data.html_url,
                    blog_link: values[1].data.blog,
                    bio: values[1].data.bio,
                    num_repos: values[1].data.public_repos,
                    num_followers: values[1].data.followers,
                    num_stars: 0,
                    num_following: values[1].data.following,
                    color: response.color
                }

                values[0].data.forEach(repo => {
                    profile_data.num_stars += parseInt(repo.stargazers_count)
                })

                //console.log(profile_data);

                // update html and css

                let filename = `${profile_data.user_name}_profile.html`
                let filename_pdf = `./${profile_data.user_name}_profile.pdf`


                    let new_html = fs.readFileSync("./template.html", "utf8")

                    new_html = new_html
                        .replace(/\$\{profile_data.profile_pic_url\}/g, profile_data.profile_pic_url)
                        .replace(/\$\{profile_data.full_name\}/g, profile_data.full_name)
                        .replace(/\$\{profile_data.user_name\}/g, profile_data.user_name)
                        .replace(/\$\{profile_data.location\}/g, profile_data.location)
                        .replace(/\$\{profile_data.google_map_link\}/g, profile_data.google_map_link)
                        .replace(/\$\{profile_data.github_profile_link\}/g, profile_data.github_profile_link)
                        .replace(/\$\{profile_data.blog_link\}/g, profile_data.blog_link)
                        .replace(/\$\{profile_data.bio\}/g, profile_data.bio)
                        .replace(/\$\{profile_data.num_repos\}/g, profile_data.num_repos)
                        .replace(/\$\{profile_data.num_followers\}/g, profile_data.num_followers)
                        .replace(/\$\{profile_data.num_stars\}/g, profile_data.num_stars)
                        .replace(/\$\{profile_data.num_following\}/g, profile_data.num_following)
                        .replace(/\$\{profile_data.color\}/g, profile_data.color)

                    let options = { format: 'Landscape' };

                    pdf.create(new_html, options).toFile(filename_pdf, function (err, res) {
                        if (err) return console.error(err);
                    });

                    fs.writeFile(filename, new_html, (err) =>{
                        if(err){
                            console.error(err)
                        }
                    })

            });


        }).catch(err => console.error(err));


};

generate_profile()
