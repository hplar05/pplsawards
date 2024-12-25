import { Mail, Phone, MapPin, Clock, Award } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-yellow-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            <Award className="mr-4 max-md:hidden" size={40} />
            Get in touch with the Philippine Public Service Leadership Awards
            team
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Contact Details
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-yellow-500 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">
                  info@philippinepublicserviceawards.gov.ph
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 text-yellow-500 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+63 (2) 8876 5432</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-yellow-500 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600">
                  Philippine Public Service Commission Building
                  <br />
                  Constitution Hills, Batasan Complex
                  <br />
                  Quezon City, 1126 Philippines
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-6 h-6 text-yellow-500 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Office Hours</h3>
                <p className="text-gray-600">
                  Monday to Friday: 8:00 AM - 5:00 PM
                  <br />
                  Saturday, Sunday & Public Holidays: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              For inquiries about the Philippine Public Service Leadership
              Awards, please dont hesitate to reach out to us using the contact
              information above.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
