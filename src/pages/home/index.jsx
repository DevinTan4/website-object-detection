import { praditaLogoImg } from "../../assets/images";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header>
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0">
          <div className="w-full h-[100px] flex justify-center items-center bg-[#f0f1f1]">
            <img src={praditaLogoImg} alt="PraditaLogo" className="w-[150px]" />
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="mt-[100px] h-main-height">
        {/* Gedung 1 */}
        <div className="h-half-main-height flex flex-col items-center gap-5 py-2 justify-center">
          {/* Title */}
          <div className="text-5xl font-bold text-[#ec1c24]">Gedung 1</div>
          {/* Counter motor */}
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium">000/128</p>
            <h2 className="font-bold text-4xl">Motor</h2>
          </div>
          {/* Counter mobil */}
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium">000/35</p>
            <h2 className="font-bold text-4xl">Mobil</h2>
          </div>
        </div>

        {/* Gedung 2 */}
        <div className="h-half-main-height flex flex-col items-center gap-5 py-2 justify-center">
          {/* Title */}
          <div className="text-5xl font-bold">Gedung 2</div>
          {/* Counter motor */}
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium">000/217</p>
            <h2 className="font-bold text-4xl">Motor</h2>
          </div>
          {/* Counter mobil */}
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium">000/60</p>
            <h2 className="font-bold text-4xl">Mobil</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
