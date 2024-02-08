import React, { useEffect, useState } from 'react';
import EditorPane from '../app/components/EditorPane';
import PageTransition from '../app/components/PageTransition';
import SideNavbar from '../app/components/SideNavbar.jsx'
import Navbar from '../app/components/Navbar.jsx';
import AtomicIntegersWebSocket from '../app/components/AtomicIntegersWebSocket.jsx';
const AtomicInteger = () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        fetch('/snippets/atomic-integer.html') // Make sure this path is correct
          .then(response => response.text())
          .then(data => setHtmlContent(data))
          .catch(error => console.error('Error fetching HTML content:', error));
      }, []);

      const handleContentChange = (newHtmlContent) => {
    setHtmlContent(newHtmlContent);
  };

    return (
        <PageTransition>
        <div>
        <Navbar />
        <SideNavbar />
        <div className="flex flex-row w-full h-screen z-10">
        {/*<SimulationPane />*/}
        <div className="w-1/2 h-full bg-[#121212]">
        <AtomicIntegersWebSocket />
        </div>
        <EditorPane htmlContent={htmlContent} onContentChange={(newContent) => setHtmlContent(newContent)} />
        </div>
       </div>
       </PageTransition>
    );
};

export default AtomicInteger;
