import M_Piece from "../public/assets/piece_m.svg";
import L_Piece from "../public/assets/domain_l.svg";
import Domain from "./Domain";

function Domains() {
  return (
    <section
      id="domains"
      className="relative min-h-screen flex flex-col items-center justify-center bg-peach text-gray-dark pt-16 md:pt-20 px-5 text-center"
    >
      <div className="absolute left-2 md:left-5 -bottom-16">
        <L_Piece className="w-32 md:w-44 lg:w-44" />
      </div>
      <h1 className="relative text-4xl md:text-6xl mb-3 font-extrabold">
        DOMAINS
        <M_Piece className="absolute w-8 -top-2 -left-4 md:w-10 md:-top-2 md:-left-4" />
      </h1>
      <p className="font-light md:text-xl tracking-wide	mb-8">
        Choose Where You Would Like To Fit In
      </p>
      <div className="flex flex-row flex-wrap justify-center pl-20">
        {domainsDetails.map((d, i) => (
          <Domain key={`domain${i}`} details={d} />
        ))}
      </div>
    </section>
  );
}

const domainsDetails = [
  {
    name: "design",
    route: "/quiz/design",
    image: "/assets/design.png",
    imageHover: "/assets/design-hover.png",
    smImage: "/assets/design-sm.png",
    description:
      "Want to be part of the creative heads who make csi look sexy?",
  },
  {
    name: "management",
    route: "/quiz/management",
    image: "/assets/management.png",
    imageHover: "/assets/management-hover.png",
    smImage: "/assets/management-sm.png",
    description:
      "Want to be part of the creative heads who make csi look sexy?",
  },
  {
    name: "tech",
    route: "/quiz/tech",
    image: "/assets/tech.png",
    imageHover: "/assets/tech-hover.png",
    smImage: "/assets/tech-sm.png",
    description:
      "Want to be part of the creative heads who make csi look sexy?",
  },
  {
    name: "video",
    route: "/quiz/video",
    image: "/assets/video.png",
    imageHover: "/assets/video-hover.png",
    smImage: "/assets/video-sm.png",
    description:
      "Want to be part of the creative heads who make csi look sexy?",
  },
];

export default Domains;
