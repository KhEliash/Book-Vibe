import img from "../../assets/Images/library.jpg";

const AboutUs = () => {
  return (
    <div>
      <section className="about-us space-y-5 bg-base-200 p-5 rounded-xl">
        <div className="col-md-6 space-y-5 flex flex-col justify-center items-center">
          <h2 className="section-title text-center text-3xl font-bold text-green-500">
            Welcome to Books Vibe
          </h2>
          <p className="section-description bg-white p-3 rounded-xl md:w-3/4">
            <span className="text-2xl font-bold ">A</span>t Books Vibe, we
            believe in the power of stories to inspire, educate, and transform
            lives. Our passion for literature drives us to curate the finest
            collection of books from around the world, spanning genres and
            cultures. Whether you're a seasoned bookworm or just beginning your
            literary journey, you'll find something to captivate your
            imagination here.
          </p>
          <p className="section-description  bg-white p-3 rounded-xl md:w-3/4">
            <span className="text-2xl font-bold  ">F</span>ounded by avid
            readers, our mission is to foster a vibrant community of book lovers
            where ideas are exchanged, and connections are made. We strive to
            provide an immersive and enriching experience, offering not only a
            vast selection of books but also engaging content, insightful
            recommendations, and opportunities to connect with fellow readers.
          </p>
        </div>
        <div className="col-md-6 flex justify-center">
          <img src={img} alt="About Us" className="img-fluid rounded-xl" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
