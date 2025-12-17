import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@assets/generated_images/happy_diverse_children_running_in_a_green_park_with_a_school_building_in_the_background.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-linear-to-br from-yellow-50 via-white to-blue-50"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-sm font-semibold text-gray-600">
              Admission Open for Session 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-slate-900 leading-[1.1]">
            Where Kids <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              Learn to be Illuminated
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            A Next Generation English Medium Primary School nurturing little
            angels from a homely atmosphere to a fearless learning environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:cursor-pointer"
              onClick={() =>
                document
                  .querySelector("#fees")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Apply for 2026
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-lg font-bold border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary transition-all hover:cursor-pointer"
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src={heroImage}
              alt="Happy kids at school"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>

          {/* Decorative elements behind image */}
          <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-secondary rounded-[2rem] transform rotate-6" />
          <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full bg-accent rounded-[2rem] transform -rotate-3" />
        </motion.div>
      </div>
    </section>
  );
}
