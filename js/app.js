var initialCats = [
    {
        clickCount: 0,
        name: 'missy',
        imgSrc: 'http://cosmouk.cdnds.net/15/42/1445004076-white-cat-bag.jpg',
        nickNames: ['pitty', 'chucky', 'missy', 'cuqui']
    },
    {
        clickCount: 0,
        name: 'isir',
        imgSrc: 'http://www.catster.com/wp-content/uploads/2015/06/can-cats-eat-peanut-butter-02.jpg',
        nickNames: ['osris']
    },
    {
        clickCount: 0,
        name: 'garfield',
        imgSrc: 'http://s5.favim.com/orig/51/animals-cats-cute-feline-photography-Favim.com-551634.jpg',
        nickNames: ['orange', 'orange ball']
    },
    {
        clickCount: 0,
        name: 'chuck',
        imgSrc: 'http://cosmouk.cdnds.net/15/42/1445004076-white-cat-bag.jpg',
        nickNames: ['leprosy']
    },
    {
        clickCount: 0,
        name: 'rya',
        imgSrc: 'http://stuffpoint.com/cats/image/87009-cats-cute-cat.jpg',
        nickNames: ['sun god', 'pitty', 'sweet']
    }
];
var ViewModel = function () {
    var self = this;
    this.catsList = ko.observableArray([]);
    initialCats.forEach(function(cat) {
       self.catsList.push(new Cat(cat));
    });
    this.currentCat = ko.observable(this.catsList()[0]);
    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    }
};

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.nickNames = ko.observableArray(data.nickNames);
    this.imgSrc = ko.observable(data.imgSrc);

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