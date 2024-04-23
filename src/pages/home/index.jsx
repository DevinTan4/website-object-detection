import { useState } from "react";
import { praditaLogoImg } from "../../assets/images";
import { useEffect } from "react";

const HomePage = () => {
  const [motorbikeCount, setMotorbikeCount] = useState(0);
  const [carCount, setCarCount] = useState(0);

  useEffect(() => {
    const fetchMotorbikeCount = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/motorbike");
        const data = await response.json();
        setMotorbikeCount(data.motorbike_count);
      } catch (error) {
        console.error("Error fetching motorbike count: ", error);
      }
    };

    fetchMotorbikeCount();

    const intervalId = setInterval(fetchMotorbikeCount, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchCarCount = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/car");
        const data = await response.json();
        setCarCount(data.car_count);
      } catch (error) {
        console.error("Error fetching car count: ", error);
      }
    };

    fetchCarCount();

    const intervalId = setInterval(fetchCarCount, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col">
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
      <main className="mt-[100px] py-[35px] flex flex-col items-center gap-8">
        {/* Gedung 1 */}
        <div className="w-[347px] h-[320px] bg-[#F04524] rounded-2xl shadow-2xl shadow-[#F8BA18] py-[32px] px-[63px] flex flex-col items-center gap-8">
          <h1 className="font-bold text-5xl">Gedung 1</h1>
          {/* Motor */}
          <div className="flex flex-col items-center">
            <p className="font-medium text-2xl">{motorbikeCount}/128</p>
            <h2 className="font-bold text-4xl text-[#F8BA18] -mt-2">Motor</h2>
          </div>
          {/* Mobil */}
          <div className="flex flex-col items-center">
            <p className="font-medium text-2xl">{carCount}/035</p>
            <h2 className="font-bold text-4xl text-[#F8BA18] -mt-2">Mobil</h2>
          </div>
        </div>

        {/* Gedung 2 */}
        <div className="w-[347px] h-[320px] bg-[#F04524] rounded-2xl shadow-2xl shadow-[#F8BA18] py-[32px] px-[63px] flex flex-col items-center gap-8">
          <h1 className="font-bold text-5xl">Gedung 2</h1>
          {/* Motor */}
          <div className="flex flex-col items-center">
            <p className="font-medium text-2xl">000/217</p>
            <h2 className="font-bold text-4xl text-[#F8BA18] -mt-2">Motor</h2>
          </div>
          {/* Mobil */}
          <div className="flex flex-col items-center">
            <p className="font-medium text-2xl">000/060</p>
            <h2 className="font-bold text-4xl text-[#F8BA18] -mt-2">Mobil</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
