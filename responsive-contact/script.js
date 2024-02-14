document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Lấy dữ liệu từ form
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var message = document.getElementById("messageInput").value;

    // Tạo một đối tượng để chứa dữ liệu
    var data = {
      name: name,
      email: email,
      message: message,
    };

    // Gửi dữ liệu đến JSON Server
    fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  });
/* ---------------------------- in ra console log --------------------------- */
fetch("http://localhost:3000/contacts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("Error:", error);
  });

/* ----------------------------- in ra màn hình ----------------------------- */

// fetch('http://localhost:3000/contacts')
//   .then(response => response.json())
//   .then(data => {
//     // Tạo một chuỗi HTML để chứa dữ liệu
//     let html = '';
//     data.forEach(contact => {
//       html += `<p>Name: ${contact.name}</p>`;
//       html += `<p>Email: ${contact.email}</p>`;
//       html += `<p>Message: ${contact.message}</p>`;
//       html += '<hr>';
//     });

//     // Thêm chuỗi HTML vào một phần tử có id là 'output'
//     document.getElementById('output').innerHTML = html;
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
