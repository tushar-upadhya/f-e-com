import { Button } from "@/components/ui/button";
import { contactMethods } from "@/lib/commonLib";

const ContactPage = () => {
  return (
    <main className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg font-semibold font-primary space-y-3">
            <h3 className="text-accent font-semibold">Contact</h3>
            <p className="text-gray-800  text-3xl font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p>
              We’re here to help and answer any question you might have, We look
              forward to hearing from you! Please fill out the form, or us the
              contact information bellow .
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form className="space-y-5">
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#e85f4c] shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#e85f4c] shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Company</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#e85f4c] shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-[#e85f4c] shadow-sm rounded-lg"
                ></textarea>
              </div>
              <Button className="w-full px-4 py-2 text-white  font-secondary text-sm bg-accent font-semibold hover:bg-accent-hover rounded-lg duration-150">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
