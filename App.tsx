
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ContentStudio from './components/ContentStudio';
import VisualLab from './components/VisualLab';
import Strategist from './components/Strategist';
import SeoAnalyzer from './components/SeoAnalyzer';
import MasterClass from './components/MasterClass';
import AdManager from './components/AdManager';
import AIAssistant from './components/AIAssistant';
import VideoStudio from './components/VideoStudio';
import FunnelBuilder from './components/FunnelBuilder';
import InfoProductBuilder from './components/InfoProductBuilder';
import SaaSBuilder from './components/SaaSBuilder';
import CompetitorAnalyzer from './components/CompetitorAnalyzer';
import CRM from './components/CRM';
import WorkflowBuilder from './components/WorkflowBuilder';
import LoginGate from './components/LoginGate';
import Settings from './components/Settings';
import AdminPanel from './components/AdminPanel';
import { AppView, UserSettings } from './types';
import { NextStepGuidance } from './types';
import { generateNextStepGuidance } from './services/geminiService';

const DEFAULT_SETTINGS: UserSettings = {
  layoutMode: 'COMFORTABLE',
  sidebarMode: 'FULL',
  themeColor: 'BLUE',
  notifications: true,
  autoSave: true,
  defaultView: AppView.DASHBOARD
};

const App: React.FC = () => {
  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // App State
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userSettings, setUserSettings] = useState<UserSettings>(DEFAULT_SETTINGS);
  
  // Transition State
  const [nextStep, setNextStep] = useState<NextStepGuidance | null>(null);

  // Load Settings & Auth from LocalStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('nexusSettings');
    if (savedSettings) setUserSettings(JSON.parse(savedSettings));

    const session = localStorage.getItem('nexusSession');
    const adminSession = localStorage.getItem('nexusAdmin');
    
    if (session === 'active') {
        setIsAuthenticated(true);
        if (adminSession === 'true') {
            setIsAdmin(true);
        }
    }
  }, []);

  const handleLogin = (isSuperAdmin: boolean = false) => {
    setIsAuthenticated(true);
    localStorage.setItem('nexusSession', 'active');
    
    if (isSuperAdmin) {
        setIsAdmin(true);
        localStorage.setItem('nexusAdmin', 'true');
        setCurrentView(AppView.ADMIN); // Redirect admin directly to HQ
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem('nexusSession');
    localStorage.removeItem('nexusAdmin');
    setCurrentView(AppView.DASHBOARD);
  };

  const handleUpdateSettings = (newSettings: UserSettings) => {
    setUserSettings(newSettings);
    localStorage.setItem('nexusSettings', JSON.stringify(newSettings));
  };

  const handleActionComplete = async (context: string, currentView: AppView) => {
      // 1. Reset current guidance
      setNextStep(null);
      
      // 2. Ask AI for next step
      try {
          const guidance = await generateNextStepGuidance(context, currentView);
          setNextStep(guidance);
      } catch (e) {
          console.error("Failed to generate guidance", e);
      }
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard />;
      case AppView.MASTERCLASS:
        return <MasterClass />;
      case AppView.ADS:
        return <AdManager />;
      case AppView.VIDEO:
        return <VideoStudio />;
      case AppView.FUNNELS:
        return <FunnelBuilder />;
      case AppView.INFOPRODUCT:
        return <InfoProductBuilder />;
      case AppView.SAAS:
        return <SaaSBuilder />;
      case AppView.COMPETITORS:
        return <CompetitorAnalyzer />;
      case AppView.CRM:
        return <CRM />;
      case AppView.AUTOMATION:
        return <WorkflowBuilder />;
      case AppView.CONTENT:
        return <ContentStudio />;
      case AppView.IMAGES:
        return <VisualLab />;
      case AppView.STRATEGY:
        return <Strategist />;
      case AppView.SEO:
        return <SeoAnalyzer />;
      case AppView.SETTINGS:
        return <Settings settings={userSettings} onUpdate={handleUpdateSettings} />;
      case AppView.ADMIN:
        return isAdmin ? <AdminPanel /> : <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  // 1. Render Login Gate if not authenticated
  if (!isAuthenticated) {
    return <LoginGate onLogin={handleLogin} />;
  }

  // 2. Render Main App
  return (
    <div className={`flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans ${userSettings.layoutMode === 'COMPACT' ? 'text-sm' : ''}`}>
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        onLogout={handleLogout}
        userSettings={userSettings}
        isAdmin={isAdmin}
      />
      
      <main className="flex-1 flex flex-col relative overflow-hidden transition-all">
        {/* Top bar for padding on mobile to account for fixed header */}
        <div className="h-16 lg:hidden shrink-0"></div>

        <div className="flex-1 overflow-y-auto p-0 lg:p-6 scroll-smooth">
          <div className="max-w-[1920px] mx-auto h-full">
            <div className="animate-fade-in h-full">
               {renderView()}
            </div>
          </div>
        </div>

        {/* Persistent AI Mentor (Passing Guidance) */}
        <AIAssistant />
      </main>
    </div>
  );
};

export default App;
