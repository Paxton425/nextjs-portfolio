import React from 'react';

const AdSense = () => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{
        __html: `
          <script async src="(link unavailable)"
          crossorigin="anonymous"></script>
        `
      }} />
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-3352432574890802"
           data-ad-slot="2041563491"
           data-ad-format="auto"
           data-full-width-responsive="true" />
      <div dangerouslySetInnerHTML={{
        __html: `
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        `
      }} />
    </div>
  );
};

export default AdSense;