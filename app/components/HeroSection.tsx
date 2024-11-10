import { MyImage } from "./MyImage";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row mt-24 sm:mt-44 mx-5 sm:mx-10">
      <div className="sm:mr-10">
        <span className="text-black font-serif font-bold text-4xl sm:text-6xl hover:bg-cyan-100 hover:rounded ml-0 sm:ml-10">
          Hi! I AM
        </span>
        <br /> <br />
        <span className="font-bold text-secendory font-serif text-4xl sm:text-6xl hover:bg-cyan-100 hover:rounded ml-0 sm:ml-10 mt-5 sm:mt-10">
          M.Hamza
        </span>

        <p className="mb-5 text-base sm:text-xl p-5 rounded mr-0 sm:mr-[30%] ml-0 sm:ml-7 font-serif hover:bg-cyan-200 hover:rounded ">
          <b className="text-xl sm:text-2xl font-bold">I am a web developer</b> <br />
          with a strong foundation in HTML, CSS, and TypeScript. Currently, I am
          expanding my skills by learning Next.js, a powerful framework for
          building dynamic and responsive web applications. <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad minima eius pariatur tempore odio amet iste blanditiis nisi, deserunt ducimus. Mollitia corporis odio qui delectus veritatis numquam nobis harum eveniet.
        </p>

        <div className="flex flex-wrap">
          <button className="ml-0 sm:ml-12 p-2 px-5 mr-4 sm:mr-8 bg-secendory text-white rounded hover:bg-green-400 font-serif mb-2 sm:mb-0">
            Hire me
          </button>
          <button className="p-2 px-5 ml-0 sm:ml-5 bg-secendory text-white rounded hover:bg-green-400 font-serif ">
            Let&apos;s talk {/* Replaced ' with &apos; */}
          </button>
        </div>
      </div>

      <MyImage />
    </div>
  );
};

export default HeroSection;
