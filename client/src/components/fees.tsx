import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Fees() {
  return (
    <section id="fees" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Fee Structure
          </h2>
          <p className="text-lg text-gray-600">Session 2026</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center">
          {/* Admission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
            <h3 className="text-2xl font-bold font-heading mb-2">Admission</h3>
            <div className="text-4xl font-bold text-primary mb-4">
              ₹6,000
              <span className="text-base font-normal text-gray-500">
                /one-time
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6">For the Session 2026</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500" />
                Secure your seat
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500" />
                Includes basic stationery kit
              </li>
            </ul>
            <div className="text-xs text-gray-400 mt-auto">
              * Books to be paid separately
            </div>
          </motion.div>

          {/* Monthly Tuition Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden lg:scale-105"
          >
            <h3 className="text-secondary text-2xl font-bold font-heading mb-6">
              Monthly Tuition
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Play Group</span>
                <span className="font-bold text-secondary">₹700</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Nursery</span>
                <span className="font-bold text-secondary">₹800</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Lower K.G.</span>
                <span className="font-bold text-secondary">₹900</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Upper K.G.</span>
                <span className="font-bold text-secondary">₹1000</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Class I</span>
                <span className="font-bold text-secondary">₹1100</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Class II</span>
                <span className="font-bold text-secondary">₹1200</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Class III</span>
                <span className="font-bold text-secondary">₹1300</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Class IV</span>
                <span className="font-bold text-secondary">₹1400</span>
              </div>
            </div>

            <div className="text-xs text-gray-200 mt-8">
              * ₹50 per month should be paid separately for the students of all
              classes for electric and water.
            </div>
          </motion.div>

          {/* Additional Charges Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
          >
            <h3 className="text-xl font-bold font-heading mb-6">
              Other Charges
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-800">Day Care</h4>
                <div className="text-2xl font-bold text-accent">
                  ₹3,000
                  <span className="text-sm font-normal text-gray-500">
                    /month
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800">Re-admission</h4>
                <div className="text-2xl font-bold text-orange-500">
                  ₹3,500
                  <span className="text-sm font-normal text-gray-500">
                    /session
                  </span>
                </div>
                <p className="text-xs text-gray-400">+ Books charge</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-primary hover:bg-primary/90 text-white rounded-full my-8 px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:cursor-pointer"
            size={"lg"}
            onClick={() => window.open("tel:+919564177559")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
