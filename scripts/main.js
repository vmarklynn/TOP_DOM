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



  