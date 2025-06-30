

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
import { createClient } from '@supabase/supabase-js'




const app = express();
const port = process.env.PORT || 3000; 


app.use(cors({
  origin: ['http://localhost:3000', 'https://suryachronicle.netlify.app'], 
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


// const db = new pg.Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const supabaseUrl = 'https://weoyrrotpitpvzuxayzd.supabase.co' ; 
const supabaseKey = process.env.SUPABASE_KEY ; 
const db = createClient(supabaseUrl, supabaseKey) ; 

app.get('/content', async (req, res) => {
  try {
    const { data, error } = await db
      .from('details')
      .select('*');

    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error("Error fetching notes:", err.message);
    res.status(500).json({ message: "error in fetch" });
  }
});



app.post('/content', async (req, res) => {
  const { value, timestamp } = req.body;

  try {
    const { data, error } = await db
      .from('details')
      .insert([{
        name: value.username,
        content: value.content,
        timestamp: timestamp,
        gender: value.Gender,
        mail: value.email,
      }])
      .select();

    if (error) throw error;
    res.json(data[0]);

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: "zmlc dsiv ibxc bhwg",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: value.email,
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
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.error('Email error:', error);
      else console.log('Email sent:', info.response);
    });

  } catch (err) {
    console.error("Error inserting note:", err.message);
    res.status(500).json({ message: "error in insert" });
  }
});


app.use((err, req, res, next) => {
  console.error('Global error handler:', err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
