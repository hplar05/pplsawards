import Image from "next/image";

const abouts = [
  {
    title: "Our Mission",
    description:
      "The Philippine Public Service Leadership Awards honors outstanding Filipino individuals and organizations across diverse sectors, recognizing their dedication, innovation, and excellence in public service, with the mission to spotlight trailblazers, inspire a culture of excellence, and elevate the Philippines' achievements on the global stage.",
    image: "/thumbnail.jpg",
  },
  {
    title: "Our Impact",
    description:
      "The Philippine Public Service Leadership Awards amplifies the impact of Filipino public servants by sharing hundreds of inspiring stories, motivating excellence through public recognition, and providing a platform for awardees to share their triumphs and inspire future generations to overcome adversity and achieve greater heights in service to the nation.",
    image: "/about-image1.jpg",
  },
  {
    title: "Join Us in Celebrating Excellence",
    description:
      "Join Us in Celebrating Excellence Whether youre a public servant with a story to share or someone who wants to nominate an outstanding individual, we invite you to be part of this inspiring journey. Together, we can shine a light on the remarkable work being done in public service across the Philippines.",
    image: "/about-image2.jpg",
  },
];

export default function About() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                  About PPSLAWARDS
                </h2> */}
          <span className="text-yellow-600 font-medium tracking-wider">
            ABOUT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Philippine Public Service Leadership Awards
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Honor individuals who make outstanding contributions and who’s
            accomplished are models of exemplary public service for those
            dedicated to the public good-now and in the future.
          </p>
        </div>
        <div className="space-y-16">
          {abouts.map((about, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                  {about.title}
                </h3>
                <p className="text-gray-600">{about.description}</p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={about.image || "/placeholder.svg"}
                  alt={about.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
