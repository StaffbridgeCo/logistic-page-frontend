// src/pages/WorkWithUs.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Particles from "../components/Particles";
import Blob from "../components/Blob"; 

const jobs = [
  {
    id: 1,
    title: "Customer Service Representative",
    location: "Medellín (Hybrid)",
    link: "https://www.linkedin.com/jobs/view/123456789/", // reemplaza con tu enlace real
    details: `
    **Schedule:** Monday to Friday / 8:00 AM – 5:00 PM / Hybrid  
    **Contract Type:** Permanent  

    **About Us:**  
    At StaffBridge, we’re a growing logistics company with a people-first approach. We’re big on teamwork, development, and giving our team space to grow. If you're looking to be part of a supportive environment where your work really counts, this is the place!  

    **Your Role:**  
    We’re looking for a Customer Service Representative to be the first point of contact for our customers. In this role, you will provide timely and helpful support primarily through chat. You’ll be responsible for answering customer inquiries, resolving issues efficiently, escalating concerns when needed, and maintaining accurate records of all interactions.  

    **What You Bring:**  
    - Previous experience with Shopify Store and TikTok Shop  
    - Great communication and problem-solving skills  
    - Strong written communication skills  
    - Availability to work the assigned schedule  

    **Why Join Us?**  
    - Be part of a fast-growing, team-oriented company  
    - Supportive culture with room for professional growth  
    - Your role is key to keeping our logistics running smoothly  

    **Ready to Join the Team?**
    `,
  },
  {
    id: 2,
    title: "Pricing Analyst",
    location: "Remote / Medellín",
    link: "https://www.linkedin.com/jobs/search/?currentJobId=4316338216&f_C=104489629&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=4316338216%2C4311585861%2C4316333264&trk=d_flagship3_company", // reemplaza con el enlace real
    details: `
    **About the Role:**  
    Staffbridge is seeking a Pricing Analyst to take the lead in developing competitive, data-driven pricing strategies that strengthen our carrier network and improve profitability. This role combines analytical skills, negotiation, and relationship management, helping the company secure the best rates while maintaining operational excellence.  

    If you’re detail-oriented, great with numbers, and passionate about optimizing logistics performance, this is a great opportunity to grow your career in a dynamic and fast-paced environment.  

    **What You’ll Do:**  
    - Price all new business opportunities, both within and outside the current carrier network.  
    - Cold-call carriers to build and maintain a comprehensive, compliant directory aligned with client needs.  
    - Run RFP analyses, benchmarks, and pricing models to identify cost-saving opportunities.  
    - Partner with Finance to align on network capacity, budgets, and landed cost savings.  
    - Collaborate with Technology teams (TMS, WMS, Visibility tools) to enhance pricing visibility and data quality.  
    - Create weekly Excel reports summarizing pricing metrics and carrier performance.  
    - Ensure new carriers are properly onboarded with correct compliance, visibility setup, and SOPs.  
    - Develop and track short- and long-term capacity plans tied to measurable KPIs.  

    **What We’re Looking For:**  
    - 2+ years of experience in pricing, procurement, or operations within logistics, freight, or transportation.  
    - Strong skills in Excel and data analysis (pricing models, RFP analysis, reporting).  
    - Excellent communication and negotiation skills.  
    - Knowledge of LTL, FTL, or carrier management is a plus.  
    - Detail-oriented, analytical thinker who thrives in fast-paced environments.  
    - Comfortable with cold calling and building carrier relationships.  

    **Why You’ll Love Working With Us:**  
    - Be part of a growing logistics company where your work directly impacts results.  
    - Collaborate with a supportive, high-performing team.  
    - Competitive compensation and clear growth opportunities.  
    - A dynamic environment where innovation and initiative are valued.  
    `,
  },
  {
    id: 3,
    title: "IT Support Specialist",
    location: "Remote / Medellín",
    link: "https://www.linkedin.com/jobs/search/?currentJobId=4311585861&f_C=104489629&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=4316338216%2C4311585861%2C4316333264&trk=d_flagship3_company", // reemplaza con el enlace real
    details: `
    **About Us:**  
    At Staffbridge, we’re a people-first company where teamwork and innovation drive everything we do. As we continue to grow, we’re looking for someone who’s passionate about technology and enjoys helping others.  

    **The Role:**  
    We’re seeking an IT Support Specialist to keep our systems, devices, and networks running smoothly across the company. You’ll be the go-to person for troubleshooting, device setup, and user support — making sure our teams can work efficiently and securely every day.  

    **What You’ll Do:**  
    - **Mobile Device Support (via Hexnode MDM):** Install apps, re-enroll devices, and handle resets/wipes when needed.  
    - **Desktop Support (Windows & macOS):** Install/configure apps, troubleshoot login/network issues, and address MDM-related problems.  
    - **System & Network Troubleshooting:** Resolve performance issues, handle LAN/WAN connectivity, and diagnose system errors.  
    - **Peripheral Support:** Assist with office printer and other hardware issues.  
    - **IT Operations & Collaboration:**  
      - Partner with the Head of IT to deploy updates, patches, and security fixes.  
      - Track, resolve, and follow up on support tickets.  
      - Maintain clear documentation of systems and support processes.  
      - Report outages or interruptions promptly.  

    **What We’re Looking For:**  
    - Strong communication and customer service skills.  
    - Proactive approach to problem-solving and ticket resolution.  
    - Experience with MDM and RMM tools.  
    - Familiarity with Microsoft Azure (Tenant ID).  
    - Proficiency with:  
      - Windows and macOS  
      - Android and iOS  
      - Apple Business Manager  
      - Office 365 administration  

    **Why Join Us:**  
    - Be part of a growing company that values your expertise.  
    - Work on diverse technologies across mobile, desktop, and networks.  
    - Collaborate with a supportive IT and operations team.  
    - Competitive compensation and opportunities for growth.  
    `,
  },
];


