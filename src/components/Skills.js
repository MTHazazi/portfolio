import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";

import ProjectManagement from "../assets/skills/ProjectManagement.svg";
// import EnterpriseArchitecture from "../assets/skills/EnterpriseArchitecture.svg";
import ITDemandManagement from "../assets/skills/ITDemandManagement.svg";
import PMOEstablishment from "../assets/skills/PMOEstablishment.svg";
import Firstprinciplesthinking from "../assets/skills/Firstprinciplesthinking.svg";
import ITAudit_RiskManagement from "../assets/skills/ITAudit_Risk Management.svg";
import GovernanceFrameworks from "../assets/skills/GovernanceFrameworks.svg";
import InnovationContinuousImprovement from "../assets/skills/Innovation_ContinuousImprovement.svg";
import CustomerExperience from "../assets/skills/CustomerExperience.svg";
import Mentorshipteambuilding from "../assets/skills/Mentorshipteambuilding.svg";
import ITStrategyBlueprint from "../assets/skills/docker.svg";
import OperationalExcellence from "../assets/skills/ITStrategy_Blueprint.svg";
import DigitalTransformation from "../assets/skills/DigitalTransformation.svg";
import BusinessContinuity from "../assets/skills/BusinessContinuity.svg";
import ChangeManagement from "../assets/skills/ChangeManagement.svg";
import hr from "../assets/curve-hr.svg";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">Here are some of my skills</p>

      <div className="mt-10">
        <Slider {...settings}>
          <SkillCard name="Business Continuity" img={BusinessContinuity} />
          <SkillCard name="Change Management" img={ChangeManagement} />
          <SkillCard
            name="Digital Transformation"
            img={DigitalTransformation}
          />
          <SkillCard
            name="Operational Excellence"
            img={OperationalExcellence}
          />
          <SkillCard name="IT Strategy Blue print" img={ITStrategyBlueprint} />
          <SkillCard
            name="Mentorship team building"
            img={Mentorshipteambuilding}
          />
          <SkillCard
            name="IT Audit Risk Management"
            img={ITAudit_RiskManagement}
          />
          <SkillCard
            name="First principles thinking"
            img={Firstprinciplesthinking}
          />
          <SkillCard name="PMO Establishment" img={PMOEstablishment} />
          <SkillCard name="IT Demand Management" img={ITDemandManagement} />
          <SkillCard name="Customer Experience" img={CustomerExperience} />
          {/* <SkillCard
            name="Enterprise Architecture"
            img={EnterpriseArchitecture}
          /> */}
          <SkillCard
            name="Innovation Continuous Improvement"
            img={InnovationContinuousImprovement}
          />
          <SkillCard name="Project Management" img={ProjectManagement} />
          <SkillCard name="Governance Frameworks" img={GovernanceFrameworks} />
          {/* <SkillCard name="express" experience="1 years" img={express} /> */}
          {/* <SkillCard name="gitlab" experience="1 years" img={gitlab} /> */}
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
    </div>
  );
}
