
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/Index';
import AboutContact from './pages/AboutContact';
import Services from './pages/Services';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import MBBSIndia from './pages/MBBSIndia';
import MBBSState from './pages/MBBSState';
import DeemedUniversities from './pages/mbbs/DeemedUniversities';
// PG Medical pages
import PGMedical from './pages/PGMedical';
import MDCourses from './pages/MDCourses';
import MSCourses from './pages/MSCourses';
import PGAdmissionProcess from './pages/PGAdmissionProcess';
import PGColleges from './pages/PGColleges';

// MD Specialization Pages
import MDGeneralMedicine from './pages/md/MDGeneralMedicine';
import MDPediatrics from './pages/md/MDPediatrics';
import MDRadiodiagnosis from './pages/md/MDRadiodiagnosis';
import MDAnesthesiology from './pages/md/MDAnesthesiology';
import MDPsychiatry from './pages/md/MDPsychiatry';
import MDRespiratoryMedicine from './pages/md/MDRespiratoryMedicine';
import MDEmergencyMedicine from './pages/md/MDEmergencyMedicine';
import MDPathology from './pages/md/MDPathology';
import MDMicrobiology from './pages/md/MDMicrobiology';
import MDPharmacology from './pages/md/MDPharmacology';
import MDForensicMedicine from './pages/md/MDForensicMedicine';
import MDCommunityMedicine from './pages/md/MDCommunityMedicine';
import MDImmunohematology from './pages/md/MDImmunohematology';
import MDNuclearMedicine from './pages/md/MDNuclearMedicine';
import MDGeriatrics from './pages/md/MDGeriatrics';
import MDSportsMedicine from './pages/md/MDSportsMedicine';
import MDDermatology from './pages/md/MDDermatology';
import MDFamilyMedicine from './pages/md/MDFamilyMedicine';

// Admin pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import ContactManager from './pages/admin/ContactManager';
import LiveAlertsManager from './pages/admin/LiveAlertsManager';
import VideoManager from './pages/admin/VideoManager';
import MBBSStateManager from './pages/admin/MBBSStateManager';
import CollegesManager from './pages/admin/CollegesManager';

// Components
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';
import Footer from './components/Footer';
import Header from './components/Header';
import LiveAlerts from './components/LiveAlerts';

import './App.css';

// Standard layout wrapper for public pages
const StandardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full">
    <Header />
    <LiveAlerts />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full max-w-none overflow-x-hidden bg-background">
        <ScrollToTop />
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/contacts"
            element={
              <AdminLayout>
                <ContactManager />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/live-alerts"
            element={
              <AdminLayout>
                <LiveAlertsManager />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/videos"
            element={
              <AdminLayout>
                <VideoManager />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/mbbs-states"
            element={
              <AdminLayout>
                <MBBSStateManager />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/colleges"
            element={
              <AdminLayout>
                <CollegesManager />
              </AdminLayout>
            }
          />
          
          {/* MBBS India Routes - Using StandardLayout component */}
          <Route
            path="/mbbs-india"
            element={
              <StandardLayout>
                <MBBSIndia />
              </StandardLayout>
            }
          />
          <Route
            path="/mbbs-india/:stateName"
            element={
              <StandardLayout>
                <MBBSState />
              </StandardLayout>
            }
          />
          
          {/* Add Deemed Universities route */}
          <Route
            path="/mbbs-india/deemed-universities"
            element={
              <StandardLayout>
                <DeemedUniversities />
              </StandardLayout>
            }
          />
          
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <StandardLayout>
                <Index />
              </StandardLayout>
            }
          />
          <Route
            path="/know-us"
            element={
              <StandardLayout>
                <AboutContact />
              </StandardLayout>
            }
          />
          <Route
            path="/services"
            element={
              <StandardLayout>
                <Services />
              </StandardLayout>
            }
          />
          <Route
            path="/terms"
            element={
              <StandardLayout>
                <Terms />
              </StandardLayout>
            }
          />
          <Route
            path="/videos"
            element={
              <StandardLayout>
                <Videos />
              </StandardLayout>
            }
          />

          {/* PG Medical Routes */}
          <Route
            path="/pg-medical"
            element={
              <StandardLayout>
                <PGMedical />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses"
            element={
              <StandardLayout>
                <MDCourses />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/ms-courses"
            element={
              <StandardLayout>
                <MSCourses />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/colleges"
            element={
              <StandardLayout>
                <PGColleges />
              </StandardLayout>
            }
          />

          {/* MD Specialization Routes */}
          <Route
            path="/pg-medical/md-courses/general-medicine"
            element={
              <StandardLayout>
                <MDGeneralMedicine />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/pediatrics"
            element={
              <StandardLayout>
                <MDPediatrics />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/radiodiagnosis"
            element={
              <StandardLayout>
                <MDRadiodiagnosis />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/anesthesiology"
            element={
              <StandardLayout>
                <MDAnesthesiology />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/psychiatry"
            element={
              <StandardLayout>
                <MDPsychiatry />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/respiratory-medicine"
            element={
              <StandardLayout>
                <MDRespiratoryMedicine />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/emergency-medicine"
            element={
              <StandardLayout>
                <MDEmergencyMedicine />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/pathology"
            element={
              <StandardLayout>
                <MDPathology />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/microbiology"
            element={
              <StandardLayout>
                <MDMicrobiology />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/pharmacology"
            element={
              <StandardLayout>
                <MDPharmacology />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/forensic-medicine"
            element={
              <StandardLayout>
                <MDForensicMedicine />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/community-medicine"
            element={
              <StandardLayout>
                <MDCommunityMedicine />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/immunohematology"
            element={
              <StandardLayout>
                <MDImmunohematology />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/nuclear-medicine"
            element={
              <StandardLayout>
                <MDNuclearMedicine />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/geriatrics"
            element={
              <StandardLayout>
                <MDGeriatrics />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/sports-medicine"
            element={
              <StandardLayout>
                <MDSportsMedicine />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/dermatology"
            element={
              <StandardLayout>
                <MDDermatology />
              </StandardLayout>
            }
          />
          <Route
            path="/pg-medical/md-courses/family-medicine"
            element={
              <StandardLayout>
                <MDFamilyMedicine />
              </StandardLayout>
            }
          />
          
          {/* Catch-all route - Handle 404 */}
          <Route
            path="*"
            element={
              <StandardLayout>
                <NotFound />
              </StandardLayout>
            }
          />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
