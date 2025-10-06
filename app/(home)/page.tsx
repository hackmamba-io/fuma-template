import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">Welcome to Hackmamba Docs</h1>
      <p className="mb-8 text-lg text-fd-muted-foreground max-w-2xl mx-auto">
        Hackmamba delivers comprehensive documentation solutions for modern
        software projects, helping teams build better products through clear,
        accessible documentation.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
        >
          🚀 Start Building
        </Link>
        <Link
          href="/docs/overview"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
        >
          Learn More
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="p-6 border rounded-lg hover:border-green-500 transition-colors">
          <h3 className="font-semibold mb-2">Quick Start</h3>
          <p className="text-sm text-fd-muted-foreground mb-4">
            Get up and running with our documentation template in minutes
          </p>
          <Link
            href="/docs"
            className="text-green-500 hover:text-green-600 font-medium text-sm"
          >
            Get Started →
          </Link>
        </div>

        <div className="p-6 border rounded-lg hover:border-green-500 transition-colors">
          <h3 className="font-semibold mb-2">Learn More</h3>
          <p className="text-sm text-fd-muted-foreground mb-4">
            Explore comprehensive documentation and guides
          </p>
          <Link
            href="/docs/overview"
            className="text-green-500 hover:text-green-600 font-medium text-sm"
          >
            Learn More →
          </Link>
        </div>

        <div className="p-6 border rounded-lg hover:border-green-500 transition-colors">
          <h3 className="font-semibold mb-2">Documentation</h3>
          <p className="text-sm text-fd-muted-foreground mb-4">
            Complete documentation and resources
          </p>
          <Link
            href="/docs"
            className="text-green-500 hover:text-green-600 font-medium text-sm"
          >
            View Docs →
          </Link>
        </div>
      </div>
    </main>
  );
}
