import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm mb-4"
          >
            About INDIKIDS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading mb-6"
          >
            Nurturing Tomorrow's Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            INDIKIDS is a premium English medium primary school, founded in 2017
            in the heart of Chakdaha. We bridge the gap between home and school,
            creating a fearless environment where learning happens naturally.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-orange-50 border border-orange-100"
          >
            <h3 className="text-2xl font-bold font-heading mb-4 text-orange-600">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6">
              We are followers of transition learning for little angels from
              home atmosphere to school atmosphere. We are committed to serving
              a fearless homely environment where kids learn to be illuminated.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-gray-700">
                  Patronage of Rachel Education Foundation (Govt. Reg. NGO)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-gray-700">
                  Located at Rathtala, Lalpur, Chakdaha
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-primary/10 p-6 rounded-2xl text-center hover:bg-primary/20 transition-colors hover:cursor-pointer">
              <span className="block text-4xl font-bold text-primary mb-2">
                2017
              </span>
              <span className="text-sm font-medium text-gray-600">
                Founded Year
              </span>
            </div>
            <div className="bg-secondary/20 p-6 rounded-2xl text-center hover:bg-secondary/30 transition-colors hover:cursor-pointer">
              <span className="block text-4xl font-bold text-yellow-700 mb-2">
                2+
              </span>
              <span className="text-sm font-medium text-gray-600">
                Starting Age
              </span>
            </div>
            <div className="bg-accent/10 p-6 rounded-2xl text-center hover:bg-accent/20 transition-colors col-span-2 hover:cursor-pointer">
              <span className="block text-4xl font-bold text-accent mb-2">
                CBSE
              </span>
              <span className="text-sm font-medium text-gray-600">
                Curriculum Followed
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
