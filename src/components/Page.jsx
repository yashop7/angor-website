import React from "react";

export const Page = ({ pageData }) => {
  const { title, subtitle, date, image, content, footer } = pageData;
  return (
    <div className="flex justify-center bg-bgDark2 relative pt-2">
      <div className="px-2 sm:px-4">
        <article className="p-4 text-center rounded-3xl w-full lg:w-[1200px] 2xl:w-[1400px] mt-16 sm:mt-24">
          <header>
            <div className="text-sm text-secondaryText my-4">{date}</div>
            <h1 className="text-[2rem] xs:text-[2.8rem] lg:text-[3.5rem] font-bold text-primaryText mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-secondaryText mb-4">{subtitle}</p>
            )}
          </header>
        </article>
      </div>
    </div>
  );
};
