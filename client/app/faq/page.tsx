import { faqsList } from "@/lib/commonLib";

const FaqPage = () => {
  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-primary text-accent font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 font-secondary max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {faqsList.map((item, idx) => (
          <div className="space-y-3 mb-5 mt-5" key={idx}>
            <h4 className="text-xl  font-secondary text-primary font-semibold">
              {item.q}
            </h4>
            <p className="text-primary-hover font-secondary ">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqPage;
