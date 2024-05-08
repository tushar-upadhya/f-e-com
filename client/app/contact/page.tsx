import Form from "@/components/Form";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
          <Image src={"/contact.svg"} fill alt="logo" />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <Form />
        </main>
      </div>
    </section>
  );
};

export default ContactPage;
