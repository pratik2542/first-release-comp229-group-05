/*
 Group Name: Modern Developers
Student Name - Student ID
1. Meetkumar Patel - 301220141
2. Prit Patel - 301219548
3. Kinjalkumari Dhimmar - 301239901
4. Pratiksinh Makwana - 301219863
5. Sohyeon Song - 301145311
*/



exports.home = function(req, res, next) {
    res.render('index', { 
        title: 'Home',
        userName: req.user ? req.user.username : '' 
 });
}

exports.about = function(req, res, next) {
    res.render('index', { title: 'About',
    userName: req.user ? req.user.username : ''
});
}

exports.services = function(req, res, next) {
    res.render('index', { title: 'Services',
    userName: req.user ? req.user.username : ''
 });
}

exports.contact = function(req, res, next) {
    res.render(
        'index', 
        { 
            title: 'Contact Me',
            userName: req.user ? req.user.username : '' 
        }
    );
}


