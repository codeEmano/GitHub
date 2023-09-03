console.log("This has the main body");

function body({heading,links}) {
    console.log(`The main body is created with the heading ${heading} and links ${links}`)
}

body({heading:"Learning git",links:["link1","link2"]});