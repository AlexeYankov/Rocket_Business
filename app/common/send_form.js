async function sendFrom(event) {
    alert('is sended')
    event.preventDefault()
    const tel = document.getElementById('tel').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    const name = document.getElementById('name').value
    const contactData = {
        tel, email, message, name
    }
    await fetch('https://php-vercel-silk.vercel.app/server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(contactData)
      });

      let result = await response.json();
  alert(result.message);
}