import { listOfArticles } from "@/lib/constants";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function Articles() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <div className="flex justify-between mb-20">
          <h1 className="text-2xl font-bold">Articles</h1>
          <Link
            isExternal
            showAnchorIcon
            href="/articles"
            className="text-base font-bold"
          >
            More Articles
          </Link>
        </div>
        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {listOfArticles.map((item) => (
            <Card className="group relative" key={item.id}>
              <div className="relative p-1 h-80 w-full overflow-hidden rounded-lg bg-silverSand-50 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 flex items-center">
                <Image
                  alt={item.alt}
                  width="100%"
                  height="100%"
                  radius="sm"
                  src={item.image}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <CardBody>
                <div className="flex flex-col">
                  <p className="text-md">{item.title}</p>
                </div>
                <Divider />
                <p>{item.subtitle}</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href={`/articles/`+ item.id}
                >
                  Read Article
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
