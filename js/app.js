var ViewModel = function () {
    var self = this;
    this.currentCat = ko.observable(new Cat());
    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    }
};

var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.nickNames = ko.observableArray([
        'cute',
        'ball',
        'pitty',
        'white'
    ]);
    this.imgSrc = ko.observable('http://cosmouk.cdnds.net/15/42/1445004076-white-cat-bag.jpg');

    this.title = ko.computed(function () {
        var title;
        var clicks = this.clickCount();
        if (clicks > 20) {
            title = 'adult';
        } else if (clicks > 10) {
            title = 'infant';
        } else {
            title = 'born';
        }
        return title;
    }, this);
};
ko.applyBindings(new ViewModel());