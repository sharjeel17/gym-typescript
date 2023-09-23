import { SelectedPage, ClassesType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class.tsx";
const classes: Array<ClassesType> = [
  {
    name: "Weight Training",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dicta laudantium consectetur assumenda officiis in molestias nostrum mollitia dolores magnam dolorem tenetur dolore porro veritatis labore, inventore totam voluptates quod",
    image: image1
  },
  {
    name: "Yoga Class",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dicta laudantium consectetur assumenda officiis in molestias nostrum mollitia dolores magnam dolorem tenetur dolore porro veritatis labore, inventore totam voluptates quod",
    image: image2
  },
  {
    name: "Nutrition Class",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dicta laudantium consectetur assumenda officiis in molestias nostrum mollitia dolores magnam dolorem tenetur dolore porro veritatis labore, inventore totam voluptates quod",
    image: image3
  },
  {
    name: "Cardio Training",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dicta laudantium consectetur assumenda officiis in molestias nostrum mollitia dolores magnam dolorem tenetur dolore porro veritatis labore, inventore totam voluptates quod",
    image: image4
  },
  {
    name: "Fun Classes",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dicta laudantium consectetur assumenda officiis in molestias nostrum mollitia dolores magnam dolorem tenetur dolore porro veritatis labore, inventore totam voluptates quod",
    image: image5
  },
  {
    name: "H.I.I.T Classes",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dicta laudantium consectetur assumenda officiis in molestias nostrum mollitia dolores magnam dolorem tenetur dolore porro veritatis labore, inventore totam voluptates quod",
    image: image6
  },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div className="w-5/6 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x:-50 },
              visible: { opacity: 1, x:0 }
            }}
            >
              <div className="w-3/5">
                <HText> Our Classes</HText>
                <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo modi laborum saepe natus laudantium! Hic, voluptate repellendus? Aut, delectus, est nesciunt quisquam provident officia, nulla perspiciatis commodi doloremque neque doloribus!</p>
              </div>
              
            </motion.div>
            <div className="mt-10 h-[353] w-5/6 mx-auto overflow-x-auto overflow-y-hidden">
              <ul className="whitespace-nowrap">
                {classes.map((item: ClassesType, index) => (
                  <Class key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image} />
                ))}
              </ul>

            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses