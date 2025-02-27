import {
  Award,
  Star,
  Users,
  Lightbulb,
  Heart,
  TrendingUp,
  Shield,
} from "lucide-react";

export default function AwardCategories() {
  const categories = [
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: "Lifetime Achievement Award",
      description:
        "Recognizes individuals who have dedicated their careers to public service, demonstrating exceptional leadership and impact over many years.",
      criteria: [
        "Minimum of 25 years in public service",
        "Significant contributions to policy or institutional reforms",
        "Demonstrated long-term impact on community or nation",
      ],
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
      title: "Innovation in Public Service Award",
      description:
        "Honors individuals or teams who have introduced groundbreaking ideas, technologies, or processes that have significantly improved public service delivery.",
      criteria: [
        "Implementation of novel solutions to public service challenges",
        "Measurable improvement in efficiency or effectiveness",
        "Potential for replication in other areas or departments",
      ],
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-500" />,
      title: "Community Engagement Excellence Award",
      description:
        "Recognizes efforts that have significantly improved community participation, transparency, and responsiveness in public service.",
      criteria: [
        "Implementation of effective community engagement strategies",
        "Demonstrated improvements in public trust and participation",
        "Innovative approaches to inclusivity and accessibility",
      ],
    },
    {
      icon: <Heart className="w-12 h-12 text-yellow-500" />,
      title: "Public Service Impact Award",
      description:
        "Celebrates individuals or programs that have made a substantial, measurable difference in the lives of citizens or communities.",
      criteria: [
        "Quantifiable positive outcomes for the community",
        "Addressing critical societal needs or challenges",
        "Sustainable and long-lasting impact",
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-yellow-500" />,
      title: "Leadership and Management Excellence Award",
      description:
        "Recognizes outstanding leadership in public service organizations, focusing on team development, organizational culture, and effective management practices.",
      criteria: [
        "Demonstrated improvements in team performance and morale",
        "Implementation of effective management strategies",
        "Fostering a culture of excellence and continuous improvement",
      ],
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: "Integrity and Ethics in Public Service Award",
      description:
        "Honors individuals or organizations that have shown exceptional commitment to maintaining high ethical standards and promoting integrity in public service.",
      criteria: [
        "Implementation of robust ethics and anti-corruption measures",
        "Promotion of transparency and accountability",
        "Demonstrated leadership in ethical decision-making",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-yellow-600 font-medium tracking-wider">
            AWARD CATEGORIES
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Philippine Public Service Leadership Awards
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Our awards recognize excellence across various aspects of public
            service. Each category highlights a crucial area of leadership and
            impact in serving the public.
          </p>
        </div>

        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h2 className="text-xl font-semibold ml-4 text-gray-800">
                    {category.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Key Criteria:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {category.criteria.map((criterion, idx) => (
                    <li key={idx}>{criterion}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <Award className="mr-2 text-yellow-500" size={24} />
            Special Recognition Awards
          </h2>
          <p className="text-gray-600 mb-4">
            In addition to our main categories, we may present special
            recognition awards for extraordinary contributions or in response to
            current events or challenges. These could include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Crisis Response Leadership Award</li>
            <li>Digital Transformation in Public Service Award</li>
            <li>Environmental Stewardship in Public Service Award</li>
            <li>Inclusive Governance Award</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Nominate a Deserving Leader
          </h2>
          <p className="text-gray-600 mb-6">
            Do you know someone who exemplifies excellence in one of these
            categories? Nominate them for the Philippine Public Service
            Leadership Awards and help us recognize outstanding public servants.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSfM1xhN655LhT6H5oRfa_6cr-jeISNXxesy6kPa_CPV4cKg/viewform"
            className="inline-block bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            Submit a Nomination
          </a>
        </section>
      </main>
    </div>
  );
}
