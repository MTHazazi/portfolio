import { useState } from "react";

import profile from "../assets/E7k2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import hr from "../assets/curve-hr.svg";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

export default function Hiro() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          Loading..
        </div>
      ) : null}
      <div
        id="home"
        className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative mt-80 md:mt-5 mb-10"
      >
        <div className="md:w-3/6 md:p-4 ">
          {/* <img className="rounded-full w-80 h-80" src="/docs/images/examples/image-4@2x.jpg" alt="image description"/> */}
          {/* <br></br>
                    <br></br>
                    <br></br> */}

          <img
            className="rounded-full sm:h-1/5 sm:w-1/5 md:w-1/4 md:h-80 md:w-auto max-h-80 mt-10 m-auto "
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="200"
            src={profile}
            alt="profile"
            onLoad={() => setLoaded(false)}
          />
        </div>
        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-2xl font-bold">Mohammad Hazazi</h1>
            <p class="text-xl font-bold text-gray-300">
              IT Governance & Digital Portfolio Director{" "}
            </p>
            <p className="text-md font-light text-gray-400 ">
              Creativity & passion is a part of who I am! I seek to find ways to
              adapt when needed and disrupt when possible. For the past 15
              years, I have been at the forefront of digital evolution and
              transformation, as an intrepid IT professional with broad-based
              experience in IT Solution Engineering, Customer Experience,
              Project Management, Enterprise Architecture, and Governance &
              Operational Excellence! Which have enabled businesses and
              enterprises to perform at their optimal level and to realize their
              business objectives. In a nutshell, together, we shall transform
              your business through the power of people, processes, technology,
              and innovation.
            </p>
          </div>
          {/* <a href='http://blog.dama.ink' className='mt-2 block'>Go to My Blog <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a> */}

          <ul className="flex mt-2 gap-4 items-center">
            {/* <li>
              <a
                href="https://github.com/EHAB7k"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faGithub} />
              </a>
            </li> */}
            {/* <li>
                        <a href='https://instagram.com/damaasth' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li> */}
            <li>
              <a
                href="https://www.linkedin.com/in/mhazazi"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+966537080709"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faWhatsapp} />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/MHazazi"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faTwitter} />
              </a>
            </li>

            <li>
              <a href="mailto:Mhazazi@pm.me" rel="noreferrer" target="_blank">
                <FontAwesomeIcon size="2xl" icon={faMailBulk} />
              </a>
            </li>
          </ul>
        </div>
        <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
