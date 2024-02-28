import back from '../assets/images/bg2.png';

const Recap = () => (
  <section className='flex flex-col gap-6 p-6'>
    <h2 className='text-center text-5xl font-semibold'>IWD Maiduguri 2023</h2>
    <div className='w-[70%] m-auto'>
      <img src={back} alt="Dev fest pictures" />
    </div>
  </section>
);

export default Recap;
