import { Award, Users, Star } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-yellow-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            <Award className="mr-4" size={40} />
            About Philippine Public Service Leadership Awards
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg mb-4">
            The Philippine Public Service Leadership Awards honors individuals
            who make outstanding contributions and whose accomplishments are
            models of exemplary public service for those dedicated to the public
            good—now and in the future.
          </p>
          <p className="text-lg mb-4">
            This recognition highlights milestones of success and triumph in
            public service worthy of praise and admiration. We recognize
            accomplishments in public service that contribute to and boost
            talent and skills towards nation-building.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Users className="text-yellow-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Inspiring Stories</h3>
              <p>
                We&apos;ve uncovered hundreds of inspirational stories of
                Filipino Public Servants who sought to make a difference in the
                lives of their constituents, their community, and the country.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Star className="text-yellow-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">
                Excellence Motivation
              </h3>
              <p>
                Through public recognition, we aim to motivate Filipinos to
                further excel in their chosen fields, boost their self-esteem,
                and emulate their success in the coming generations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Award className="text-yellow-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Sharing Triumphs</h3>
              <p>
                We provide a platform for public servants to share their success
                stories and triumphs over countless afflictions and adversities
                in their journey to serve the public.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
          <p className="text-lg mb-4">
            We strive to create a culture of excellence in public service by
            recognizing and celebrating the achievements of outstanding
            individuals. By sharing these stories of dedication and success, we
            hope to inspire the next generation of public servants and
            contribute to the ongoing development and progress of the
            Philippines.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">
            Join Us in Celebrating Excellence
          </h2>
          <p className="text-lg mb-6">
            Whether you&apos;re a public servant with a story to share or
            someone who wants to nominate an outstanding individual, we invite
            you to be part of this inspiring journey. Together, we can shine a
            light on the remarkable work being done in public service across the
            Philippines.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            Get Involved
          </Link>
        </section>
      </main>
    </div>
  );
}
