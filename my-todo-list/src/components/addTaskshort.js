const addTask = () => {
    const id = 'myDiv';
    const container = document.getElementById('container2');
    const divElement = document.createElement('div');
    divElement.id = id;
    divElement.innerHTML = `
      <h1>Hello, World!</h1>
      <p>This is a dynamically created div element.</p>
      `;
  
    container.appendChild(divElement);
  };
  pick_btnAdd.addEventListener('click', addTask);