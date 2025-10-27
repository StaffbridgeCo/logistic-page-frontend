// src/pages/About.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import TeamSection from "../components/TeamSection";
import Blob from "../components/Blob"; 
import Particles from "../components/Particles";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      {/* Header */}
      <Header />
      <Particles count={30} />

      {/* Contenido principal */}
      <main className="flex-1 pt-24 px-6 md:px-12 lg:px-24">
        {/* Hero */}
        <section className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-purple-900"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
          </motion.p>
        </section>

        {/* Nuestra misión */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Blob className="absolute top-0 left-10 z-0 opacity-70" />
            <p className="relative z-10 text-lg md:text-xl text-gray-700 leading-relaxed">
              We are a team of proven experts, each bringing deep expertise in recruitment, HR strategy, and business consulting. Together, we have built a model that unlocks Latin America’s talent pool for companies ready to scale with confidence.
              <br /><br />
              We don’t just fill roles, we design workforce strategies. Acting as your strategic advisors and partners, we help you structure, recruit, and retain nearshore teams with the same precision and transparency you would expect from your own in house operations. Every decision is guided by data, market insight, and a commitment to long term impact.
              <br /><br />
              Our approach is built on three pillars: transparency, quality, and cultural alignment. By combining consulting level expertise with operational execution, we make expansion into Latin America seamless, cost-effective, and positioned for sustainable growth.
              <br /><br />
              With us, you gain more than a service provider, you gain an extension of your leadership team, equipped with the market knowledge and strategic vision to help you succeed.
            </p>
          </motion.div>
          <motion.img
            src="/images/interview.png"
            alt="Our Mission"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </section>

 {/* Our Story con dos imágenes a la izquierda y texto a la derecha */}
<section className="relative flex flex-col md:flex-row items-center gap-8 mb-20">
  <Particles count={30} className="absolute inset-0 z-0" />

  {/* Contenedor de imágenes */}
<div className="flex flex-col gap-6 md:w-1/2 z-10"> {/* <- Cambié gap-4 a gap-6 */}
  <motion.img
    src="/images/dave.JPG"
    alt="Our Story 1"
    className="rounded-2xl shadow-lg"
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  />
  <motion.img
    src="/images/aboutUs.JPG"
    alt="Our Story 2"
    className="rounded-2xl shadow-lg"
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  />
</div>


  {/* Contenedor de texto */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="md:w-1/2 z-10"
  >
    <h2 className="text-3xl font-semibold mb-6 text-purple-800">
      Our Story
    </h2>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
      How we got started.<br /><br />
      We are incredibly proud of the level of service and honesty that we bring 
      to our clients. This all started almost by accident seven years ago when our 
      founder was running a small freight brokerage remotely from Medellin, Colombia. 
      One of his clients had difficulty finding an internal logistics coordinator 
      in the US. Dave told her he could hire an employee in Medellin for a fraction 
      of the cost and train him to handle whatever they needed.
      <br /><br />
      She was brave enough to take Dave up on the offer, and we quickly found a 
      candidate who had just graduated with a master’s degree in International Business 
      and Supply Chains. We spent two weeks training that person on our client’s internal 
      procedures. We went a step further after seeing their internal operations and later 
      advised them on different strategies to save money and streamline their operations. 
      By the end of the first year, we had helped the client save over 1 million dollars 
      on their logistics expenditures.
      <br /><br />
      Today, six years later, we have grown alongside that first client. That same individual 
      we hired to handle their logistics department is still with them, managing a team of 
      over 20 personnel across many roles, including internal HR, financial analysts, billing 
      representatives, a customer service team, and an outbound sales team.
      <br /><br />
      We have repeated this process many times with our clients across different industries, 
      providing renewed processes and staff savings, contributing to the growth of our team 
      to over 250 members.
      <br /><br />
      We’ve also branched out to handle engineering, IT, computer programming, accounting, 
      back office talent, boutique call center services, and executive assistants. In all 
      these fields, we have brought more internal team members with specializations in these 
      respective areas to ensure not only that we hire the most qualified individuals for you, 
      but also to provide consulting services that bring fresh ideas to maximize your effective 
      productivity.
    </p>
  </motion.div>
</section>


        {/* Nuestros valores */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-purple-800 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Transparency", text: "We build trust through openness and honesty, giving clients full visibility and confidence in every step." },
              { title: "Empowerment", text: "We enable people and teams to grow, take ownership, and perform at their best." },
              { title: "Collaboration", text: "We work as one team, connecting companies and talent to achieve lasting success together." },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="p-6 rounded-xl shadow-md bg-white"
              >
                <h3 className="text-xl font-bold text-purple-700 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sección de equipo */}
        <TeamSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
