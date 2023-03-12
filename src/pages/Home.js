import Navbar from "../Components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  return (
    <div className="bg-metalic-blue">
      <section className="h-screen min-h-fit">
        <Navbar />
        <section className="hero p-10 m-10 flex h-full">
          <div className="w-2/3 pt-10 text-white" data-aos="fade-right">
            <div className="flex">
              <h1 className="text-8xl font-bold mb-5 myname">KETHAN</h1>
              <img
                src="https://cdn-icons-png.flaticon.com/512/7465/7465411.png"
                alt="just and image"
                className="h-24 ml-10"
              />
            </div>
            <h1 className="text-8xl font-bold ml-14 myname" >KRISHNA PK</h1>
            <h2 className="text-lg font-mono mt-5">
              SOFTWARE ENGINEER | TECH ENTHUSIAST
            </h2>
          </div>
          <div className="flex justify-center w-1/3 relative">
            <img
              data-aos="fade-in"
              data-aos-duration="1000"
              src="https://cdn-icons-png.flaticon.com/512/6486/6486196.png"
              alt=""
              className="w-25 absolute"
            />
          </div>
        </section>
      </section>
      {/* ............................................................  */}
      {/* about section  */}
      {/* ............................................................  */}
      <section className="about h-screen min-h-fit">
        <div className="border-y-2 border-white text-white flex justify-evenly py-5">
          <p>console.log( who am i )</p>
        </div>
        <div className="p-10 text-white">
          <h2 className="text-7xl text-center font-bold mb-28 mt-16" data-aos="fade-down" data-aos-duration="700">
            So, Who am 👁️
          </h2>
          <p className="w-2/3 text-lg" data-aos="fade-in" data-aos-duration="700">
            I am a software engineer and tech enthusiast with experience in web
            and mobile application development. Proven ability to develop
            innovative solutions for complex problems. Passionate about robotics
            and building projects that combine software engineering and
            hardware. Now working on ML and AI.
          </p>
          <div className="flex justify-around mt-10" data-aos="zoom-in" data-aos-duration="700">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6858/6858041.png"
              alt="web"
              className="w-24"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/7506/7506749.png"
              alt="mobile"
              className="w-24"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/6347/6347493.png"
              alt="robot"
              className="w-24"
            />
          </div>
        </div>
      </section>
      <section className="h-screen min-h-fit">
        <div className="border-y-2 border-white text-white flex justify-evenly py-5">
          <p>Console.log( My skills )</p>
        </div>
        <div className="p-10 text-white flex mt-10">
          <div className="w-1/2">
            <h3 className="text-5xl font-bold mb-10" data-aos="fade-right" data-aos-duration="700">TECHNAICAL SKILLS</h3>
            <ul className="list-disc ml-10" data-aos="fade-right" data-aos-duration="700">
              <li className="mb-5 text-md font-semibold">
                Programming Languages: JavaScript, Python, C++, C
              </li>
              <li className="mb-5 text-md font-semibold">
                Frameworks: React JS, Node JS, React-Native, Flask
              </li>
              <li className="mb-5 text-md font-semibold">
                Databases: MySQL, MongoDb
              </li>
              <li className="mb-5 text-md font-semibold">
                Web Technologies: HTML, CSS, Tailwind CSS
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="forImg w-3/4 grid grid-cols-4 gap-5" data-aos="fade-in" data-aos-duration="700">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
                className="w-20"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                className="w-20"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
                className="w-20"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                className="w-20"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png"
                className="w-20"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/3098/3098090.png"
                className="w-20"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                className="w-20"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="border-y-2 border-white text-white flex justify-evenly py-5">
          <p>Console.log( My Projects )</p>
        </div>
        <div className="p-10 text-white mt-10">
          <h3 className="text-5xl font-bold mb-10" data-aos="fade-in" data-aos-duration="700">PROJECTS</h3>
          <ul className="list-disc ml-10">
            <li className="mb-5 text-md font-semibold" data-aos="flip-up" data-aos-duration="700">
              A web based Word Guess game using React JS
            </li>
            <li className="mb-5 text-md font-semibold" data-aos="flip-up" data-aos-duration="700">
              An automatic youtube video Downloader App using React-Native
            </li>
            <li className="mb-5 text-md font-semibold" data-aos="flip-up" data-aos-duration="700">
              A web based Meme Generator using React Js
            </li>
            <li className="mb-5 text-md font-semibold" data-aos="flip-up" data-aos-duration="700">
              A web based Calculator using React Js
            </li>
            <li className="mb-5 text-md font-semibold" data-aos="flip-up" data-aos-duration="700">
              An Driver downloading site Using React JS, MongoDb, Node JS
            </li>
          </ul>
        </div>
      </section>
      {/* <footer className="flex h-40 bg-white p-10">
        <h1>here is the footer</h1>
      </footer> */}
    </div>
  );
};

export default Home;
