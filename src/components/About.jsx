import back from '../assets/images/bg3.svg';

const About = () => (
  <section className="bg-black text-white-10 px-[5%] pt-16 pb-10">
    <div className='flex flex-col-reverse lg:flex-row gap-20 max-w-7xl m-auto'>
      <div className="flex flex-col gap-8 lg:w-[75%] pt-16">
        <h2 className="text-3xl font-semibold"> Google IO Extended Maiduguri 2024</h2>
        <p>Join us for an exciting day at Google IO Extended 2024, themed "Exploring AI,"</p>
        <p>This event will delve into cutting-edge AI technologies and their applications. Attendees will explore topics such as "AI for Developers with Gemini in Android Studio," the latest features of "Android 15," critical insights on "Security & AI," and engage in a "Fireside Chat: IO Recap" with industry experts. This is a fantastic opportunity for developers, tech enthusiasts, and professionals to network, learn, and get inspired by the latest advancements in AI and Android. </p>
        <p>Don't miss out on this free event hosted at the Abdul Samad Rabiu International Center for Innovation and Entrepreneurship, University of Maiduguri.</p>
      
      </div>

      <div className='lg:w-[30%]'>
        <img src={back} alt="" />
      </div>
    </div>
    
  </section>
);

export default About;
