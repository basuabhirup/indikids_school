import { motion } from "framer-motion";
import {
  MessageCircle,
  Brain,
  Users,
  Heart,
  BookOpen,
  PenTool,
  Activity,
  Lightbulb,
} from "lucide-react";

const goals = [
  {
    icon: MessageCircle,
    title: "Verbal Interaction",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Brain,
    title: "Psycho-motor Skill",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Users,
    title: "Social Belonging",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Heart,
    title: "Emotional Expression",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: BookOpen,
    title: "Reading Skill",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: PenTool,
    title: "Writing Skill",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Activity,
    title: "Activity Based Learning",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: Lightbulb,
    title: "Knowledge Development",
    color: "bg-indigo-100 text-indigo-600",
  },
];

export function Goals() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Our Goals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are nurturing the children to explore their potential through a
            holistic approach.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group flex flex-col items-center text-center hover:scale-105 hover:cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${goal.color} group-hover:scale-110 transition-transform`}
              >
                <goal.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-800 font-heading">
                {goal.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
