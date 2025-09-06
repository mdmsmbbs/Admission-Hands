import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scissors, Heart, Eye, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const MSSpecializations = () => {
  const specializations = [
    {
      name: "General Surgery",
      icon: Scissors,
      description: "Comprehensive surgical procedures and emergency care",
      duration: "3 years",
      seats: "2000+",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Orthopedics",
      icon: Brain,
      description: "Bone, joint, and musculoskeletal system surgery",
      duration: "3 years",
      seats: "1200+",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Ophthalmology",
      icon: Eye,
      description: "Eye and vision-related surgical procedures",
      duration: "3 years",
      seats: "800+",
      color: "from-purple-500 to-violet-600"
    },
    {
      name: "Cardiothoracic Surgery",
      icon: Heart,
      description: "Heart, lung, and chest surgical specialization",
      duration: "3 years",
      seats: "400+",
      color: "from-red-500 to-pink-600"
    },
    {
      name: "Neurosurgery",
      icon: Brain,
      description: "Brain, spine, and nervous system surgery",
      duration: "3 years",
      seats: "300+",
      color: "from-orange-500 to-amber-600"
    },
    {
      name: "Plastic Surgery",
      icon: Scissors,
      description: "Reconstructive and cosmetic surgical procedures",
      duration: "3 years",
      seats: "500+",
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "ENT Surgery",
      icon: Scissors,
      description: "Ear, nose, and throat surgical specialization",
      duration: "3 years",
      seats: "600+",
      color: "from-indigo-500 to-blue-600"
    },
    {
      name: "Urology",
      icon: Scissors,
      description: "Urinary system and male reproductive surgery",
      duration: "3 years",
      seats: "400+",
      color: "from-teal-500 to-cyan-600"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => (
            <motion.div
              key={spec.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${spec.color} rounded-lg flex items-center justify-center mb-4`}>
                    <spec.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{spec.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{spec.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{spec.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Available Seats:</span>
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