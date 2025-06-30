import React, { useState, useEffect } from 'react';
import '../Feedback/Feedback.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FaceIcon from '@mui/icons-material/Face';
import Face3Icon from '@mui/icons-material/Face3';

function Feedback(props) {
  const [win, setWin] = useState(false);
  const [drag, setDrag] = useState(false);
  const [submitteds, setSubmit] = useState(false);
  const [Animated, setAnimation] = useState(false);

  const [likes, setLikes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('likes')) || {};
    } catch {
      localStorage.removeItem('likes');
      return {};
    }
  });

  const [count, setCount] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('count')) || {};
    } catch {
      localStorage.removeItem('count');
      return {};
    }
  });

  const [value, setValue] = useState({
    username: "",
    content: "",
    Gender: "",
    email: ""
  });

  const { onadd, note } = props;

  const clicked = () => setDrag(prev => !prev);

  const getRelativeTime = (timestamp) => {
    const now = new Date();
    const utcDate = new Date(timestamp);
  
  const localOffset = utcDate.getTimezoneOffset() * 60000;
  const then = new Date(utcDate.getTime() - localOffset);
    const seconds = Math.floor((now - then) / 1000);

    if (seconds < 60) return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  };

  const submitted = (e) => {
    e.preventDefault();

    if (
      value.username.trim() === "" ||
      value.content.trim() === "" ||
      value.Gender.trim() === "" ||
      value.email.trim() === ""
    ) {
      alert("Please fill out all the fields.");
      return;
    }

    const timestamp = new Date().toISOString();
    onadd({ id: Date.now(), ...value, timestamp });
    setSubmit(true);

    setTimeout(() => setSubmit(false), 4000);

    setValue({ username: "", content: "", Gender: "", email: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(prev => ({ ...prev, [name]: value }));
  };

  const toggleLike = (id) => {
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
    increaseCount(id);
  };

  const increaseCount = (id) => {
    setCount(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + (likes[id] ? -1 : 1),
    }));
  };

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [count, likes]);

  useEffect(() => {
    const handleScroll = () => setWin(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      <div className='whole-contain'>
        {submitteds && (
          <div id='thank'>
            <p>Your form submitted, please check your spam mail</p>
          </div>
        )}
        <div className={`login-container ${drag ? 'draged' : ''}`}>
          <div className='title-contains'>
            <h1>Feedback</h1>
            <p style={{ fontWeight: 'bold' }} onClick={clicked}>
              {drag ? 'Close' : 'Give Feed'}
            </p>
          </div>

          {drag && (
            <form onSubmit={submitted} className='forms'>
              <input
                onChange={handleChange}
                value={value.username}
                placeholder='Your name'
                className='input1'
                type='text'
                name='username'
              />
              <input
                onChange={handleChange}
                value={value.email}
                placeholder='Email'
                className='input1'
                type='text'
                name='email'
              />
              <select
                id='gender'
                name='Gender'
                value={value.Gender}
                onChange={handleChange}>
                <option value='' disabled>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
              <textarea
                className='texty'
                onChange={handleChange}
                value={value.content}
                placeholder='Write your feedback...'
                name='content'
                id='text-area'
              ></textarea>
              <button
                className={`btn submit-feed-btn ${Animated ? 'animated' : ''}`}
                onMouseEnter={() => setAnimation(true)}
                onMouseLeave={() => setAnimation(false)}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>

      <div className='feed-tit'>
        <h2>Recent feedbacks</h2>
      </div>

      <div className='no-feed'>
        {Array.isArray(note) && note.length > 0 ? (
          note.map((item) => (
            <div key={item.id} id='feedbacks'>
              <div className='feedbacks'>
                <div className='feed-title'>
                  <div id='abso'>
                    <h2>{(item.gender || item.Gender) === "male" ? <FaceIcon /> : <Face3Icon />}</h2>
                    <h3>{item.name}</h3>
                  </div>
                </div>
                <p className='icons-like' onClick={() => toggleLike(item.id)}>
                  {likes[item.id] ? (
                    <FavoriteIcon style={{ color: 'red' }} />
                  ) : (
                    <FavoriteBorderIcon style={{ color: 'red' }} />
                  )}
                  <p className='counts'>{count[item.id] || 0}</p>
                </p>
                <p className='content'>{item.content}</p>
                <p className='timestamp'>{getRelativeTime(item.timestamp)}</p>
              </div>
            </div>
          ))
        ) : (
          <p id='no-feed'>No feedback yet.</p>
        )}

        {win && (
          <div className='scroll-effect'>
            <div className='scroll-to-top-wrapper'>
              <div className='rotating-border'></div>
              <button onClick={scrollToTop} className='scroll-to-top-btn'>
                <span className='Span-icon'><KeyboardArrowUpIcon /></span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Feedback;
