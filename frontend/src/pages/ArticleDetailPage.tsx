"use client";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blob from "../components/Blob";
import Particles from "../components/Particles";

export default function ArticleDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden relative">
      <Header />

      {/* Banner superior */}
<section
  className="w-full h-[35vh] md:h-[50vh] bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/images/banner.png')",
  }}
>
  {/* Oscurecer un poco la imagen para que se vea mejor el texto (opcional) */}
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative z-10 h-full flex items-center justify-center">

  </div>
</section>


      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.1),transparent_70%)]"></div>
      <Particles count={25} />
      <Blob className="absolute top-40 left-10 opacity-30 z-0" />
      <Blob className="absolute bottom-20 right-20 opacity-20 z-0" />



      <section className="relative w-full h-[40vh] flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-purple-900 drop-shadow-md"
        >
          Customer Service: The (Often Forgotten) Engine of Growth
        </motion.h1>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl">
          Exploring how service drives sustainable business growth, loyalty, and
          competitive advantage.
        </p>
      </section>

      <section className="relative max-w-4xl mx-auto px-6 py-12 z-10">
        <article className="prose prose-lg prose-purple max-w-none leading-loose space-y-6">
          <p>
            In business, obsession with acquisition is everywhere. Companies
            pour millions into marketing campaigns, new sales tools, and bigger
            pipelines. Winning new customers feels like the ultimate goal.
          </p>
          <p>
            The numbers tell a different story: growth isn’t just about adding
            more clients, it’s about keeping the ones you already have. Studies
            show that <strong>65% of revenue typically comes from existing customers</strong>,
            and loyal clients are worth up to 10 times more than their first
            purchase. On the flip side, poor service costs U.S. businesses an
            estimated $75 billion a year.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-purple-900">More Than a Cost Center</h2>
          <p>
            For too long, customer service has been treated as an expense to
            minimize rather than a strategy to maximize. Yet the evidence points
            in a different direction. According to PwC, <strong>86% of consumers are
            willing to pay more for a better experience</strong>. In other words, service
            isn’t just about solving problems; it directly drives revenue.
          </p>
          <p>
            Think about it: the fastest way to lose a customer isn’t a bad
            product, it’s a bad interaction.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-purple-900">The Human Factor</h2>
          <p>
            Technology can streamline support, but what customers remember is
            how they felt during an interaction. A warm call, a patient
            explanation, or a proactive solution can completely change the story
            of a brand.
          </p>
          <p>
            In fact, Microsoft’s global survey found that <strong>58% of consumers
            consider customer service a key factor in brand loyalty</strong>. People
            don’t stay because you’re perfect; they stay because you show up when
            it matters.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-purple-900">The Scaling Challenge</h2>
          <p>
            Here’s the hard part: delivering high quality service at scale. It
            means building teams that are skilled, empathetic, and aligned with
            your brand values, while also meeting the growing expectations of
            speed and accessibility.
          </p>
          <p>
            But the businesses that get it right create a double win: lower
            churn and higher lifetime value.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-purple-900">The Future of Growth</h2>
          <p>
            Customer service is no longer “nice to have.” It’s the backbone of
            sustainable business. When companies view it as a growth engine
            instead of a cost center, they create resilience in revenue and
            stronger relationships that no competitor can easily disrupt.
          </p>
          <blockquote>
            Is customer service in your company treated as a line item to
            control, or as a strategic advantage to grow?
          </blockquote>

          <h2 className="text-2xl md:text-3xl font-bold text-purple-900">The Nearshore Advantage</h2>
          <p>
            Customer expectations are higher than ever, and scaling support
            quickly is essential. But what if we could add something uniquely
            valuable? Studies show that Latin American professionals are known
            for their highly personalized, empathetic approach to customer
            service, creating genuine connections that drive satisfaction and
            loyalty.
          </p>
          <ul>
            <li>
              <strong>Cultural alignment & language fluency</strong> teams that
              understand your customers and communicate naturally.
            </li>
            <li>
              <strong>Time zone proximity</strong> real time collaboration without
              delays or misalignment.
            </li>
            <li>
              <strong>Cost efficient structures</strong> smart ways to grow your
              team while reinvesting in quality.
            </li>
            <li>
              <strong>High retention rates</strong> professionals who feel well
              compensated and valued stay longer, providing consistency and
              reliability.
            </li>
          </ul>
          <p>
            People matter, and that’s why it’s essential to show your community
            that they are being heard and that their opinions truly count. You
            don’t need to rely on machines just because it seems easier or
            cheaper, doing so can put the quality and efficiency of your service
            at risk.
          </p>
          <p>
            Nearshore teams are here to stay, not just to support your business,
            but to elevate it, delivering a customer experience that is
            efficient, consistent, and genuinely human.
          </p>
        </article>
      </section>

      <Footer />
    </div>
  );
}
