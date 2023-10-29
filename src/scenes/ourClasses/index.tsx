import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor posuere congue. Nullam aliquet ac turpis accumsan imperdiet. Fusce congue vestibulum facilisis. Phasellus placerat enim maximus, ornare nulla eu, efficitur eros. Fusce consectetur felis ipsum, sed.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in orci sit amet orci congue gravida. Pellentesque lobortis nulla ut odio sollicitudin, commodo porttitor sapien commodo. Donec eu mollis enim. Pellentesque lobortis convallis diam, eu dapibus.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque gravida blandit. Proin tincidunt in dolor quis porttitor. Fusce mauris orci, faucibus sed justo et, tristique fringilla felis. Aliquam bibendum tristique justo ut tincidunt. Nulla ut.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum nisi justo, non aliquam diam elementum at. In hac habitasse platea dictumst. Donec a ultricies erat. Phasellus cursus tempor porta. Quisque hendrerit turpis ut nunc ornare.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas aliquet ex quis iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ipsum purus, porttitor quis nisl vel, ultrices efficitur.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat finibus libero, egestas mollis nisl. Cras vel cursus enim, vitae laoreet dui. Donec pharetra, justo vitae dictum elementum, nulla tortor mollis nisl, ut commodo ligula ipsum.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
