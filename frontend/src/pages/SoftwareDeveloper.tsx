// pages/SoftwareDeveloper.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoTextMask from "../components/VideoTextMask";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

// Íconos
// Íconos
import {
  FaLaptopCode, FaServer, FaPaintBrush, FaMobileAlt, FaCloud,
  FaCode, FaTools, FaAppStoreIos, FaHandshake, FaShieldAlt,
  FaLightbulb, FaGlobe
} from "react-icons/fa";

import {
  MdWork, MdOutlineAnalytics, MdPersonSearch
} from "react-icons/md";


export default function SoftwareDeveloper() {
  return (
    <>
      <Header />

      {/* Hero con video */}
      <VideoTextMask
        videoSrc="/videos/Logistics.mp4"
        topText="SOFTWARE"
        bottomText="DEVELOPER"
      />

      {/* Intro */}
      <section className="py-16 bg-white text-center px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-purple-900 mb-6">
          Hire developers in Latin America for full time and contract roles
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Hire IT developers who truly fit your culture and requirements in just one week.{" "}
          <strong>100% GUARANTEED.</strong> At iTalenters, we connect you with top tier developers
          experienced in programming languages like Java, Python, and JavaScript, as well as frameworks
          such as ReactJS.
        </p>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto mt-4">
          We recruit leading Software Architects, Front End and Back End developers, and Cloud specialists
          across AWS, GCP, and Azure, all well versed in Agile methodologies.
        </p>
        <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg">
          Get Started
        </Button>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white px-6 lg:px-16">
        <h3 className="text-2xl font-bold text-center text-purple-900 mb-12">
          Multiple benefits from our Software Developer Transformation services
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "LatAm Software Developer",
              desc: "Skilled Latin American Software Developers offering robust technical expertise at 35% lower cost than U.S. counterparts.",
            },
            {
              title: "Aligned Time Zones",
              desc: "Work seamlessly with developers in similar time zones to boost productivity and reduce delays.",
            },
            {
              title: "Remote Engineers That Fit Your Culture",
              desc: "We help you hire top remote developers who blend with your tech stack and company culture.",
            },
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-purple-800 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Browse Developers */}
      <section className="py-20 bg-white px-6 lg:px-16">
        <h3 className="text-2xl font-bold text-center text-purple-900 mb-12">
          Browse Our Developers
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaLaptopCode />, title: "Full Stack Developer" },
            { icon: <FaServer />, title: "Backend Developer" },
            { icon: <FaPaintBrush />, title: "Frontend Developer" },
            { icon: <FaMobileAlt />, title: "Mobile Developer" },
            { icon: <FaTools />, title: "Power Apps Developer" },
            { icon: <FaCode />, title: "Web Developer" },
            { icon: <FaCloud />, title: "Software Developer" },
            { icon: <FaAppStoreIos />, title: "Web App Developer" },
          ].map((dev, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-purple-50 rounded-xl p-6 shadow-md text-center"
            >
              <div className="text-4xl mb-4 text-purple-700">{dev.icon}</div>
              <h4 className="text-lg font-semibold text-purple-800 mb-2">{dev.title}</h4>
              <Button variant="outline" className="rounded-full">
                GET STARTED
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Performance */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white text-center px-6">
        <h3 className="text-2xl font-bold text-purple-900 mb-6">Track Your Global Performance</h3>
        <p className="max-w-3xl mx-auto text-gray-700 mb-4">
          Use clear, actionable insights to guide your strategy and stay ahead of competitors.
        </p>
        <p className="max-w-3xl mx-auto text-gray-700 mb-8">
          Understand regional trends, make data driven decisions, and see real time analytics of your
          business impact.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg">
          View Analytics Dashboard
        </Button>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-white px-6 lg:px-16">
        <h3 className="text-2xl font-bold text-center text-purple-900 mb-12">
          How we hire software developers at StaffBridge
        </h3>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: <MdPersonSearch />, title: "Recruit", desc: "We continuously source engineers for core roles through inbound, outbound and referral sourcing." },
            { step: <MdWork />, title: "Match", desc: "Our talent experts and smart platform surface top candidates for your roles and culture." },
            { step: <MdOutlineAnalytics />, title: "Interview", desc: "We collaborate to manage the interview and feedback process with you to ensure perfect fits." },
            { step: <FaHandshake />, title: "Hire & Employ", desc: "We seamlessly hire and, if needed, manage remote employment, payroll, benefits, and equity." },
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 text-purple-700">{item.step}</div>
                <h4 className="text-lg font-semibold text-purple-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white px-6 text-center">
        <h3 className="text-2xl font-bold text-purple-900 mb-8">
          Why choose Developer to hire top tech talent?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <FaShieldAlt />, title: "Guaranteed Free Replacement", desc: "We quickly replace any developer who doesn’t match your expectations, at no extra cost." },
            { icon: <FaLightbulb />, title: "Tech Talent Experts", desc: "Our team deeply understands tech roles and finds developers who fit both your skills and culture needs." },
            { icon: <FaGlobe />, title: "Global Reach", desc: "We have many satisfied customers with our developers." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <div className="text-4xl mb-4 text-purple-700">{item.icon}</div>
              <h4 className="text-lg font-semibold text-purple-800 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fast track */}
      <section className="py-20 bg-white px-6 text-center">
        <h3 className="text-2xl font-bold text-purple-900 mb-8">Fast track your hiring process</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: "1", title: "Priority onboarding team", desc: "We keep part of our top network ready to join urgent projects for new clients immediately." },
            { step: "2", title: "Project deep dive", desc: "We learn your technical goals to ensure shortlisted developers match your stack and workflow." },
            { step: "3", title: "AI powered sourcing", desc: "We combine AI tools and human expertise to quickly deliver top-tier, pre vetted candidates." },
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-purple-800 mb-4">{item.step}</div>
                <h4 className="text-lg font-semibold text-purple-800 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button className="mt-10 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg">
          GET MORE DETAILS
        </Button>
      </section>

      <Footer />
    </>
  );
}
