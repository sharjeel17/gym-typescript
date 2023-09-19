import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    title: string,
    icon: JSX.Element,
    description: string,
    setSelectedPage: (value: SelectedPage) => void
}

const Benefit = ({title, icon, description, setSelectedPage}: Props) => {
  return (
    <motion.div 
    variants={{
        hidden: {opacity: 0, scale:0.8},
        visible: {opacity: 1, scale: 1}
    }}
    className="md:w-[300px] mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">

        <div className="flex justify-center mb-4">
            <div className="border-2 rounded-full border-gray-100 bg-primary-100 p-2">
                {icon}
            </div>
        </div>

        <div className="font-bold">{title}</div>
        <p className="my-2 text-sm">{description}</p>
        
        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}>
            Learn More
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit