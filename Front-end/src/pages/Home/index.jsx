import React from "react";
import { useState, useEffect } from "react";
import FetchData from "../../utils/FetchData";
import KeyData from "../../components/KeyData";

import kcalIcon from "../../assets/media/icon-calorie.png";
import protIcon from "../../assets/media/icon-protein.png";
import carbIcon from "../../assets/media/icon-carbohydrate.png";
import lipIcon from "../../assets/media/icon-lipid.png";
const Home = () => {
  const [firstName, fn] = useState(null);
  const [keyData, setKeyData] = useState(null);
  const [activity, setActivity] = useState(null);
  const [average, setAverage] = useState(null);
  const [perf, setPerf] = useState(null);

  useEffect(() => {
    // true API use & false MOCKED DATA use
    const fetcher = new FetchData(`http://localhost:3000/user/`, 12, true);
    const userData = fetcher.userData();
    userData.then((result) => {
      fn(result.userInfos.firstName);
      setKeyData(result.keyData);
    });
    const activityData = fetcher.activityData();
    activityData.then((result) => {
      setActivity(result);
    });
    const averageSession = fetcher.averageSession();
    averageSession.then((result) => {
      setAverage(result);
    });
    const performance = fetcher.performance();
    performance.then((result) => {
      setPerf(result);
    });
  }, []);
  return (
    <div>
      Bonjour <span className="redTxt">{firstName}</span>
      <br />
      Félicitation ! Vous avez explosé vos objectifs hier 👏
      {keyData && (
        <section className="keyCards">
          <KeyData
            logo={kcalIcon}
            value={keyData.calorieCount}
            unit="kCal"
            subt="Calories"
          />
          <KeyData
            logo={protIcon}
            value={keyData.proteinCount}
            unit="g"
            subt="Protéines"
          />
          <KeyData
            logo={carbIcon}
            value={keyData.carbohydrateCount}
            unit="g"
            subt="Glucides"
          />
          <KeyData
            logo={lipIcon}
            value={keyData.lipidCount}
            unit="g"
            subt="Lipides"
          />
        </section>
      )}
    </div>
  );
};

export default Home;
