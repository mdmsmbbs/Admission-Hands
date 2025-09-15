import React from "react";
import { motion } from "framer-motion";
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MDCourses: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="MD Courses - Doctor of Medicine Specializations | AdmissionHands"
        description="Explore MD course specializations and career opportunities. Complete guide to Doctor of Medicine programs in India with admission details."
        keywords="MD courses, Doctor of Medicine, medical specializations, MD admission, postgraduate medicine"
        ogTitle="MD Courses - Doctor of Medicine Specializations"
        ogDescription="Comprehensive guide to MD courses and specializations in India."
      />
      
      <main className="max-w-7xl mx-auto p-6 font-sans text-foreground bg-background">
        {/* Header Section */}
        <motion.header
          className="mb-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-extrabold mb-4 text-primary">
            Doctor of Medicine (MD) Specializations in India
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlock your path to expertise in non-surgical clinical medicine with MD degrees — a gateway
            to diagnosing, managing, and healing a broad spectrum of diseases. Explore diverse specializations tailored to your passion and career goals.
          </p>
        </motion.header>

        {/* Explore MD Specializations */}
        <section className="mb-16">
          <motion.h2
            className="text-3xl font-semibold text-primary mb-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Explore the Spectrum of MD Specializations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "MD General Medicine",
                description:
                  "The cornerstone of adult internal medicine, empowering physicians to manage a wide range of acute and chronic diseases. Gateway to super-specialties like cardiology and endocrinology.",
                icon: "❤️",
              },
              {
                title: "MD Pediatrics",
                description:
                  "Dedicated to children's health – integrating preventive care and treatment to nurture healthy growth and development.",
                icon: "👶",
              },
              {
                title: "MD Radiodiagnosis (Radiology)",
                description:
                  "Leverages cutting-edge imaging technologies such as X-rays and MRIs to reveal disease insights non-invasively.",
                icon: "🩻",
              },
              {
                title: "MD Anesthesiology",
                description:
                  "Masters anesthetic techniques, pain management, and critical care, ensuring patient safety during procedures.",
                icon: "💉",
              },
              {
                title: "MD Psychiatry",
                description:
                  "Provides diagnosis, therapy, and rehabilitation for mental and behavioral health disorders with empathy and science.",
                icon: "🧠",
              },
              {
                title: "MD Respiratory Medicine",
                description:
                  "Specializes in lung and respiratory diseases, including asthma, COPD, and tuberculosis.",
                icon: "🌬️",
              },
              {
                title: "MD Emergency Medicine",
                description:
                  "Focuses on rapid, lifesaving care for critically ill or injured patients where every second counts.",
                icon: "🚑",
              },
              {
                title: "MD Pathology",
                description:
                  "Delivers critical laboratory insights by studying disease mechanisms through tissue and fluid analysis.",
                icon: "🔬",
              },
              {
                title: "MD Microbiology",
                description:
                  "Explores infectious diseases caused by microbes, supporting diagnosis and immunology advancements.",
                icon: "🦠",
              },
              {
                title: "MD Pharmacology",
                description:
                  "Discovers the action and therapeutic use of drugs and innovates safer, effective treatments.",
                icon: "💊",
              },
              {
                title: "MD Forensic Medicine",
                description:
                  "Bridges medical knowledge with legal investigations through autopsy and medico-legal analysis.",
                icon: "🕵️‍♂️",
              },
              {
                title: "MD Community Medicine",
                description:
                  "Leads disease prevention and public health improvement through epidemiology and health education.",
                icon: "🏥",
              },
              {
                title: "MD Immunohematology & Blood Transfusion",
                description:
                  "Specializes in safe blood transfusion and hematological disorder management.",
                icon: "🩸",
              },
              {
                title: "MD Nuclear Medicine",
                description:
                  "Uses radioactive substances for advanced diagnostic imaging and therapeutic interventions.",
                icon: "☢️",
              },
              {
                title: "MD Geriatrics",
                description:
                  "Focuses on medical care for the elderly, enhancing quality of life and managing age-related conditions.",
                icon: "👵",
              },
              {
                title: "MD Sports Medicine",
                description:
                  "Prevention, diagnosis, and rehabilitation of sports injuries to promote athletic well-being.",
                icon: "🏃‍♂️",
              },
              {
                title: "MD Laboratory Medicine",
                description:
                  "Offers advanced clinical laboratory diagnostics critical for patient care.",
                icon: "🧪",
              },
              {
                title: "MD Anatomy, MD Physiology, MD Biochemistry",
                description:
                  "Foundational academic branches geared for careers in medical teaching and research.",
                icon: "📚",
              },
            ].map(({ title, description, icon }, index) => (
              <motion.article
                key={title}
                className="bg-card p-6 rounded-xl shadow-md flex flex-col border border-border hover:shadow-lg transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
                  },
                }}
              >
                <div className="text-5xl mb-3 text-center">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
                <p className="text-muted-foreground flex-grow">{description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Additional MD Specializations Section */}
        <motion.section
          className="mb-16 bg-muted/50 p-8 rounded-lg max-w-5xl mx-auto border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
            Additional MD Specializations
          </h2>
          <ul className="list-disc list-inside space-y-3 text-foreground text-lg max-w-3xl mx-auto">
            <li>
              <strong>MD Dermatology, Venereology & Leprosy:</strong> Specialized skin care and STIs treatment.
            </li>
            <li>
              <strong>MD Medical Genetics:</strong> Advanced diagnostics and counseling in genetic disorders.
            </li>
            <li>
              <strong>MD Tropical Medicine:</strong> Tackling diseases endemic to tropical climates.
            </li>
            <li>
              <strong>MD Family Medicine:</strong> Holistic healthcare across age groups and diseases.
            </li>
            <li>
              <strong>MD Palliative Medicine:</strong> Compassionate care for serious illness patients.
            </li>
            <li>
              <strong>MD Marine Medicine:</strong> Health issues related to marine environments.
            </li>
            <li>
              <strong>MD Health Administration:</strong> Management skills for efficient healthcare systems.
            </li>
            <li>
              <strong>MD Physical Medicine & Rehabilitation:</strong> Patient recovery from injuries.
            </li>
            <li>
              <strong>MD Aviation/Aerospace Medicine:</strong> Specialized health for flight and space travel.
            </li>
            <li>
              <strong>MD Tuberculosis & Respiratory Diseases:</strong> Focused care on TB and related illnesses.
            </li>
            <li>
              <strong>MD Hospital Administration:</strong> Leadership in hospital management and operations.
            </li>
          </ul>
        </motion.section>

        {/* Admission Process Section */}
        <motion.section
          className="mb-16 max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold text-primary mb-6">Admission Process for MD in India</h2>
          <p className="mb-4 text-foreground text-lg">
            To pursue MD, candidates must have completed an MBBS degree along with a mandatory internship.
            Admission selection is through NEET PG, India's premier national-level entrance exam for postgraduate medical courses.
            The MD program typically spans 3 rigorous years combining theoretical learning, clinical exposure, and research.
          </p>
          <p className="text-muted-foreground italic">
            <strong>Note on Fees:</strong> Government colleges offer affordable fees, private colleges charge moderate fees,
            while management and NRI quota seats come with higher fee structures.
          </p>
        </motion.section>

        {/* Why Choose MD Section */}
        <motion.section
          className="bg-muted/50 p-8 rounded-lg max-w-5xl mx-auto mb-16 border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Why Choose MD?</h2>
          <p className="mb-4 text-foreground text-lg max-w-3xl mx-auto text-center">
            MD opens doors to rewarding medical careers in hospitals, research institutes, teaching, and private practice.
            Graduates can advance further with DM super-specializations or fellowship programs.
            With healthcare's increasing complexity and specialization, MD degrees have strong demand both in India and abroad.
          </p>
        </motion.section>

        {/* Why Admission Hands Section */}
        <motion.section
          className="max-w-4xl mx-auto p-8 bg-primary rounded-lg text-primary-foreground mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Why Admission Hands?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg max-w-3xl mx-auto">
            <li>Expert counseling to choose the MD specialization matching your passion and future scope.</li>
            <li>Comprehensive guidance on seat availability: government, private, management & NRI quotas.</li>
            <li>Strategic NEET PG preparation support for maximizing ranks and optimizing seat selection.</li>
            <li>Personalized admission assistance to ensure seamless, stress-free success.</li>
          </ul>
          <p className="mt-6 text-center font-semibold text-xl">
            Partner with Admission Hands for your confident journey to becoming a medical specialist!
          </p>
        </motion.section>
      </main>
      
      <CTA />
    </div>
  );
};

export default MDCourses;