import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const curriculumData = [
  {
    class: "Play Group",
    age: "2+",
    topics: [
      "Recognition of English alphabets A-Z (Capital)",
      "Numbers 1-20",
      "Basic colours, figures and shapes",
      "Flowers, fruits, birds and animals",
      "Basic manners",
      "Finger counting 1-10",
      "Bengali alphabets and numbers",
      "Rhymes, Singing, Dancing, Drawing",
      "Practical activities"
    ]
  },
  {
    class: "Nursery",
    age: "3+",
    topics: [
      "Alphabets A-Z (Capital & Small, 5 examples)",
      "Numbers & Spelling 1-50",
      "Colours, figures and shapes",
      "GK: School, family, society",
      "Basic manners & Finger counting",
      "Bengali alphabets, numbers with names",
      "English & Bengali conversation",
      "Story telling",
      "Activity based learning"
    ]
  },
  {
    class: "Lower K.G.",
    age: "4+",
    topics: [
      "Alphabets A-Z with Cursive Writing",
      "Basic grammar & sentence construction",
      "Numbers & Spelling 1-100",
      "Basic sums (size, shape, numbers)",
      "Concept of rainbow & colors",
      "Bengali grammar & sentence construction",
      "English & Bengali rhymes",
      "Practical Activities"
    ]
  },
  {
    class: "Upper K.G.",
    age: "5+",
    topics: [
      "Cursive writing (Small & Capital)",
      "Grammar, sentence & paragraph writing",
      "Numbers & Spelling 1-500",
      "Number tables 1-10",
      "Addition & Subtraction (1-3 digits)",
      "GK & Social awareness",
      "Bengali paragraph writing",
      "Creative activities"
    ]
  },
  {
    class: "Class I",
    age: "6+",
    topics: [
      "Advanced Cursive Writing",
      "Pronunciation & Vocabulary",
      "Numbers 1-1000",
      "Time, money, distance, weight concepts",
      "Tables 1-10",
      "Add, Sub, Mul, Div, Simplification",
      "Environment & Science concepts",
      "Bengali Translation & Grammar"
    ]
  },
  {
    class: "Class II",
    age: "7+",
    topics: [
      "Advanced Grammar & Translation",
      "Small paragraph writing",
      "Tables 1-15",
      "Four digit calculations",
      "3D figures and shapes",
      "Environment & Society",
      "Story writing",
      "Practical Science concepts"
    ]
  },
  {
    class: "Class III",
    age: "8+",
    topics: [
      "Reading skill development",
      "Comprehension & Translation",
      "Unitary methods & Metric system",
      "Tables 1-20",
      "Sums up to 5 digits",
      "Science & Environmental Studies",
      "Computer Application basics",
      "Bengali comprehension"
    ]
  },
  {
    class: "Class IV",
    age: "9+",
    topics: [
      "Advanced Reading & Grammar",
      "Fraction, average, ratio concepts",
      "Simplification & Story sums",
      "GK: Recent incidents",
      "History, Geography, Science",
      "Computer Application",
      "Creative Writing in English & Bengali"
    ]
  }
];

export function Curriculum() {
  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Academic <br/> Curriculum</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We follow the CBSE School curriculum, tailored to provide a strong foundation for every age group. From play-based learning to structured academic concepts.
                </p>
                <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white rotate-2 hidden lg:block">
                  <img src="/attached_assets/generated_images/bright_kindergarten_classroom_with_colorful_furniture_and_educational_toys.png" alt="Classroom" className="w-full h-auto" />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {curriculumData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-xl px-4 shadow-sm data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4 text-left">
                      <span className="font-heading font-bold text-lg md:text-xl text-slate-800">{item.class}</span>
                      <Badge variant="secondary" className="bg-secondary/20 text-yellow-800 hover:bg-secondary/30">Age {item.age}</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="grid gap-2 text-gray-600">
                      {item.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
