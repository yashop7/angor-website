import { AngorLogo } from "../assets/logos/AngorLogo";
import { NostrIcon } from "../assets/icons/NostrIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";



export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <AngorLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Angor
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Angor is a decentralized crowdfunding platform built on Bitcoin
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] outlined-button"
                  href="https://github.com/block-core/angor"
                  aria-label="Github"
                >
                  <GithubIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="https://hub.angor.io/profile/3ab7c2108524b7d1c1c585f09c1b7e194f5e7f225a5bb947f378e074d74e9dbf"
                  aria-label="Nostr"
                >
                  <NostrIcon />
                </a>
                  </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  Products
                </h3>
                <ul>
                <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="https://beta.angor.io"
                    >
                      Angor app
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="https://test.angor.io"
                    >
                      Angor test
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="https://hub.angor.io"
                    >
                      Angor hub
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="https://status.angor.io"
                    >
                      Angor status
                    </a>
                  </li>

                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                Important Links
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="https://docs.angor.io"
                    >
                      Angor docs
                    </a> 
                    </li>
                    <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="https://blog.angor.io"
                    >
                      Angor blog
                    </a>
                  </li>
                                  
                <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="https://brand.angor.io"
                    >
                      Angor brand
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  Angor
                </h3>
                <ul>


                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="#"
                    >
                     Terms & Conditions
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="#"
                    >
                     Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
