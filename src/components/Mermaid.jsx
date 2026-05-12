import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import svgPanZoom from 'svg-pan-zoom';

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    darkMode: true,
    primaryColor: '#2b303b',
    primaryTextColor: '#c0c5ce',
    primaryBorderColor: '#4f5b66',
    lineColor: '#65737e',
    secondaryColor: '#343d46',
    tertiaryColor: '#4f5b66',
  },
});

export default function Mermaid({ chart }) {
  const containerRef = useRef(null);
  const [svgContent, setSvgContent] = useState('');
  const panZoomRef = useRef(null);

  useEffect(() => {
    const renderChart = async () => {
      if (chart && containerRef.current) {
        try {
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          const { svg } = await mermaid.render(id, chart);
          setSvgContent(svg);
        } catch (error) {
          console.error('Mermaid rendering failed', error);
        }
      }
    };
    renderChart();
  }, [chart]);

  useEffect(() => {
    const svgElement = containerRef.current?.querySelector('svg');
    if (svgElement) {
      svgElement.style.width = '100%';
      svgElement.style.height = '100%';
      svgElement.style.maxWidth = 'none';

      panZoomRef.current = svgPanZoom(svgElement, {
        zoomEnabled: true,
        controlIconsEnabled: false,
        fit: true,
        center: true,
        minZoom: 0.5,
        maxZoom: 5,
      });
    }

    return () => {
      if (panZoomRef.current) {
        panZoomRef.current.destroy();
        panZoomRef.current = null;
      }
    };
  }, [svgContent]);

  const handleRecenter = () => {
    if (panZoomRef.current) {
      panZoomRef.current.resetZoom();
      panZoomRef.current.center();
    }
  };

  return (
    <div style={{ position: 'relative', border: '1px solid #4f5b66', borderRadius: '4px', overflow: 'hidden' }}>
      <button
        onClick={handleRecenter}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 10,
          padding: '4px 8px',
          background: '#4f5b66',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Recenter
      </button>
      <div
        ref={containerRef}
        style={{ width: '100%', height: '400px', backgroundColor: '#1c1f26' }}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
}
