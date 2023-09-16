console.log(`This is a content page`);

function content({main,sub}) {
    console.log(`This is the main content...${main}`);
    console.log(`This is the sub content...${sub}`);
}

content({main:"main-page.html",sub:"sub-page.html"});