import Image from "next/image";

function Galeria() {
  return (
    <section className="bg-gray-100 py-12 dark:bg-gray-800 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          <div className="overflow-hidden rounded-lg">
            <Image
              alt="Service 1"
              className="h-auto w-full object-cover"
              height="240"
              src="/galeria1.webp"
              style={{
                aspectRatio: "360/240",
                objectFit: "cover",
              }}
              width="360"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              alt="Service 2"
              className="h-auto w-full object-cover"
              height="240"
              src="/galeria2.webp"
              style={{
                aspectRatio: "360/240",
                objectFit: "cover",
              }}
              width="360"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              alt="Service 3"
              className="h-auto w-full object-cover"
              height="240"
              src="/galeria3.webp"
              style={{
                aspectRatio: "360/240",
                objectFit: "cover",
              }}
              width="360"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              alt="Service 4"
              className="h-auto w-full object-cover"
              height="240"
              src="/galeria4.webp"
              style={{
                aspectRatio: "360/240",
                objectFit: "cover",
              }}
              width="360"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              alt="Service 5"
              className="h-auto w-full object-cover"
              height="240"
              src="/galeria5.webp"
              style={{
                aspectRatio: "360/240",
                objectFit: "cover",
              }}
              width="360"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              alt="Service 6"
              className="h-auto w-full object-cover"
              height="240"
              src="/galeria6.webp"
              style={{
                aspectRatio: "360/240",
                objectFit: "cover",
              }}
              width="360"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galeria;
