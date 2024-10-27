import { Sun } from 'lucide-react';
import Image from 'next/image';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            <header className="sticky top-0 bg-white shadow-sm z-10">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold">&lt;Muaz /&gt;</div>
                    <ul className="hidden md:flex space-x-4">
                        <li><a href="#" className="hover:text-blue-600">About</a></li>
                        <li><a href="#" className="hover:text-blue-600">Work</a></li>
                        <li><a href="#" className="hover:text-blue-600">Testimonials</a></li>
                        <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                    </ul>
                    <button className="p-2 rounded-full hover:bg-gray-200">
                        <Sun className="h-5 w-5" />
                    </button>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section className="flex flex-col md:flex-row items-center justify-between mb-16">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m X 👋</h1>
                        <p className="text-lg mb-4">I&apos;m a full-stack developer. I can help you build a product, feature or website. Take a look at my work.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600 hover:underline">Github</a>
                            <a href="#" className="text-blue-600 hover:underline">Twitter</a>
                            <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <Image src="/placeholder.svg" alt="Profile" width={300} height={300} className="rounded-lg shadow-lg" />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-4">Curious about me? Here you have it:</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                            <p className="mb-4">I&apos;m a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                            <p>I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 6 years after starting my web development journey, I&apos;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                        </div>
                        <div className="md:w-1/3">
                            <Image src="/placeholder.svg" alt="About me" width={300} height={400} className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center">Skills</h2>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                        {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express'].map((skill) => (
                            <div key={skill} className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Experience</h2>
                    <div className="space-y-8">
                        {[
                            { title: 'Sr. Frontend Developer', company: 'Upwork', period: 'Nov 2021 - Present' },
                            { title: 'Team Lead', company: 'Upwork', period: 'Jul 2017 - Oct 2021' },
                            { title: 'Full Stack Developer', company: 'Upwork', period: 'Dec 2015 - Jun 2017' },
                        ].map((job, index) => (
                            <div key={index} className="flex items-start">
                                <Image src="/placeholder.svg" alt={job.company} width={50} height={50} className="mr-4" />
                                <div>
                                    <h3 className="font-bold">{job.title}</h3>
                                    <p>{job.company}</p>
                                    <p className="text-gray-600">{job.period}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[1, 2, 3].map((project) => (
                            <div key={project} className="bg-gray-100 p-6 rounded-lg">
                                <Image src="/placeholder.svg" alt={`Project ${project}`} width={500} height={300} className="mb-4 rounded" />
                                <h3 className="font-bold mb-2">Project Title</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Node.js', 'MongoDB'].map((tech) => (
                                        <span key={tech} className="bg-gray-200 px-2 py-1 rounded text-sm">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center">Testimonials</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((testimonial) => (
                            <div key={testimonial} className="bg-gray-100 p-6 rounded-lg">
                                <p className="mb-4">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;</p>
                                <div className="flex items-center">
                                    <Image src="/placeholder.svg" alt="Avatar" width={50} height={50} className="rounded-full mr-4" />
                                    <div>
                                        <h4 className="font-bold">John Doe</h4>
                                        <p className="text-sm text-gray-600">CEO, Company Inc.</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 py-8">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                    <p className="mb-4">I&apos;m always open to discussing product design work or partnership opportunities.</p>
                    <a href="mailto:example@email.com" className="text-blue-600 hover:underline">example@email.com</a>
                    <div className="mt-4 flex justify-center space-x-4">
                        <a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">Github</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}