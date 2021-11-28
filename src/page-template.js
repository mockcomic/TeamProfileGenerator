
module.exports = data => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
      </div>
    </header>
    <main class="container my-5">
      ${createEmploye(data)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by ${data[0].name}</h3>
    </footer>
  </body>
  </html>
  `;
};

function createEmploye(data) {
  let output = '';
  data.forEach(data => {
      output += `<div>
      <header>${(data.name)}
      <div>${(data.getRole())}</div></header>
      <div>
        <p>Employee ID: ${(data.id)}</p>
        <a href="mailto:${(data.email)}" >Email: ${(data.email)}</a> <br />
        ${options(data)}
      </div>
    </div>`;
  })
  return output;
}

function options(data) {
  if (data.getRole() === 'Manager')`<p>Office No.:${(data.officeNumber)}</p>`
  if (data.getRole() === 'Engineer')`<a href="http://github.com/${(data.github)}">GitHub:${(data.github)}</a>`
  if (data.getRole() === 'Intern') `<p>School:${(data.school)}</p>`;
}
