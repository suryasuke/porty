const emailTemplate = (value)=>({
subject: `Thank you ${value.username}`,
html: `
<p>Hello, thank you for visiting my portfolio. If you need to contact me, feel free to send a direct message. Have a great day! 😊</p>
    <p>Click the button below to connect:</p>
        <div style="text-align: center;">
          <a href="https://wa.me/8110974040?text=Hi%20surya%20lets%20talk%20about%20your%20projects!" style="
            display: inline-block;
            width: 100px;
            padding: 10px 0;
            font-size: 16px;
            color: #fff;
            background-color: #007BFF;
            text-decoration: none;
            border-radius: 5px;
          ">Click Here</a>
        </div>
    <p>Thank you!</p>
      `,

})

export default emailTemplate; 