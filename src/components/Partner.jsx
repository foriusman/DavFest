import { Link } from "react-router-dom";
import tick from '../assets/images/tick.svg';

const Partner = () => {
  const perks = [
    'Prominent Company Logo Placement',
    'Exclusive Stand Space',
    'Company Photo Stand with Banner',
    'Enhanced Brand Recognition',
    'Community Engagement',
    'Promo video showcase',
    'Online media and email recognition',
  ]

  return (
    <section className="px-[5%] py-6 flex flex-col gap-5">
      <h2 className="py-4 relative text-center text-4xl font-semibold after:h-[2px] after:w-10 after:absolute after:bg-grey-100 after:bottom-0 after:left-[50%] after:content-['']">Partnership and Sponsorship</h2>
      <h4 className="font-semibold text-lg text-center">Elevate Experiences, Elevate Brands</h4>

      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl m-auto items-center py-7">
        <article className="flex flex-col gap-10 p-6 border border-green-30 rounded-lg py-10 pb-20 order-1">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold uppercase">PLATINUM</h3>
            <p>Platinum Excellence: Your Journey to Unmatched Recognition.</p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-5xl font-bold">N300,000</span>
            <Link className="text-center rounded-md border border-green-30 px-7 py-2 font-light text-green-30" to='https://forms.gle/3Au6a1LvMcsyGsAH8'>Get Started Now</Link>
          </div>

          <ul className="flex flex-col gap-2">
            {
              perks.map((perk, i) => {
                if (i > 3) {
                  return;
                }
                return (
                <li key={perk} className="flex gap-2 items-center">
                  <div className="rounded-full p-1 w-[7%] bg-green-10">
                    <img src={tick} alt="TIck" />
                  </div>
                  <p>{perk}</p>
                </li>
              )})
            }
            <li className="flex gap-2 items-center">
              <div className="rounded-full p-1 w-[7%] bg-green-10">
                <img src={tick} alt="TIck" />
              </div>
              <p>Sponsored Talk (15mins)</p>
            </li>
          </ul>

        </article>

        <article className="flex flex-col gap-10 p-6 border border-green-30 rounded-lg py-10 text-white-10 bg-green-30 order-first lg:order-2">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold uppercase">DIAMOND</h3>
            <p>Sparkling Brilliance: Join as a Diamond sponsor and shine on.</p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-5xl font-bold">N500,000</span>
            <Link className="text-center rounded-md border border-white-10 px-7 py-2 font-light text-white-10" to='https://forms.gle/3Au6a1LvMcsyGsAH8'>Get Started Now</Link>
          </div>

          <ul className="flex flex-col gap-2">
            {
              perks.map((perk, i) => {

                return (
                <li key={perk} className="flex gap-2 items-center">
                  <div className="rounded-full p-1 w-[8%] bg-green-10">
                    <img src={tick} alt="TIck" />
                  </div>
                  <p>{perk}</p>
                </li>
              )})
            }
            <li className="flex gap-2 items-center">
              <div className="rounded-full p-1 w-[8%] bg-green-10">
                <img src={tick} alt="TIck" />
              </div>
              <p>Sponsored Talk (20mins)</p>
            </li>
          </ul>

        </article>

        <article className="flex flex-col gap-10 p-6 border border-green-30 rounded-lg py-10 pb-24 order-3">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold uppercase">GOLD</h3>
            <p>Illuminate Your Brand with Gold: Shine in the Spotlight.</p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-5xl font-bold">N200,000</span>
            <Link className="text-center rounded-md border border-green-30 px-7 py-2 font-light text-green-30" to='https://forms.gle/3Au6a1LvMcsyGsAH8'>Get Started Now</Link>
          </div>

          <ul className="flex flex-col gap-2">
            {
              perks.map((perk, i) => {
                if (i > 2) {
                  return;
                }
                return (
                <li key={perk} className="flex gap-2 items-center">
                  <div className="rounded-full p-1 w-[7%] bg-green-10">
                    <img src={tick} alt="TIck" />
                  </div>
                  <p>{perk}</p>
                </li>
              )})
            }
            <li className="flex gap-2 items-center">
              <div className="rounded-full p-1 w-[8%] bg-green-10">
                <img src={tick} alt="TIck" />
              </div>
              <p>Sponsored Talk (10mins)</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  );
};

export default Partner;
