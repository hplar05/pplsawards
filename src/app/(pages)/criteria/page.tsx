import { Award, CheckCircle } from "lucide-react";

export default function Criteria() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-yellow-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            <Award className="mr-4" size={40} />
            Philippine Public Service Leadership Awards
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12" id="#criteria">
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          <p className="mb-4">
            To be eligible to receive the Philippine Public Service Leadership
            Awards, a company must qualify for all six (6) criteria. The
            validation of the survey result is done under the supervision of the
            Southeast Asia Council and research team. A company that is
            conferred the Philippine Public Service Leadership is automatically
            certified as best.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Innovative Business Practices",
                description:
                  "The company should have novel in-house business practices that help increase its productivity. These practices should be potentially replicable by other companies. The company should be active in professional associations to stay aware of industry trends.",
              },
              {
                title: "Quality of Products and Services",
                description:
                  "The company should deliver products/services that are durable, consistent, and in conformity with company claims. Timely delivery and provision of after-sales services are also considered.",
              },
              {
                title: "Value Proposition and Pricing",
                description:
                  "The company should practice fair and just value pricing, assuring its clientele of value for money results.",
              },
              {
                title: "Customer Concern & Engagement",
                description:
                  "The company should demonstrate significant concern for its clients needs and satisfaction.",
              },
              {
                title: "Reputable and Ethical Business Image",
                description:
                  "The companys clientele should have a good impression of the company and its products/services. The companys business model should guarantee its survival over a long period.",
              },
              {
                title: "Truthfulness in Business Management",
                description:
                  "The company should provide great working opportunities and environment for its employees. Company rules and regulations should be reliable and just.",
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
          <h2 className="text-2xl font-semibold mb-4">Selection Process</h2>
          <p className="mb-4">
            Candidates for the Southeast Asia Business Excellence Awards are
            based on online nominations given by independent parties. The
            selection process involves the following steps:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Online nominations from different business categories</li>
            <li>
              Market and online survey conducted by the Southeast Asia Awards
              Council and research team
            </li>
            <li>
              Survey methods include:
              <ul className="list-disc pl-6 mt-2">
                <li>Online research</li>
                <li>Customer feedbacks</li>
                <li>Man-on-the-street interviews</li>
                <li>Telephone interviews</li>
                <li>Focused group discussions</li>
              </ul>
            </li>
            <li>
              Careful validation of survey results by the Southeast Asia Awards
              Council and research team
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">About the Awards</h2>
          <p>
            The Southeast Asia Business Excellence Awards recognize companies
            that demonstrate exceptional performance across various aspects of
            business operations. By meeting all six criteria, awarded companies
            are acknowledged for their innovative practices, quality products
            and services, fair pricing, customer engagement, ethical business
            conduct, and positive work environment. This prestigious award not
            only certifies a companys excellence but also serves as a benchmark
            for other businesses in the region.
          </p>
        </section>
      </main>
    </div>
  );
}
