import Script from "next/script";

function ContactHome() {
  return (
    <section>
      <div className="flex justify-center mt-16 text-white">
        <h1 className="text-3xl font-bold">Contact</h1>
      </div>
      <div className="flex flex-col flex-wrap justify-center mt-8 text-white text-xl text-center">
        <p className="mb-2">Vous pouvez me contacter via:</p>
        <p><a className="hover:underline" target="_blank" href="mailto:nathan.henaux30@gmail.com">nathan.henaux30@gmail.com</a></p>
        <p><a className="hover:underline" target="_blank" href="tel:+33.6.25.77.81.98">+33 6 25 77 81 98</a></p>
      </div>
      <div className="calendly-inline-widget max-sm:h-80 sm:h-[700px] max-sm:px-2 max-sm:mt-8" data-url="https://calendly.com/henauxnathan?hide_gdpr_banner=1&background_color=141417&text_color=ffffff&primary_color=0052c8"></div>
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
    </section>
  );
}

export { ContactHome }