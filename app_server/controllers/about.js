/*  This file hold 'controller' files which servers as a way 
    to declare functions that link to specified pages.  
*/

// Controller for the about page. 
const about = (req, res) => {
    res.render('index', {title: 'about'});
};

// Controller for the contact page.
const contact = (req, res) => {
    res.render('index', {title: 'contact'});
};

// Controller for the projects page.
const projects = (req, res) => {
    res.render('index', {title: 'projects'});
}

module.exports = {
    about,
    contact,
    projects
};