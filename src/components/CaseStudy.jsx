import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import "./CaseStudy.css"; // We'll create this to match the main styling

// Import markdown files (we can also use dynamic imports)
import radarAuth from "../assets/case-study/Radar-auth.md?raw";
import radarUrlState from "../assets/case-study/Radar-url-state.md?raw";
import Mermaid from "./Mermaid";

const caseStudies = {
  "Radar-auth": radarAuth,
  "Radar-url-state": radarUrlState,
};

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  useEffect(() => {
    // If we're using dynamic imports, we'd fetch them here
    // For now, if we have them imported statically but as raw strings:
    if (caseStudies[id]) {
      setContent(caseStudies[id]);
    } else {
      setContent("# Case Study Not Found\n\nThe requested case study could not be found.");
    }
    
    // Scroll to top instantly on load, using setTimeout to ensure DOM has rendered
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
  }, [id]);

  return (
    <div className="case-study-container section">
      <button 
        onClick={() => navigate(-1)} 
        className="back-link" 
        style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer' }}
      >
        &larr; Back to Portfolio
      </button>
      <div className="case-study-content">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              const language = match ? match[1] : '';
              if (!inline && language === 'mermaid') {
                return <Mermaid chart={String(children).replace(/\n$/, '')} />;
              }
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}