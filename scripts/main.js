const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//Exercise 1
const firstP = document.createElement('p');
firstP.textContent = "Hey I'm Red!";
firstP.setAttribute('style', 'color:red');

container.appendChild(firstP);

//Exercise 2 
const newH3 = document.createElement('h3');
newH3.textContent = "I'm a blue h3!";
newH3.setAttribute('style','color: blue');

container.appendChild(newH3);

//Exercise 3 
const newDiv = document.createElement('div');
newDiv.setAttribute('style', 'border: 1px; border-style: solid');
 
const newH1 = document.createElement('h1');
newH1.textContent = "I'm in a div!";

const secondP = document.createElement('p');
secondP.textContent = "I'm also in a div!"

newDiv.append(newH1);
newDiv.append(secondP);
container.append(newDiv);
  