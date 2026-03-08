type PageHeroProps = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
        {title}
      </h1>
      <p className="max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}