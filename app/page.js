'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to [School Name]</h1>
          <p className="text-xl mb-8">Nurturing Excellence in Education</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/admissions" className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
              Apply Now
            </Link>
            <Link href="/about" className="border-2 border-white px-8 py-3 rounded font-bold hover:bg-white hover:text-blue-600">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Announcement Bar */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="container mx-auto px-4">
          <p className="text-yellow-800">
            <strong>📢 Notice:</strong> Admissions for [Academic Year] are now open. Visit our admissions page for more details.
          </p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-600">Experienced Faculty</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3">Quality Education</h3>
              <p className="text-gray-600">CBSE affiliated curriculum with modern teaching methodologies and expert faculty.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">Proven track record of academic excellence and student achievements.</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-3">Holistic Development</h3>
              <p className="text-gray-600">Focus on overall development with sports, arts, and co-curricular activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Latest News & Announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-blue-600 h-40"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">[Announcement Title 1]</h3>
                <p className="text-gray-600 mb-4">[Brief description of the announcement]</p>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-bold">Read More →</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-green-600 h-40"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">[Announcement Title 2]</h3>
                <p className="text-gray-600 mb-4">[Brief description of the announcement]</p>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-bold">Read More →</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-purple-600 h-40"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">[Announcement Title 3]</h3>
                <p className="text-gray-600 mb-4">[Brief description of the announcement]</p>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-bold">Read More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-48 h-48 bg-gray-300 rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4">Principal's Welcome</h2>
              <p className="text-gray-600 mb-4">
                Welcome to [School Name]. We are proud to provide exceptional education that combines academic excellence with character building.
              </p>
              <p className="text-gray-600 mb-4">
                Our dedicated faculty and state-of-the-art infrastructure ensure that every student gets the best opportunity to excel.
              </p>
              <p className="font-bold text-lg">[Principal Name]</p>
              <p className="text-gray-600">Principal, [School Name]</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Family?</h2>
          <p className="text-xl mb-8">Take the first step towards excellence in education</p>
          <Link href="/admissions" className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
            Start Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
