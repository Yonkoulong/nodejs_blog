
class NewsController {

    //[GET] /new
    news(req, res) {
        res.render('new');
    }

    // [GET] /new/:slug
    show(req, res) {
        res.render('detailnews');
    }

}

module.exports = new NewsController();