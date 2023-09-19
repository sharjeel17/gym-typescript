import HText from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "New and modern facilities",
    description: "Our newer and better facilities will accomodate all of your needs and help you on your journey to becoming the new version of yourself."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "Customers first",
    description: "We have a mission to always put our customers first and help them with any challenge or need that they might have."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Trainers on-demand",
    description: "New? We plenty of trainers from different backgrounds and speak different languages, so that you can learn to your best ability."
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="md:mt-[38px] min-h-full bg-white w-full">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)} className="w-5/6 mx-auto py-20 ">

        {/* HEADER COMMENT/TITLE */}
        <motion.div 
        initial= "hidden"
        whileInView="visible"
        variants={{
          hidden: {opacity: 0, x: -50},
          visible: {opacity: 1, x:0}
        }}
        transition={{duration: 0.5}}
        viewport={{once: true, amount: 0.5}}
        className="md:w-3/5 md:my-5">
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS CARDS */}
        <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{staggerChildren: 0.2}}
        viewport={{once: true, amount: 0.5}}
        className="md:flex mt-5 md:items-stretch md:justify-between gap-8">
          {benefits.map((benefit: BenefitType) => (
            <Benefit key={benefit.title} 
            title={benefit.title} 
            icon={benefit.icon}  
            description={benefit.description}
            setSelectedPage={setSelectedPage}/>
          ))}
        </motion.div>

        {/* IMAGE AND TEXT */}
        <div className="mt-16 md:items-center md:justify-between md:gap-20 md:flex md:mt-24">

          {/* IMAGE */}
          <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-image"/>
          
          {/* TEXT*/}
          <div>

            {/* TITLE */}
            <motion.div 
            variants={{
              hidden: { opacity:0, x:70 },
              visible: { opacity:1, x:0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount:0.5 } }
            transition={ { duration:1.2 } }
            className="relative mt-5 z-0">
              <div className="before:absolute before:-top-20 md:before:-top-16 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <div>
                  <HText>HUNDREDS OF HAPPY MEMBERS GETTING {" "}
                  <span className="text-primary-500">FIT</span>
                  </HText>
                </div>
              </div>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.div 
            variants={{
            hidden: { opacity:0, x:-70 },
            visible: { opacity:1, x:0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount:0.5 } }
            transition={ { delay:0.2, duration:1 } }>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, iste, esse laboriosam 
                perferendis ea velit omnis magni atque soluta voluptas quis corrupti temporibus blanditiis 
                aliquid similique mollitia veniam quas sapiente. Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dolore, autem. Reprehenderit omnis facere at repellat explicabo ullam accusamus fugiat autem repellendus, 
                dolorum, quo iusto magnam dicta harum illum eius rerum.
              </p>
              <p className="my-6">Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Vel perspiciatis cumque 
              maiores sapiente mollitia consectetur, corporis recusandae aliquam 
              consequatur et facilis, impedit autem earum sed ab dolor veniam ullam 
              dolore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditat
              e dolor deserunt amet odit atque reiciendis dolorem rerum maiores, 
              itaque neque, praesentium distinctio voluptas, eius consectetur iure ducimus aliquid quo quae?</p>
            </motion.div>
            
            {/* BUTTON */}
            <div className="relative mt-16 z-0">
              <div className="after:absolute after:-bottom-20 after:right-44 after:content-sparkles after:z-[-1]">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
    
  )
}

export default Benefits;