import { CheckCircle } from "lucide-react";

export default function Eligibility() {
  const eligibilityCriteria = [
    {
      title: "Innovative Service Delivery",
      description:
        "Demonstrate novel approaches in delivering public services that enhance efficiency, effectiveness, and citizen experience. These practices should be potentially replicable by other entities.",
      details: [
        "Implement new technologies or processes",
        "Streamline existing procedures",
        "Engage in professional associations and knowledge sharing networks",
      ],
    },
    {
      title: "Quality of Service and Outcomes",
      description:
        "Consistently deliver high-quality services that are reliable, accessible, and meet community needs. Measurable positive outcomes are essential.",
      details: [
        "Maintain high standards of service delivery",
        "Implement quality assurance measures",
        "Track and report on service outcomes",
      ],
    },
    {
      title: "Value and Resource Management",
      description:
        "Demonstrate responsible and efficient use of public resources, ensuring value for money and maximizing community impact.",
      details: [
        "Implement cost-saving measures",
        "Optimize resource allocation",
        "Maintain transparency in financial management",
      ],
    },
    {
      title: "Community Engagement and Responsiveness",
      description:
        "Show genuine concern for community needs and satisfaction. Proactively engage with citizens and demonstrate commitment to inclusivity.",
      details: [
        "Conduct regular community consultations",
        "Implement feedback mechanisms",
        "Adapt services based on community input",
      ],
    },
    {
      title: "Ethical Conduct and Public Trust",
      description:
        "Uphold the highest ethical standards, maintaining public trust and demonstrating integrity in all actions.",
      details: [
        "Adhere to a code of ethics",
        "Promote transparency in decision-making",
        "Address conflicts of interest promptly",
      ],
    },
    {
      title: "Leadership and Team Development",
      description:
        "Demonstrate strong leadership qualities, inspiring and motivating others. Commit to developing future leaders and fostering a positive work environment.",
      details: [
        "Implement mentorship programs",
        "Provide professional development opportunities",
        "Foster a culture of innovation and collaboration",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-yellow-600 font-medium tracking-wider">
            ELIGIBILITY
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Eligibility for Philippine Public Service Leadership Awards
          </h1>
          <p className="text-gray-600 leading-relaxed">
            To be considered for the Philippine Public Service Leadership
            Awards, candidates must meet all six criteria. These criteria ensure
            that recipients are true exemplars of public service excellence.
          </p>
        </div>

        <section className="mb-12" id="eligibility-criteria">
          <div className="grid md:grid-cols-2 gap-8">
            {eligibilityCriteria.map((criterion, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
                  <CheckCircle className="mr-2 text-yellow-500" size={24} />
                  {criterion.title}
                </h2>
                <p className="text-gray-600 mb-4">{criterion.description}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {criterion.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Validation Process
          </h2>
          <p className="text-gray-600 mb-4">
            The validation of nominations and supporting documentation is
            conducted under the supervision of the Awards Council and research
            team. This rigorous process ensures that all recipients truly embody
            the spirit of public service excellence.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="text-yellow-700">
              <strong>Note:</strong> Recipients of the Philippine Public Service
              Leadership Award are recognized as exemplars of public service
              leadership, having demonstrated excellence across all six
              criteria.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Ready to Nominate?
          </h2>
          <p className="text-gray-600 mb-6">
            If you know someone who exemplifies these criteria, consider
            nominating them for the Philippine Public Service Leadership Awards.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSfM1xhN655LhT6H5oRfa_6cr-jeISNXxesy6kPa_CPV4cKg/viewform"
            className="inline-block bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            Nominate a Leader
          </a>
        </section>
      </main>
    </div>
  );
}
