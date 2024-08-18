// Zenchef.js
import { useEffect } from 'react';

const Zenchef = () => {
  useEffect(() => {
    const scriptId = 'zenchef-sdk';
    const scriptElement = document.getElementById(scriptId);

    if (!scriptElement) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = 'https://sdk.zenchef.com/v1/sdk.min.js';

      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
      }
    }
  }, []);

  return (
    <div>
      <div className="zc-widget-config" data-restaurant="344015" data-open="2000"></div>
    </div>
  );
};

export default Zenchef;
