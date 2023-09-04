import back from '../assets/images/bg3.svg';

const About = () => (
  <section className="bg-black text-white-10 px-[5%] pt-16 pb-10">
    <div className='flex flex-col-reverse lg:flex-row gap-20 max-w-7xl m-auto'>
      <div className="flex flex-col gap-8 lg:w-[75%] pt-16">
        <h2 className="text-3xl font-semibold">About</h2>
        <p>Welcome to DevFest 2023, the ultimate gathering for tech enthusiasts, developers, and innovators from around the world! This year's DevFest promises to be a dynamic and engaging event, bringing together a diverse community of professionals and learners to celebrate the latest advancements in technology.</p>
        <p>DevFest is more than just a conference; it's an experience that fuels your passion for technology. Whether you're a seasoned professional or a curious newcomer, DevFest offers you the chance to learn, connect, innovate and grow</p>
      </div>

      <div className='lg:w-[30%]'>
        <img src={back} alt="" />
      </div>
    </div>
    
  </section>
);

export default About;
