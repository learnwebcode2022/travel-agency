import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.siteHeader = $(".site-header");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this)); // bind(this) is used to make sure that the 'this' keyword refers to the class and not the element that was clicked.
        //console.log(this);
    }

    toggleTheMenu() {
        //console.log("The icon was clicked.");
        //console.log(this); 
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;