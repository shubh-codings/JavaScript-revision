const html = document.querySelector('html')
html.style.boxSizing="border-box"
html.style.backgroundColor="black"
html.style.color="white"
const heading = document.getElementById('heading');

heading.style.color="green"

const container = document.querySelector(".container")

container.style.display="flex"
container.style.fontFamily="verdana"

const header = document.getElementById('header');

header.style.display="flex"
header.style.flexDirection="column"
header.style.padding="20px"
header.style.textAlign="center"
header.style.width="300px"
header.style.border="2px solid blue"
header.style.justifyContent="center"
header.style.alignItems="center"
header.style.flexWrap="no-wrap"

const secondHeading = document.querySelectorAll('h2')
secondHeading.forEach((heading)=>heading.style.color="red")


console.log(header.children[0].style.color="pink")