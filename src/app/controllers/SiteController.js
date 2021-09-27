
class SiteController {

    //[GET] to home page
    home(req, res) {
        res.render('home');
    }

    //[GET] to /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController();