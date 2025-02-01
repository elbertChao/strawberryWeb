import Image from "next/image";

export default function Home() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/agrotunnel.jpg')" }}
    >
      {/* background overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Welcome to Our Farm
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-lg px-4">
          Explore how machine learning meets farming to deliver quality and precision.
        </p>
        <a
          href="/checkBerries"
          className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-[#0e771a] transition duration-300"
        >
          Check Berries
        </a>
        <a
          href="/guide"
          className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-[#0e771a] transition duration-300"
        >
          Guide
        </a>
      </div>
    </div>
  );
}
