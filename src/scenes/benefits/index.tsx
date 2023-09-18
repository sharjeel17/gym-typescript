import { SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="md:mt-[38px] min-h-full  bg-gray-20 w-full">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)} className="w-5/6 mx-auto py-20 ">
        <div>
          
        </div>
      </motion.div>
    </section>
    
  )
}

export default Benefits;