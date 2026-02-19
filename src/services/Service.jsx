import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Service() {
  const services = [
    {
      title: "Security Equipment",
      desc: "Tactical gear, body armor, helmets & protective suits for high-risk operations.",
      img: "https://premierbodyarmor.com/cdn/shop/articles/bump_helmets.png?v=1724771301",
    },
    {
      title: "Rescue Equipment",
      desc: "Ropes, harnesses, stretchers & specialized tools for emergency response.",
      img: "https://www.mtrsuperstore.com/cdn/shop/files/harness-2_1200x.jpg?v=1755292806",
    },
    {
      title: "Fire Fighting Equipment",
      desc: "Extinguishers, hoses, nozzles & essential firefighting tools.",
      img: "https://blog.qrfs.com/wp-content/uploads/2018/03/fire-hose-spray-nozzle-600-1.jpg",
    },
    {
      title: "Safety Shoes",
      desc: "Steel-toe, anti-slip boots meeting international safety standards.",
      img: "https://m.media-amazon.com/images/I/71GaLFdiRoL._AC_UY900_.jpg",
    },
    {
      title: "Road Safety",
      desc: "Cones, reflective signs, barriers & safety signage.",
      img: "https://m.media-amazon.com/images/I/611hO55xZBL._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "Fire Fighting Vehicle",
      desc: "Specialized fire trucks for rapid emergency deployment.",
      img: "https://media.gettyimages.com/id/89909590/photo/modern-red-fire-engine-truck-isolated-on-white-clipping-path.jpg?s=612x612&w=gi&k=20&c=prDUir8GOlpxi-ul0Pa7m4oKTG6X9tWNEoJk2MAFqNY=",
    },
    {
      title: "Fire Alarm System",
      desc: "Smoke detectors, sensors & early warning panels.",
      img: "https://blog.qrfs.com/wp-content/uploads/2019/04/fire-alarm-control-panel-b-600.jpg",
    },
    {
      title: "Fall Arrest System",
      desc: "Harnesses, lanyards & anchors for height safety.",
      img: "https://ils.org.uk/wordpress/wp-content/uploads/2024/01/calculating-fall-arrest-distance-shock-absorbing-lanyards-diagram-1024x683.jpg",
    },
    {
      title: "Personal Protective Wear",
      desc: "High-visibility jackets & weather-resistant clothing.",
      img: "https://www.cabletiesandmore.com/images/gallery/main/portwest-us376-expert-surveyor-vest-hi-vest.jpg",
    },
    {
      title: "Medical Equipment For Ambulance",
      desc: "Defibrillators, oxygen systems & emergency kits.",
      img: "https://www.technimount.com/wp-content/uploads/2023/01/XTENSION-PRO-ASSISTANT-CCT-E-RENDU-1.png",
    },
    {
      title: "Personal Protective Equipments",
      desc: "Helmets, gloves, glasses & full PPE kits.",
      img: "https://thumbs.dreamstime.com/b/essential-personal-protective-equipment-kit-safety-hazardous-work-environments-comprehensive-collection-personal-402443070.jpg",
    },
    {
      title: "Laboratory safety System",
      desc: "Goggles, lab coats, gloves & safety equipment for laboratory work.",
      img: "https://media.istockphoto.com/id/918825222/photo/woman-scientist-adjusts-protective-goggles-staring-intently.jpg?s=612x612&w=0&k=20&c=SC0wMROl6EG69TUoKXnlQ-lssKlQzVAHjswjUTWiGSk=",
    },
    {
      title: "Safety Containment System",
      desc: "Secondary containment solutions for hazardous materials storage.",
      img: "https://assets.production.denios.io/article/327073_20220809-092005.jpg",
    },
    {
      title: "Spill Prevention Containment and Control",
      desc: "Spill kits, absorbents & containment systems for emergency response.",
      img: "https://www.absorbentsonline.com/spill-containment-blog/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3J/jPWh0dHBzJTNBJTJGJTJGd3d3LmFic29yYmVudHNvbmxpbmUuY29tJTJGc3BpbGwtY29udGFpbm1lbnQtYmxvZyUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA0JTJGV2hhdC1Jcy1BLVNwaWxsLUtpdC0xMDI0eDY4My5qcGcmY2FjaGVNYXJrZXI9MTY0OTE2MzIzNi00NDgwNyZ0b2tlbj0xY2E2YmU1NWQ5ZGU5YmRk.q.jpg",
    },
    {
      title: "Industrial Tools",
      desc: "Heavy-duty machinery & equipment for industrial applications.",
      img: "https://media.istockphoto.com/id/1157027831/photo/industrial-factory-interior-with-equipment-conveyor-line-and-steel-tools-industry-background.jpg?s=612x612&w=0&k=20&c=YsNqcfwIgc8V_FU--eztNOQrZB1PWRFruUVS0M1w36U=",
    },
    {
      title: "Hand tools",
      desc: "Wrenches, hammers, pliers & essential manual tools.",
      img: "https://media.istockphoto.com/id/596042932/photo/set-of-hand-various-work-tools-on-grey-background.jpg?s=612x612&w=0&k=20&c=Tpz6mmcCZs_tVPd_yq0lmDvPqkvp0Zo5XMWpICP6rZk=",
    },
    {
      title: "Power Tools",
      desc: "Drills, saws, grinders & electric power tools.",
      img: "https://www.shutterstock.com/image-photo/construction-carpentry-tools-electric-corded-260nw-1990855535.jpg",
    },
  ];

  // Same hash function as in Home and Products (exact match)
  const getHashId = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
  };

  return (
    <>
      {/* Same Hero - Kept Exactly as Before */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-gradient-to-br from-gray-900 via-red-900/40 to-gray-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <img
          src="https://media.istockphoto.com/id/2202739604/photo/brave-firefighter-battling-flames-in-smoky-scene.jpg?s=612x612&w=0&k=20&c=d4u_iYVsLrMv0LT-Gku9xQ7KgrN22hBAgit5hvARR88="
          alt="Brave Firefighters Battling Intense Flames"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-wider mb-8 drop-shadow-2xl"
          >
            Our <span className="text-orange-500">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Premium, certified safety solutions designed to protect lives in every critical situation.
          </motion.p>
        </div>
      </section>

      {/* Upgraded Eye-Catching Category Boxes - Kept Exactly the Same Design */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 via-red-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-center text-red-800 uppercase tracking-wider mb-20"
          >
            Explore Our Safety Categories
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {services.map((service, index) => {
              const hashId = getHashId(service.title);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer"
                >
                  {/* Image with Dark Overlay + Title on Bottom */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Title at Bottom of Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl md:text-3xl font-extrabold drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description & Button Below Image */}
                  <div className="p-8 bg-white">
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Link to={`/products?id=${service.title}`}>
                      <button className="inline-flex items-center gap-3 bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-800 transition-all duration-400 shadow-lg hover:shadow-xl transform group-hover:translate-x-2">
                        Explore <ArrowRight className="w-6 h-6" />
                      </button>
                    </Link>
                  </div>

                  {/* Subtle Red Accent Line on Hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              );
            })}
          </div>

          {/* Same Clean CTA */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-32 text-center bg-white rounded-3xl shadow-2xl py-16 px-10 md:px-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-6">
              Ready to Secure Your Safety?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto">
              Let us know your requirements — our experts are here to provide tailored solutions.
            </p>
            < a href='https://wa.me/923347616779?text=Hi%20I%20am%20MR-sufiyan%20CEO%20of%20SS.%20Safety%20Solution.%20How%20can%20I%20help%20you'>
            <button className="px-12 py-6 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-2xl rounded-full shadow-2xl transition transform hover:scale-105">
              Contact Us Today
            </button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Service;