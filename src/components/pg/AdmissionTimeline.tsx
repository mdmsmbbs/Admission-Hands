import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const AdmissionTimeline = () => {
  const timelineEvents = [
    {
      month: "February",
      event: "NEET PG Examination",
      description: "NEET PG exam conducted by NBE",
      status: "completed"
    },
    {
      month: "March",
      event: "Result Declaration",
      description: "NEET PG results and merit list released",
      status: "completed" 
    },
    {
      month: "April-May",
      event: "All India Counseling",
      description: "AIQ counseling rounds conducted",
      status: "active"
    },
    {
      month: "June-July",
      event: "State Counseling",
      description: "State quota counseling begins",
      status: "upcoming"
    },
    {
      month: "August",
      event: "Direct Admissions",
      description: "Management quota admissions open",
      status: "upcoming"
    },
    {
      month: "September",
      event: "Classes Begin",
      description: "Academic session starts",
      status: "upcoming"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'active': return 'bg-blue-100 text-blue-700';
      case 'upcoming': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-300">
            Admission Timeline
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            PG Medical <span className="text-gradient">Admission Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with important dates and deadlines for PG medical admissions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.month}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-8 h-8 text-blue-600" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{event.event}</h3>
                          <Badge className={getStatusColor(event.status)}>
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-1">{event.description}</p>
                        <div className="flex items-center gap-1 text-sm text-blue-600">
                          <Clock className="w-4 h-4" />
                          <span>{event.month}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our notifications to receive timely updates about admission deadlines and important announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionTimeline;