async function sendFrom(event) {
    // alert('is sended')
    event.preventDefault()
    const tel = document.getElementById('tel').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    const name = document.getElementById('name').value
    const contactData = {
        tel, email, message, name
    }
    try {
    await fetch('https://localhost:8000/server.php', {
    // await fetch('https://php-vercel-silk.vercel.app/server.php', {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(contactData),
      }).then((res)=> {
        getForm()
        let result = res.json();
        console.log(result)
    })
  }
  catch (err) {
    console.log(err)
  }
}