export default function WorkWithUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Particles count={40} />
      <Blob className="absolute top-20 right-50 z-0" />

      {/* Hero */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Texto a la izquierda */}
          <Particles count={30} />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
              Work With Us
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              <span className="text-yellow-500 font-bold block mb-2">STAFFBRIDGE CREW</span>
              We value our team members as capable, intelligent professionals.
              With that respect comes trust, we provide the autonomy to approach
              responsibilities with confidence and ownership.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We believe in clear goals and open communication. What matters most is
              reliability, collaboration, and a shared commitment to delivering
              great results.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We understand that effective solutions can take different forms, and
              we trust you to make smart decisions and thrive in your role.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a
                href="#jobs"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
              >
                See Open Roles
              </a>
            </motion.div>
          </motion.div>

          {/* Imagen a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center items-center"
          >
            <img
              src="/images/WORKWITHUS.JPG"
              alt="Team working"
              className="rounded-2xl shadow-lg max-w-full"
            />
          </motion.div>
        </div>
      </section>



      {/* Descubre StaffBridge */}
      <section className="py-20 bg-gray-100 relative z-10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-purple-900 mb-12"
          >
            Discover Life at StaffBridge
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Life at StaffBridge", img: "/images/life-staffbridge.png", link: "/life-StaffBridge" },
              { title: "Our Offices", img: "/images/OfficeSpace.JPG", link: "/our-offices" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-64 group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500 flex flex-col items-center justify-center text-white text-center px-4">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <Link
                    to={item.link}
                    className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-purple-800 transition"
                  >
                    Learn more
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      
      {/* Valores */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Innovation",
                text: "We embrace creativity and forward thinking to develop smarter solutions that empower businesses and professionals alike.",
              },
              {
                title: "Humility",
                text: "We lead with empathy, respect, and a willingness to learn valuing collaboration over competition.",
              },
              {
                title: "Teamwork",
                text: "We believe great things happen when talented people unite under a shared mission to connect talent with opportunity.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-purple-700 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* Vacantes */}
      <section id="jobs" className="py-20 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center hover:shadow-xl transition"
              >
                <div>
                  <h3 className="text-lg font-semibold text-purple-800">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600">{job.location}</p>
                </div>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-yellow-500 text-white rounded-lg font-medium shadow hover:opacity-90 transition"
                >
                  Apply on LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-yellow-500 text-center text-white relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to grow with us?
        </h2>
        <a
          href="#jobs"
          className="px-8 py-4 bg-white text-purple-800 font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
        >
          Explore Careers
        </a>
      </section>
    </div>
  );
}
