import Image from "next/image";

const projects = [
  {
    title: "Southern Rental Cars",
    href: "https://southernrentalcars.com/",
    description:
      "A full stack web app built with Next.js, TailwindCSS, and Prisma. Pending a booking system, admin dashboard, and user authentication.",

    imageUrl: "/images/southern.png",
  },
  {
    title: "Texas Tint",
    href: "https://texastint.com/",
    description:
      "A static website built with Next.js and TailwindCSS. Features a contact form and a gallery of previous work.",

    imageUrl: "/images/texas-tint.png",
  },
];

export default function ProjectList() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Portfolio
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-gray-500">
          Check out some projects I've worked on.
        </p>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {projects.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  width={400}
                  height={200}
                  src={post.imageUrl}
                  alt="Project screenshot"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <p className="text-sm font-medium text-indigo-600"></p>
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>

                <div className="mt-6 flex space-x-4">
                  <a
                    href={post.href}
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md shadow-sm text-white bg-indigo-700  hover:bg-opacity-70 transition ease-in-out duration-150 ml-2"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
