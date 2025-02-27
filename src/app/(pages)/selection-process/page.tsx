import { CheckCircle, Users, FileSearch, Award, Calendar } from "lucide-react";

export default function SelectionProcess() {
  const steps = [
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Open Nominations",
      description:
        "Nominations are accepted from the public, colleagues, or organizations familiar with the candidate's work.",
      details: [
        "Online nomination platform",
        "Detailed submission of candidate's contributions",
        "Supporting documentation required",
      ],
    },
    {
      icon: <FileSearch className="w-8 h-8 text-yellow-500" />,
      title: "Initial Screening",
      description:
        "The Awards Council and research team conduct an initial review of all nominations.",
      details: [
        "Verification of eligibility criteria",
        "Completeness of nomination package",
        "Preliminary assessment of contributions",
      ],
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
      title: "Detailed Evaluation",
      description:
        "Shortlisted candidates undergo a thorough evaluation process.",
      details: [
        "In-depth review of submitted documentation",
        "Interviews with nominators and references",
        "Analysis of performance metrics and impact",
        "Site visits or virtual assessments (if applicable)",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Judging Panel Review",
      description:
        "A distinguished panel of judges reviews the finalists and selects the award recipients.",
      details: [
        "Panel composed of leaders in public service, academia, and civil society",
        "Rigorous deliberation process",
        "Consideration of all evaluation data",
      ],
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Award Announcement and Ceremony",
      description:
        "Winners are announced and honored at a prestigious ceremony.",
      details: [
        "Public announcement of recipients",
        "Award presentation ceremony",
        "Recognition of recipients' achievements",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-yellow-600 font-medium tracking-wider">
            SELECTION PROCESS
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            How We Choose Our Award Recipients
          </h1>
          <p className="text-gray-600 leading-relaxed">
            The Philippine Public Service Leadership Awards employs a rigorous,
            multi-step process to ensure that only the most deserving candidates
            are selected. Heres how we identify and honor excellence in public
            service.
          </p>
        </div>

        <section className="mb-12">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  {step.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">
                    {index + 1}. {step.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {step.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <Calendar className="mr-2 text-yellow-500" size={24} />
            Timeline
          </h2>
          <p className="text-gray-600 mb-4">
            The selection process typically spans several months to ensure
            thorough evaluation of all candidates. Key dates in our annual cycle
            include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Nomination Period Opens: January 1st</li>
            <li>Nomination Deadline: March 31st</li>
            <li>Initial Screening Completion: May 15th</li>
            <li>Detailed Evaluation Period: May 16th - August 31st</li>
            <li>Judging Panel Review: September 1st - 30th</li>
            <li>Award Announcement and Ceremony: November (exact date TBA)</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Ready to Recognize Excellence?
          </h2>
          <p className="text-gray-600 mb-6">
            If you know a public servant who exemplifies leadership and
            dedication, we encourage you to nominate them for the Philippine
            Public Service Leadership Awards.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSfM1xhN655LhT6H5oRfa_6cr-jeISNXxesy6kPa_CPV4cKg/viewform"
            className="inline-block bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            Start a Nomination
          </a>
        </section>
      </main>
    </div>
  );
}
