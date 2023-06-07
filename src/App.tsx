import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/globalStyles';
import Footer from 'components/domain/Footer';
import Header from 'components/domain/Header';
import Main from 'pages/Main';
import Services from 'pages/Services';
import Clients from 'pages/Clients';
import Experts from 'pages/Experts';
import Careers from 'pages/Careers';
import About from 'pages/About';
import Compliance from 'pages/Compliance'
import ComplianceAdditional from 'pages/Compliance/ComplianceAdditional'
import Cookie from 'pages/Cookie';
import Terms from 'pages/Terms';
import Privacy from 'pages/Privacy';
import ScrollToTop from 'components/base/ScrollToTop';
import theme from 'styles/theme';
import MediaQueryProvider from 'contexts/MediaQueryProvider';
import './languages/i18n';

function App() {
  return (
    <MediaQueryProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <ScrollToTop />
          <Header></Header>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/services' element={<Services />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/experts' element={<Experts />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/about' element={<About />} />
            <Route path='/compliance' element={<Compliance />} />
            <Route path='/compliance-additional' element={<ComplianceAdditional />} />
            <Route path='/cookie' element={<Cookie />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='*' element={<Main />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </ThemeProvider>
    </MediaQueryProvider>
  );
}

export default App;
