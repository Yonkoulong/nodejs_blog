const newsRouter = require('./news');
        const siteRouter = require('./site');

function route(app) {
    //homepage
            app.get('/', siteRouter);
    app.get('/search', siteRouter);

    // newpage
    app.use('/new', newsRouter);
    
}
module.exports = route;