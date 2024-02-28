import back from '../assets/images/bg3.svg';

const About = () => (
  <section className="bg-black text-white-10 px-[5%] pt-16 pb-10">
    <div className='flex flex-col-reverse lg:flex-row gap-20 max-w-7xl m-auto'>
      <div className="flex flex-col gap-8 lg:w-[75%] pt-16">
        <h2 className="text-3xl font-semibold">International Women's Day Maiduguri  2024</h2>
        <p>IWD is Women Techmakers' grand celebration, and this year, the theme is "Impact the Future", a call to action for women in tech to shape the future of technology and society for the better. </p>
        <p>We believe in the power of our community to drive positive change, and we invite you to be a part of this impactful campaign🌍</p>

<p>What to Expect: This year, get ready for a day filled with rockstar attendees and speakers, insightful sessions, networking opportunities, solution demos, hands-on projects, delicious food, awesome swags, and tons of fun!</p>

<p></p>Let's make International Women's Day Maiduguri 2024 a day to remember! 🌟</p>
      </div>

      <div className='lg:w-[30%]'>
        <img src={back} alt="" />
      </div>
    </div>
    
  </section>
);

export default About;
