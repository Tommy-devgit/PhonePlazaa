import { Shield, Truck, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Truck className="w-10 h-10 text-red-500" />,
      title: "Fast Delivery",
      desc: "Get your products delivered quickly and securely.",
    },
    {
      id: 2,
      icon: <Shield className="w-10 h-10 text-red-500" />,
      title: "Warranty Guarantee",
      desc: "All devices come with official warranty and support.",
    },
    {
      id: 3,
      icon: <Headphones className="w-10 h-10 text-red-500" />,
      title: "24/7 Support",
      desc: "Our team is here to assist you anytime.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black to-red-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.id}
            className="flex flex-col items-center text-center p-6 bg-red-950 rounded-lg shadow-lg hover:scale-105 transition"
          >
            {s.icon}
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-300 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
