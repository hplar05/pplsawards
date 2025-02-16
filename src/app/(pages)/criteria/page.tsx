import { Award, CheckCircle } from "lucide-react";

export default function Criteria() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-yellow-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            <Award className="mr-4 max-md:hidden" size={40} />
            Philippine Public Service Leadership Awards
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12" id="criteria">
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          <p className="mb-4">
            To be eligible for the Philippine Public Service Leadership Awards,
            an individual or organization must meet all six (6) criteria. The
            validation of nominations and supporting documentation is conducted
            under the supervision of the Awards Council and research team.
            Recipients of the Philippine Public Service Leadership Award are
            recognized as exemplars of public service leadership.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Innovative Service Delivery",
                description:
                  "The nominee should demonstrate novel approaches and practices in delivering public services that enhance efficiency, effectiveness, and citizen experience. These practices should be potentially replicable by other public service entities. Active engagement in professional associations and knowledge sharing networks is encouraged.",
              },
              {
                title: "Quality of Service and Outcomes",
                description:
                  "The nominee should consistently deliver high-quality services that are reliable, accessible, and meet the needs of the community served. Measurable positive outcomes resulting from their service are essential.",
              },
              {
                title: "Value and Resource Management",
                description:
                  "The nominee should demonstrate responsible and efficient use of public resources, ensuring value for money and maximizing impact for the community. Transparency and accountability in resource management are crucial.",
              },
              {
                title: "Community Engagement and Responsiveness",
                description:
                  "The nominee should demonstrate genuine concern for the needs and satisfaction of the community served. Proactive engagement with citizens, responsiveness to feedback, and a commitment to inclusivity are vital.",
              },
              {
                title: "Ethical Conduct and Public Trust",
                description:
                  "The nominee should uphold the highest ethical standards in all aspects of their work, maintaining public trust and demonstrating integrity in their actions.",
              },
              {
                title: "Leadership and Team Development",
                description:
                  "The nominee should demonstrate strong leadership qualities, inspiring and motivating others to achieve shared goals. A commitment to developing future leaders and fostering a positive work environment is essential.",
              },
            ].map((criterion, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <CheckCircle className="mr-2 text-green-500" size={20} />
                  {criterion.title}
                </h3>
                <p>{criterion.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Nomination and Selection Process
          </h2>
          <p className="mb-4">
            Candidates for the Philippine Public Service Leadership Awards are
            nominated by members of the public, colleagues, or organizations
            familiar with their work. The selection process involves the
            following steps:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Open Nominations: Nominations are accepted through an online
              platform, specifying the nominees contributions and providing
              supporting documentation.
            </li>
            <li>
              Review and Verification: The Awards Council and research team
              review all nominations, verifying the information provided and
              conducting further research as needed. This may include:
              <ul className="list-disc pl-6 mt-2">
                <li>Review of submitted documentation</li>
                <li>Interviews with nominators and references</li>
                <li>Public feedback and testimonials</li>
                <li>Analysis of relevant data and performance metrics</li>
              </ul>
            </li>
            <li>
              Selection and Award Presentation: A distinguished panel of judges,
              comprised of leaders in public service, academia, and civil
              society, reviews the shortlisted candidates and selects the award
              recipients. The awards are presented at a prestigious ceremony.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">About the Awards</h2>
          <p>
            The Philippine Public Service Leadership Awards recognize
            individuals and organizations that demonstrate exceptional
            leadership and commitment to serving the public. By meeting all six
            criteria, award recipients are acknowledged for their innovative
            service delivery, quality outcomes, responsible resource management,
            community engagement, ethical conduct, and leadership. This
            prestigious award not only celebrates their achievements but also
            inspires others to strive for excellence in public service.
          </p>
        </section>
      </main>
    </div>
  );
}
