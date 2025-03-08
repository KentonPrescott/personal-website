import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex justify-center items-start py-20 overflow-x-hidden overflow-y-auto">
      <div className="w-[575px] px-4 max-w-full pb-20">
        <h1>Kenton Prescott</h1>
      
        <ul className="space-y-4">
          <li> Founder, product builder, trader/investor, and{' '}
            <a href="https://a16z.com/the-techno-optimist-manifesto/" target="_blank" rel="noopener noreferrer">
              techno-optimist
            </a>
          .</li>

          <li>Born in Boston, grew up in Tampa, and lives in New York City/Miami.</li>
          
          <li>Aerospace engineer by education. Did some things at Lockheed Martin and SpaceX related to missiles, cryogenics, and liquid rocket engines.</li>
          
          <li>Engineer at MakerDAO from 2018-2021. Led development of a <a href="https://github.com/makerdao/chief-keeper" target="_blank" rel="noopener noreferrer">couple</a> <a href="https://github.com/makerdao/cage-keeper" target="_blank" rel="noopener noreferrer">mission</a> critical keeper bots for $DAI (now called USDS), a multi-billion dollar crypto-collateralized stablecoin.</li>
          
          <li>Co-founder & CEO of{' '}
            <a href="https://medium.com/sensefinance/sunsetting-sense-and-releasing-it-into-the-ether-cd8c8e1731ad" target="_blank" rel="noopener noreferrer">
              Sense Finance
            </a>
            , a DeFi fixed income protocol, from 2021-2023.
          </li>
          
          <li>Currently building{' '}
            <a href="https://rumpel.xyz/" target="_blank" rel="noopener noreferrer">
              Rumpel Labs
            </a>
            , a DeFi incentive liquidity protocol.
          </li>
          
          <li>Interested in{' '}
            <a href="https://moores.samaltman.com/" target="_blank" rel="noopener noreferrer">
              growth
            </a>
            , fitness, poker, beautiful graphics, sound, endurance, and nature.
          </li>
          
          <li>Short form thoughts:{' '}
            <a href="https://x.com/KentonPrescott" target="_blank" rel="noopener noreferrer">
              @kentonprescott
            </a>
          </li>
          
          <li>Long form thoughts: Writing (blog coming soon)</li>
          
          <li>Contact: X DMs or admin @{' '}
            <a href="http://kentonprescott.com">
              kentonprescott.com
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
