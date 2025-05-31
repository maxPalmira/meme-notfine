// Updated: Replaced homepage with new design layout - removed container wrapper, restored original gradient background, improved full-width layout, fixed CSS layering issue

'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Original Gradient Background with Noise Filter - matching exact stops */}
      <div className="absolute top-0 left-0 w-full min-h-full bg-gradient-to-b from-[#A6B857] via-[#CDE26F] via-[#FFF587] to-[#FFD272] -z-20" 
           style={{
             background: `linear-gradient(180deg, 
               #A6B857 0%, 
               #CDE26F 36%, 
               #FFF587 69%, 
               #FFD272 100%)`,
             height: '100%'
           }} />
      
      {/* Noise Filter Overlay */}
      <div 
        className="absolute top-0 left-0 w-full min-h-full opacity-15 -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23000000'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply',
          height: '100%'
        }}
      />
      
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm border-b border-black/10">
        <nav className="flex items-center space-x-8">
          <span className="text-black font-jua text-base">F.A.Q</span>
          <span className="text-black font-jua text-base">Community</span>
          <span className="text-black font-jua text-base">Roadmap</span>
          <span className="text-black font-jua text-base">How to buy</span>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="homepage-section relative pt-24 pb-16">
        
        {/* Speech Bubble with Main Title */}
        <div className="relative w-full">
          <div className="relative flex justify-center">
            <Image
              src="/figma-exports/backgrounds/speach-bubble.svg"
              alt="Speech Bubble Background"
              width={851}
              height={356}
              className="w-full h-auto max-w-4xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-black font-jua text-4xl md:text-6xl text-center leading-tight transform -translate-y-2 md:-translate-y-3">
                THIS IS $NOTFINE!
              </h1>
            </div>
          </div>
        </div>

        {/* Main Cat Character */}
        <div className="flex justify-center relative mt-8">
          <div className="relative">
            <Image
              src="/figma-exports/characters/cat-happy.svg"
              alt="Main Cat Character"
              width={600}
              height={600}
              className="relative z-10 w-full h-auto max-w-lg"
            />
            
            {/* Scattered Flame Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <Image
                src="/figma-exports/decorations/fireball-1.svg"
                alt="Flame"
                width={60}
                height={60}
                className="absolute top-10 left-10 animate-bounce"
              />
              <Image
                src="/figma-exports/decorations/fireball-2.svg"
                alt="Flame"
                width={40}
                height={40}
                className="absolute top-20 right-20 animate-pulse"
              />
              <Image
                src="/figma-exports/decorations/fireball-3.svg"
                alt="Flame"
                width={50}
                height={50}
                className="absolute bottom-10 left-20 animate-bounce delay-500"
              />
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="text-center w-full mt-12 px-6">
          <p className="text-black font-jua text-lg leading-relaxed max-w-4xl mx-auto">
            $NOTFINE is the memecoin that embraces the chaos of the crypto world! 
            Combining humor and satirical commentary on the struggles of every trader, 
            we've created a community that finds strength in the absurd.
          </p>
        </div>

        {/* Contract Address Section */}
        <div className="text-center mt-12 w-full px-6">
          <div className="bg-[#FFF3DC] border-[7px] border-black rounded-[40px] px-8 py-4 inline-block mb-6">
            <span className="text-black font-jua text-xl">
              0x71C7656EC7ab88b098defB751B7401B5f6d8976F
            </span>
          </div>
          <div className="mb-12">
            <div className="relative inline-block">
              <Image
                src="/figma-exports/ui-elements/button-orange.svg"
                alt="Copy Button Background"
                width={300}
                height={80}
                className="cursor-pointer hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black font-jua text-4xl">copy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 md:space-x-12 w-full px-6">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-[4px] border-black rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
            <Image
              src="/figma-exports/social-icons/icon-twitter.svg"
              alt="Twitter"
              width={48}
              height={48}
            />
          </div>
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-[4px] border-black rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
            <Image
              src="/figma-exports/social-icons/icon-telegram.svg"
              alt="Telegram"
              width={48}
              height={48}
            />
          </div>
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-[4px] border-black rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
            <Image
              src="/figma-exports/social-icons/icon-discord.svg"
              alt="Discord"
              width={48}
              height={48}
            />
          </div>
        </div>

      </section>

      {/* Cloud Background Section - "Not Fine" Messages */}
      <section className="homepage-section relative py-20 overflow-hidden">
        {/* Background Cloud Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/figma-exports/backgrounds/cloud-1.svg"
            alt="Cloud Background"
            width={957}
            height={408}
            className="absolute left-0 top-0 opacity-60 w-full"
          />
          <Image
            src="/figma-exports/backgrounds/cloud-2.svg"
            alt="Ground Shape"
            width={605}
            height={268}
            className="absolute right-0 bottom-0 opacity-50"
          />
        </div>

        {/* Cloud Text */}
        <div className="relative z-10 text-center px-6">
          <div className="bg-[#8B625B] rounded-3xl p-8 md:p-12 mx-auto shadow-2xl border-4 border-black">
            <p className="text-[#FFF3DC] font-jua text-2xl md:text-3xl leading-relaxed">
              chart down — <span className="text-red-400">not fine</span><br/>
              got rugged — <span className="text-red-400">not fine</span><br/>
              wallet drained — <span className="text-red-400">not fine</span><br/>
              dev ghosted — <span className="text-red-400">not fine</span>
            </p>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="homepage-section py-16 px-6">
        {/* Section Title */}
        <h2 className="text-black font-jua text-6xl text-center mb-12">
          TOKENOMICS
        </h2>

        {/* Tokenomics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          
          {/* Total Supply */}
          <div className="text-center">
            <h3 className="text-black font-jua text-2xl mb-2">Total Supply</h3>
            <p className="text-[#71C345] font-jua text-4xl font-bold">1,000,000,000</p>
          </div>

          {/* Buy Tax */}
          <div className="text-center">
            <h3 className="text-black font-jua text-2xl mb-2">Buy Tax</h3>
            <p className="text-[#71C345] font-jua text-4xl font-bold">2%</p>
          </div>

          {/* Sell Tax */}
          <div className="text-center">
            <h3 className="text-black font-jua text-2xl mb-2">Sell Tax</h3>
            <p className="text-[#71C345] font-jua text-4xl font-bold">2%</p>
          </div>

          {/* Burned Forever */}
          <div className="text-center">
            <h3 className="text-black font-jua text-2xl mb-2">Burned Forever</h3>
            <p className="text-[#71C345] font-jua text-4xl font-bold">40%</p>
          </div>
        </div>

        {/* Stats Circles */}
        <div className="flex justify-center space-x-8 mb-12">
          
          {/* Holders Circle */}
          <div className="relative">
            <div className="relative">
              <Image
                src="/figma-exports/backgrounds/circle-blue.svg"
                alt="Holders Circle Background"
                width={260}
                height={260}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h4 className="text-black font-jua text-3xl mb-2">Holders</h4>
                <p className="text-[#FFF3DC] font-jua text-3xl font-bold stroke-[4px] stroke-black">455</p>
              </div>
            </div>
          </div>

          {/* Market Cap Circle */}
          <div className="relative">
            <div className="relative">
              <Image
                src="/figma-exports/backgrounds/circle-yellow.svg"
                alt="Market Cap Circle Background"
                width={287}
                height={287}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h4 className="text-black font-jua text-3xl mb-2">Market Cap</h4>
                <p className="text-[#FFF3DC] font-jua text-3xl font-bold stroke-[4px] stroke-black">524$</p>
              </div>
            </div>
          </div>

          {/* 24h Volume Circle */}
          <div className="relative">
            <div className="relative">
              <Image
                src="/figma-exports/backgrounds/cirlce-green.svg"
                alt="24h Volume Circle Background"
                width={298}
                height={297}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h4 className="text-black font-jua text-3xl mb-2">24h Volume</h4>
                <p className="text-[#FFF3DC] font-jua text-3xl font-bold stroke-[4px] stroke-black">$188</p>
              </div>
            </div>
          </div>
        </div>

        {/* JOIN THE CHAOS Button */}
        <div className="text-center">
          <div className="relative inline-block">
            <Image
              src="/figma-exports/ui-elements/button-orange.svg"
              alt="Join The Chaos Button Background"
              width={400}
              height={100}
              className="cursor-pointer hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-black font-jua text-3xl">JOIN THE CHAOS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cat Characters Section */}
      <section className="homepage-section py-16 px-6">
        <div className="flex justify-center space-x-12">
          
          {/* Left Cat */}
          <div className="relative">
            <Image
              src="/figma-exports/characters/cat-laptop.svg"
              alt="Cat with Laptop"
              width={310}
              height={465}
              className="relative z-10"
            />
            
            {/* Scattered decorations around left cat */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <Image
                src="/figma-exports/decorations/money.svg"
                alt="Money Decoration"
                width={20}
                height={20}
                className="absolute top-12 left-8 animate-spin"
              />
              <Image
                src="/figma-exports/decorations/fire-1.svg"
                alt="Fire Decoration"
                width={25}
                height={25}
                className="absolute bottom-16 right-12 animate-pulse"
              />
            </div>
          </div>

          {/* Center Cat with Speech Bubble */}
          <div className="relative">
            <Image
              src="/figma-exports/characters/cat-rocket.svg"
              alt="Cat on Rocket"
              width={400}
              height={500}
              className="relative z-10"
            />
            
            {/* Speech Bubble */}
            <div className="absolute -top-8 -left-16">
              <div className="relative">
                <Image
                  src="/figma-exports/ui-elements/speech-bubble-main.svg"
                  alt="Speech Bubble"
                  width={200}
                  height={100}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-black font-jua text-lg text-center">
                    get<br/>
                    the secret<br/>
                    code!!!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cat */}
          <div className="relative">
            <Image
              src="/figma-exports/characters/cat-chill.svg"
              alt="Chill Cat"
              width={200}
              height={200}
              className="relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Bottom Speech Bubble Section */}
      <section className="homepage-section py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Image
              src="/figma-exports/backgrounds/cloud-1.svg"
              alt="Speech Bubble Background"
              width={782}
              height={396}
              className="w-full opacity-70"
            />
            
            {/* Text overlay on speech bubble */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
              <p className="text-black font-jua text-base mb-4 text-center">
                I accidentally burned my house down.<br/>
                It's not fine
              </p>
              <p className="text-black font-jua text-lg text-center">
                Perfect! Let's burn<br/>
                69 billion tokens lol
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Scattered Decorations */}
      <section className="homepage-section relative py-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Flag decoration */}
          <Image
            src="/figma-exports/backgrounds/flag.svg"
            alt="Flag Decoration"
            width={186}
            height={105}
            className="absolute top-[20%] right-[15%] animate-pulse"
            style={{
              animationDelay: '1s'
            }}
          />
          
          {/* Scattered fire decorations */}
          {[1,2,3,4,5].map((num) => (
            <Image
              key={num}
              src="/figma-exports/decorations/fire-1.svg"
              alt={`Fire ${num}`}
              width={15}
              height={15}
              className={`absolute animate-pulse`}
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Additional fireball decorations */}
          {[1,2,3].map((num) => (
            <Image
              key={`fireball-${num}`}
              src={`/figma-exports/decorations/fireball-${num}.svg`}
              alt={`Fireball ${num}`}
              width={30}
              height={30}
              className={`absolute animate-bounce`}
              style={{
                top: `${Math.random() * 70 + 15}%`,
                left: `${Math.random() * 70 + 15}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}

          {/* Arrow pointing down */}
          <Image
            src="/figma-exports/ui-elements/arrow-pointing-down.svg"
            alt="Arrow Down"
            width={40}
            height={40}
            className="absolute top-[50%] left-[50%] animate-bounce"
          />
        </div>

        {/* Large Cat at the bottom */}
        <div className="relative z-10 flex justify-center">
          <Image
            src="/figma-exports/characters/cat-sad.svg"
            alt="Large Sad Cat Character"
            width={800}
            height={600}
            className="max-w-full h-auto"
          />
        </div>
      </section>

      {/* Cross-out X marks (matching Figma design) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Red X marks scattered around */}
        <div className="absolute top-[1676px] left-[21px] w-[287px] h-[287px]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform rotate-45 rounded-sm"></div>
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform -rotate-45 rounded-sm"></div>
          </div>
        </div>
        
        <div className="absolute top-[2206px] left-[408px] w-[125px] h-[125px]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform rotate-45 rounded-sm"></div>
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform -rotate-45 rounded-sm"></div>
          </div>
        </div>
        
        <div className="absolute top-[2180px] left-[1178px] w-[125px] h-[125px]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform rotate-45 rounded-sm"></div>
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform -rotate-45 rounded-sm"></div>
          </div>
        </div>
        
        <div className="absolute top-[1845px] left-[780px] w-[125px] h-[125px]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform rotate-45 rounded-sm"></div>
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform -rotate-45 rounded-sm"></div>
          </div>
        </div>
      </div>

    </div>
  );
}
