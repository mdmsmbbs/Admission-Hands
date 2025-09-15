import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scissors, Heart, Eye, Brain, Bone, Baby, HeadphonesIcon, CircleDot, Users, Activity, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const MSSpecializations = () => {
  const specializations = [
    {
      name: "General Surgery",
      icon: Scissors,
      description: "Comprehensive surgical procedures and emergency care",
      duration: "3 years",
      seats: "Available",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Orthopedics", 
      icon: Bone,
      description: "Bone, joint, and musculoskeletal system surgery",
      duration: "3 years",
      seats: "Available",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Ophthalmology",
      icon: Eye,
      description: "Eye and vision-related surgical procedures",
      duration: "3 years",
      seats: "Limited",
      color: "from-purple-500 to-violet-600"
    },
    {
      name: "ENT (Otolaryngology)",
      icon: HeadphonesIcon,
      description: "Ear, nose, and throat surgical specialization",
      duration: "3 years",
      seats: "Available",
      color: "from-indigo-500 to-blue-600"
    },
    {
      name: "Obstetrics & Gynecology",
      icon: Baby,
      description: "Women's reproductive health and surgical care",
      duration: "3 years",
      seats: "Available",
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "Cardiothoracic Surgery",
      icon: Heart,
      description: "Heart, lung, and chest surgical specialization",
      duration: "3 years",
      seats: "Limited",
      color: "from-red-500 to-pink-600"
    },
    {
      name: "Neurosurgery",
      icon: Brain,
      description: "Brain, spine, and nervous system surgery",
      duration: "3 years",
      seats: "Very Limited",
      color: "from-orange-500 to-amber-600"
    },
    {
      name: "Plastic Surgery",
      icon: Users,
      description: "Reconstructive and cosmetic surgical procedures",
      duration: "3 years",
      seats: "Limited",
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "Urology",
      icon: CircleDot,
      description: "Urinary system and male reproductive surgery",
      duration: "3 years",
      seats: "Available",
      color: "from-teal-500 to-cyan-600"
    },
    {
      name: "Pediatric Surgery",
      icon: Baby,
      description: "Specialized surgical care for children",
      duration: "3 years",
      seats: "Limited",
      color: "from-emerald-500 to-green-600"
    },
    {
      name: "Vascular Surgery",
      icon: Activity,
      description: "Blood vessel and circulatory system surgery",
      duration: "3 years",
      seats: "Limited",
      color: "from-violet-500 to-purple-600"
    },
    {
      name: "Surgical Oncology",
      icon: Target,
      description: "Specialized cancer surgery and tumor removal",
      duration: "3 years",
      seats: "Limited",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-300">
            MS Specializations
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Master of Surgery <span className="text-gradient">Specializations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from diverse surgical specializations and build expertise in your chosen field.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {specializations.map((spec, index) => (
            <motion.div
              key={spec.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${spec.color} rounded-lg flex items-center justify-center mb-3`}>
                    <spec.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-md font-bold text-gray-900 mb-2">{spec.name}</h3>
                  <p className="text-gray-600 text-xs mb-3 leading-relaxed">{spec.description}</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{spec.duration}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Seats:</span>
                      <span className="font-medium text-indigo-600">{spec.seats}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MSSpecializations;