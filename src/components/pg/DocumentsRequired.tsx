import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const DocumentsRequired = () => {
  const documentCategories = [
    {
      category: "Academic Documents",
      documents: [
        "MBBS degree certificate",
        "MBBS marksheets (all semesters)",
        "Internship completion certificate",
        "MCI/State Medical Council registration certificate",
        "NEET PG scorecard"
      ]
    },
    {
      category: "Identity Documents",
      documents: [
        "Aadhar Card",
        "PAN Card", 
        "Passport (if applicable)",
        "Domicile certificate",
        "Caste certificate (if applicable)"
      ]
    },
    {
      category: "Other Documents",
      documents: [
        "Passport size photographs (10 copies)",
        "Transfer certificate",
        "Migration certificate",
        "Income certificate (if required)",
        "Medical fitness certificate"
      ]
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
          <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-300">
            Required Documents
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Documents <span className="text-gradient">Required</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prepare all necessary documents for a smooth PG medical admission process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {documentCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.documents.map((doc, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Document Preparation Tips</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Download className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Keep Multiple Copies</div>
                    <div className="text-sm text-gray-600">Prepare 3-4 photocopies of each document</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Download className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Proper Attestation</div>
                    <div className="text-sm text-gray-600">Get documents attested by appropriate authorities</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Download className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Document Quality</div>
                    <div className="text-sm text-gray-600">Ensure clear, legible copies without damage</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Download className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Early Preparation</div>
                    <div className="text-sm text-gray-600">Start document collection well before admission deadlines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentsRequired;