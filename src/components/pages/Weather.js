import React, { useState, useEffect } from "react";

const TomorrowIOWeatherWidget = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "tomorrow-sdk";
    script.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";
    const fjs = document.getElementsByTagName("script")[0];
    fjs.parentNode.insertBefore(script, fjs);

    return () => {
      // Clean up the script element when the component is unmounted
      const scriptElement = document.getElementById("tomorrow-sdk");
      if (scriptElement) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <button className="btn weather-b" onClick={handleExpandClick}>
        {expanded ? "Hide" : "Show"} Weather
      </button>
      {expanded && (
        <div
          className="tomorrow"
          data-location-id="050180"
          data-language="EN"
          data-unit-system="METRIC"
          data-skin="light"
          data-widget-type="summary"
          style={{ paddingBottom: "22px", width: "20%", height: "20%" }}
        >
          <a
            href="https://www.tomorrow.io/weather-api/"
            style={{
              position: "absolute",
              bottom: 0,
              transform: "translateX(-50%)",
              left: "50%",
            }}
          >
            <img
              alt="Powered by the Tomorrow.io Weather API"
              src="https://weather-website-client.tomorrow.io/img/powered-by.svg"
            />
          </a>
        </div>
      )}
    </>
  );
};

export default TomorrowIOWeatherWidget;
