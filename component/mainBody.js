console.log("This has the main body");

function body({heading,links,addedLink}) {
    console.log(`The main body is created with the heading ${heading} and links ${links}`)
    console.log(`Added one more link...${addedLink}`)
    console.log(`This is an additional statement....`)
}

body({heading:"Learning git",links:["link1","link2"],addedLink:"link3"});
