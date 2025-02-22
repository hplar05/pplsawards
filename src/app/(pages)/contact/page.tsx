import { Mail, Phone, MapPin, Clock, Award } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                  About PPSLAWARDS
                </h2> */}
            <span className="text-yellow-600 font-medium tracking-wider">
              CONTACT US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Philippine Public Service Leadership Awards
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For inquiries or further information, please contact us.
            </p>
          </div>

          <main className="container mx-auto px-4 py-12 ">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6 text-center">
                Our Contact Details
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-yellow-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">Ppslawards@gmail.com</p>
                  </div>
                </div>

                {/* <div className="flex items-start">
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
            </div> */}

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
                  Awards, please dont hesitate to reach out to us using the
                  contact information above.
                </p>
              </div>
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}
