import dotenv from 'dotenv';
dotenv.config();

import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';

const {Client} = pg;
const app = express();
const port = process.env.PORT || 3000; // ✅ Dynamic port for Railway/Render/Heroku

// ✅ Proper CORS config (add your Netlify frontend URL)
app.use(cors({
  origin: ['http://localhost:3000', 'https://gleaming-pie-c3c976.netlify.app'], // replace with your Netlify link
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// ✅ PostgreSQL setup
const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});


db.connect().catch(err => {
  console.error('❌ Failed to connect to the database:', err.stack);
});

const result = await db.query("SELECT current_database()");
console.log("✅ Connected to DB:", result.rows[0].current_database);

// ✅ GET request for feedback
app.get('/content', async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM details");
    res.json(result.rows);
  } catch (err) {
    console.error("❌ Error fetching notes:", err);
    res.status(500).json({ message: "error in fetch" });
  }
});

// ✅ POST request to add feedback
app.post('/content', async (req, res) => {
  const { value, timestamp } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO details (name, content, timestamp, gender, mail) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [value.username, value.content, timestamp, value.Gender, value.email]
    );

    res.json(result.rows[0]);

    // ✅ Send email after inserting
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
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
      else console.log('✅ Email sent:', info.response);
    });

  } catch (err) {
    console.error("❌ Error inserting note:", err);
    res.status(500).json({ message: "error in insert" });
  }
});

// ✅ Catch-all route for 502 or unknown issues
app.use((err, req, res, next) => {
  console.error('❌ Global error handler:', err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// ✅ Start server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
