import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ContactModalProvider } from './context/ContactModalContext';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResidentialPage from './pages/services/ResidentialPage';
import BusinessPage from './pages/services/BusinessPage';

import WhatIsFiberPage from './pages/resources/WhatIsFiberPage';
import StreamingGuidePage from './pages/resources/StreamingGuidePage';
import SmartHomePage from './pages/resources/SmartHomePage';
import RemoteWorkPage from './pages/resources/RemoteWorkPage';
import CybersecurityPage from './pages/resources/CybersecurityPage';
import WisconsinPage from './pages/locations/WisconsinPage';
import MinnesotaPage from './pages/locations/MinnesotaPage';
import IowaPage from './pages/locations/IowaPage';
import IllinoisPage from './pages/locations/IllinoisPage';
import MichiganPage from './pages/locations/MichiganPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ContactModalProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services/residential" element={<ResidentialPage />} />
            <Route path="services/business" element={<BusinessPage />} />

            <Route path="resources/what-is-fiber" element={<WhatIsFiberPage />} />
            <Route path="resources/streaming-guide" element={<StreamingGuidePage />} />
            <Route path="resources/smart-home" element={<SmartHomePage />} />
            <Route path="resources/remote-work" element={<RemoteWorkPage />} />
            <Route path="resources/cybersecurity" element={<CybersecurityPage />} />
            <Route path="locations/wisconsin" element={<WisconsinPage />} />
            <Route path="locations/minnesota" element={<MinnesotaPage />} />
            <Route path="locations/iowa" element={<IowaPage />} />
            <Route path="locations/illinois" element={<IllinoisPage />} />
            <Route path="locations/michigan" element={<MichiganPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <ContactModal />
      </ContactModalProvider>
    </BrowserRouter>
  );
}
