"use client";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blob from "../components/Blob";
import Particles from "../components/Particles";

export default function ArticleNearshorePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden relative">
      <Header />

      {/* Banner superior */}
      <section
        className="w-full h-[35vh] md:h-[50vh] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/banner2.JPG')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-center"></div>
      </section>

      {/* Background decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.1),transparent_70%)]"></div>
      <Particles count={25} />
      <Blob className="absolute top-40 left-10 opacity-30 z-0" />
      <Blob className="absolute bottom-20 right-20 opacity-20 z-0" />

      {/* Hero */}
      <section className="relative w-full h-[40vh] flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-purple-900 drop-shadow-md"
        >
          Turnover: The Unseen Supply Chain Disruption
        </motion.h1>

        <p className="mt-4 text-gray-600 text-lg max-w-3xl">
          Exploring how employee turnover is quietly reshaping the logistics
          industry and what leaders can do about it.
        </p>
      </section>

      {/* Main Content */}
      <section className="relative max-w-4xl mx-auto px-6 py-12 z-10">
        <article className="prose prose-lg prose-purple max-w-none leading-loose space-y-6">

          {/* Custom H2 Style */}
          <style>
            {`
              article h2 {
                font-weight: 800 !important;
                font-size: 2rem !important;
                color: #4c1d95 !important;
                margin-top: 3rem !important;
                margin-bottom: 1rem !important;
              }

              @media (min-width: 768px) {
                article h2 {
                  font-size: 2.4rem !important;
                }
              }
            `}
          </style>

          <p>
            When people talk about supply chain challenges, the conversation
            usually circles around containers, freight costs, or delivery
            delays. But there’s another disruption quietly draining the
            logistics industry: employee turnover.
          </p>

          <p>
            While operations focus on moving goods across borders, many
            companies overlook the talent pipeline that makes it all possible.
            And when that pipeline leaks, the entire system feels the shock.
          </p>

          <h2>The Hidden Cost of Each Exit</h2>

          <p>
            The U.S. logistics industry has one of the highest turnover rates in
            the country. Across the sector, the average hovers above 30%, while
            in trucking it can climb to an alarming 80% annually.
          </p>
          <p>
            This isn’t just a staffing inconvenience; it’s a direct threat to
            stability. Each time an employee leaves, the cost goes far beyond a
            recruitment ad. Companies lose time, productivity, and institutional
            knowledge.
          </p>
          <p>
            In financial terms, replacing a single role can cost more than 30%
            of annual salary, sometimes even more for specialized positions.
          </p>

          <h2>Why People Really Leave</h2>

          <p>
            Turnover is often blamed on pay, but the reality is far more
            complex. Compensation plays a role, yes, but research and exit
            interviews reveal that what truly drives people out the door are
            unmet expectations around growth, recognition, and leadership.
          </p>

          <p>
            More than 70% of Millennial and Gen Z workers say they’ll leave if
            they don’t see a path forward. Meanwhile, 82% of employees report
            they don’t feel valued for their contributions. When you add in
            leadership gaps, poor communication, lack of support, and unclear
            direction, the foundation of trust begins to crumble.
          </p>

          <p>
            Burnout is the silent accelerant. In logistics, especially,
            relentless schedules, high pressure, and constant firefighting wear
            people down fast. When employees feel overworked and underappreciated,
            or when their compensation doesn’t reflect the effort required,
            resignation becomes not just a choice, but a form of survival.
          </p>

          <p>
            And the cost isn’t just losing a worker. In logistics, every role,
            from dispatch to warehouse to customer support, touches the supply
            chain. Disengagement spreads like a ripple: operations slow,
            mistakes multiply, and customers inevitably feel the impact.
          </p>

          <h2>The Cost of Ignoring the Problem</h2>

          <p>
            Despite knowing how expensive turnover is, many logistics companies
            don’t address it as a strategic risk.
          </p>

          <ul>
            <li>Only 47% actively measure turnover costs.</li>
            <li>Just 3% monitor its impact on productivity.</li>
          </ul>

          <p>
            Without visibility, the cycle repeats: companies overspend on
            hiring, underinvest in retention, and watch as performance quietly
            erodes from within.
          </p>

          <h2>The Shift: Talent as a Competitive Advantage</h2>

          <p>
            In today’s logistics landscape, efficiency isn’t driven only by
            assets like fleets or warehouses; it’s driven by people. Companies
            that succeed are those that create stable, engaged teams.
          </p>

          <p>
            That’s why nearshore staffing has become a game-changer for
            logistics leaders in the U.S. By tapping into skilled professionals
            in Latin America, companies can:
          </p>

          <ul>
            <li>Access motivated talent aligned with their culture and time zone.</li>
            <li>Reduce costs without sacrificing quality.</li>
            <li>
              Implement onboarding, recognition, and career development programs
              that boost retention.
            </li>
          </ul>

          <p>
            When your workforce stays engaged, operations stabilize, costs drop,
            and customer satisfaction grows.
          </p>

          <h2>How StaffBridge Changes the Game</h2>

          <p>
            At StaffBridge, we partner with logistics and transportation
            companies to break the cycle of costly turnover. Our approach
            combines:
          </p>

          <ul>
            <li>
              <strong>Nearshore staffing solutions</strong> → Building reliable,
              high-performing teams in Latin America.
            </li>
            <li>
              <strong>Retention-focused strategies</strong> → From career growth
              opportunities to recognition systems that foster loyalty.
            </li>
            <li>
              <strong>Seamless integration</strong> → Nearshore teams that
              operate as a natural extension of U.S. operations.
            </li>
            <li>
              <strong>Compensation alignment</strong> → Competitive packages
              designed to motivate and retain top talent.
            </li>
          </ul>

          <p>
            The result: stronger teams, healthier margins, and sustainable
            growth.
          </p>

          <p>
            If your organization is struggling with high turnover, the answer
            isn’t replacing people faster; it’s building smarter. Nearshore
            staffing is a proven model that balances cost, quality, and
            retention.
          </p>

          <blockquote>
            The question is: how resilient is your team today, and how ready are
            you for tomorrow’s logistics challenges?
          </blockquote>

        </article>
      </section>

      <Footer />
    </div>
  );
}
