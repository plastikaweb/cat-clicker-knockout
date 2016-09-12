var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.level = ko.observable('Born');
    this.imgSrc = ko.observable('http://cosmouk.cdnds.net/15/42/1445004076-white-cat-bag.jpg');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
        if (this.clickCount() > 20) {
            this.level('adult');
        } else if(this.clickCount() > 10) {
            this.level('infant');
        }
    }
};
ko.applyBindings(new ViewModel());