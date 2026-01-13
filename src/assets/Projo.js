import react from './Reactjs.png'
import js from './Javascript.png'
import nodejs from './Nodejs.png'
import motoko from './motoko.png'
import postman from './postman.png'

const projo =[
   {
    id : 1 , 
        name : "E-Commerce with React" , 
        des : " The Fishza e-commerce platform provides a seamless shopping experience with an intuitive interface allowing customers to easily browse, add items to their cart  and complete purchases. Utilizing components hooks and the Context API  it ensures dynamic page rendering and efficient data sharing across the site. " ,
        src  : react , 
        link : "https://www.linkedin.com/posts/surya-s-99b922272_ecommerce-onlinefishmarket-reactjs-activity-7173176566510809089-2b11?utm_source=share&utm_medium=member_desktop" ,
        Description : "🌐 Exciting News! 🌐 I'm thrilled to announce the launch of my latest project - FishZa an innovative online fish market that brings the colorful directly to your doorstep 🐟 What Sets Us Apart: Extensive selection of high-quality fish 🎣User-friendly interface powered by React.js 💻Robust backend logic with Node.js & Express.js 🚀Seamless communication via a RESTful API 🔄Secure data management with a top-notch database 🛡️📽️ Coming Soon: Development Journey Videos!Follow along as I share the behind-the-scenes process of developing this unique platform. From frontend magic in React.js to the powerhouse backend with Node.js & Express.js, we're covering it all!🔍 Stay Connected:Connect with me for updates on the latest in the world of online fish markets, tech, and the development journey. Your culinary adventure is just a click away!hashtag#ECommerce hashtag#OnlineFishMarket hashtag#ReactJS hashtag#NodeJS hashtag#ExpressJS hashtag#TechInnovation " ,
    },
    {
        id : 2 ,
        name : " Simon game" ,
        des : "The Simon game randomly selects a color and adds it to a computer-generated sequence. Users then replicate the sequence by selecting the colors, and the game checks for correctness. Matching sequences advance the level, helping to enhance the user's memory and cognitive skill" , 
        src : js
    },
    {
        id : 3 , 
        name : " Travel Tracker" ,
        des : "The travel tracker application, developed with Node.js and PostgreSQL, allows users to add and remove members. Users can color-code countries on a world map based on their selections, with the map's countries linked to specific codes. This setup ensures that each country is visually customized according to user preferences" ,
        src: nodejs ,
        link : "https://www.linkedin.com/posts/surya-s-99b922272_ejs-mern-postgre-activity-7226888511470067714-Upgv?utm_source=share&utm_medium=member_desktop" ,
        Description : "I have recently created world map coloring based upon user database. which can read the visited countries code and color the codes by id on ejs. postgreSQL plays major role which is going to inner join the two database and read the color and visited countriesTotal countries will be calculated using length method on visited countries.rows this web is running through the node, express backend which gives efficient runtime through the internet 🌐package used :1.express2.pg3.body-parser By the ejs the dynamic renders can achieve 🚀we can add new members on the new.ejs 👨‍💻hashtag#ejs hashtag#MER hashtag#postgre hashtag#express hashtag#nod"
    },
    {
        id : 4 , 
        name: "Interest Grower",
        des:" This code continuously compounds an investment at a rate of 1% per second. It calculates the new value by applying the growth factor 1.01timeElapsedS1.01^{\text{timeElapsedS}}1.01timeElapsedS to the current value, where timeElapsedS is the elapsed time in seconds. The start time is then updated for the next growth calculation" ,
        src :motoko , 
        link : ""
    },
    {
        id : 5 , 
        name : " Blog API " ,
        des : "This blog API runs on ports 4000 and 5000, with port 5000 managing user requests and using Axios to fetch data from port 4000 for faster retrieval. Built with Node.js and using EJS for frontend rendering, it efficiently delivers content to users" ,
        src : postman , 
        link : "https://www.linkedin.com/posts/surya-s-99b922272_hi-connectionsi-have-created-a-new-activity-7225414773062975488-um8_?utm_source=share&utm_medium=member_desktop" ,
        Description : "I have developed a comprehensive blog web application using Node.js and Express.js to efficiently manage CRUD (Create, Read, Update, Delete) operations. The application runs on two local servers: the client on localhost:4000 and the API on localhost:5000, which handles data management, parameter retrieval, headers, and token authentication for secure operations. On the client side, I utilized EJS (Embedded JavaScript) to render dynamic web pages, employing EJS partials for a polished interface and EJS views for responsive user experience. Users can create, edit, delete, and read blog posts based on unique IDs, providing a seamless and interactive platform for engaging with blog content. "
    },
    {
        id : 6 , 
        name : "Dkeeper" ,
        des : "This DKeeper application uses React for the frontend and Motoko for the backend, allowing users to add and delete notes with hooks while storing data persistently on a backend server. The data remains available and flexible even after the user revisits the page, without relying on a traditional database" ,
        src : motoko  , 
        link  :"https://www.linkedin.com/posts/surya-s-99b922272_hey-connectionssurya-here-im-happy-activity-7225397820743151616-VXja?utm_source=share&utm_medium=member_desktop" ,
        Description :"I have developed a Keeper app project utilizing React with Vite for the frontend, which streamlines the development process with its fast and efficient build system. This approach enables a responsive and modern user interface that enhances the overall user experience. On the backend, I implemented Motoko, a language designed for secure and efficient data storage on the Internet Computer. This combination allows for seamless data management while ensuring that the app is both robust and easy to use. Overall, this project has been a rewarding experience, merging contemporary technologies to create a functional application."
    },
    {
        id : 7 ,
        name : "Moon check: ATS resume analyzer" ,
        des : "ATS resume analyzer for getting scores of the resume commonly used by the job seekers. They can view their scores by just giving the resume to the ATS and get the score easily.Developed using grammers and advanced packages." , 
        src : react , 
        
    },
    {
        id:8,
        name: "Bravedude academy",
        des: "Portfolio website for bravedude academy which is an educational platform for teaching web development and programming languages to the students and beginners. Developed using reactjs and threejs for 3d components." ,              
        src : react ,   
        link : "https://www.bravedude.com/"    

    }



] ; 
export default projo ; 