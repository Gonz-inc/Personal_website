// This function is used to get the home page.
const index = (req, res) => {
    res.render('index', {title: 'Home Page'});
};

// Exports the rendered respone in this case its the home page for index.js
module.exports = {
    index
};