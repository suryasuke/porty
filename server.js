

const pg = require('pg');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
const nodemailer = require ('nodemailer')



const app = express();
const port = 3000;

app.use(cors());
dotenv.config();

const db = new pg.Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: parseInt(process.env.PORT, 10) || 5432,
});

db.connect().catch(err => {
    console.error('Failed to connect to the database', err.stack);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(express.static('public'));

app.get('/content' , async (req,res)=>{
try{
    const result = await db.query("SELECT * FROM details");
    res.json(result.rows);
}catch(err){
    res.status(500).json({message : "error in fetch"})
}
});

app.post('/content' , async (req,res)=>{
   

     const {value , timestamp} = req.body ; 
     
   
    try {
        const result = await db.query(
            'INSERT INTO details (name, content , timestamp , gender , mail) VALUES ($1, $2 ,$3 ,$4 ,$5) RETURNING *',
            [value.username , value.content , timestamp ,value.Gender ,value.email]
        );
        res.json(result.rows[0]); 

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASS ,
            }
          });
          
          var mailOptions = {
            from: process.env.EMAIL,
            to: value.email ,
            subject: `Thank you ${value.username}`,
            text: `Thank you for visiting my portfolio 😀."}`,
            html: `
            <p>Hello, thank you for visiting my portfolio.If you need to contact me, feel free to send me a direct message. Have a great day!😊.</p>
            <p>Please click the button below:</p>
            <div style="text-align: center;">
              <a href="https://wa.me/8110974040?text=Hi%20surya%20lets%20talk%20about%20your%20projects!" style="
                display: inline-block;
                width: 100px;
                padding: 10px 0;
                font-size: 16px;
                color: #fff;
                background-color: #007BFF;
                text-decoration: none;
                text-align: center;
                border-radius: 5px;
              ">Click Here</a>
            </div>
            <p>Thank you!</p>
          `,          
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
            
          });
    } catch(err){
    res.status(500).json({message : "error in insert"})
}

}
);

app.listen(port , ()=>{
    console.log("listeing on port" , port)
})