import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageImage from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {

    const inputStyles = `w-full rounded-lg border-0 bg-primary-300 mt-3 px-5 py-2 placeholder-white focus:outline-zinc-600
    focus:outline-1`

    const { register, trigger, formState: {errors}} = useForm();

    const onSubmit = async (e:any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contactus" className="w-5/6 mx-auto pt-24 pb-32">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>

                {/* HEADER */}
                <motion.div className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 1}}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                }}
                >
                    <HText>
                        <span className="text-primary-500">JOIN NOW</span> {" "}
                        TO GET IN SHAPE
                    </HText>
                    <p className="my-6"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia aspernatur quos optio aperiam voluptas quia itaque incidunt, 
                        sit eveniet molestias libero aut corporis quam quaerat iure enim dignissimos repellendus exercitationem.
                    </p>
                </motion.div>

                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">

                    {/* FORM */}
                    <motion.div className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 1}}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}>
                        <form 
                        target="_blank" 
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/sharjeel-nawaz00@hotmail.com"
                        method="POST">

                            {/* NAME */}
                            <input className={inputStyles} 
                            type="text" 
                            placeholder="NAME" 
                            {...register("name",
                            {
                                required: true,
                                maxLength: 100
                            })}/>
                            {errors.name && (
                                <p className="text-red-500">
                                    {errors.name.type === "required" && "This field is required"}
                                    {errors.name.type === "maxLength" && "Max length is 100 characters"}
                                </p>
                            )}

                            {/* EMAIL */}
                            <input className={inputStyles} 
                            type="text" 
                            placeholder="EMAIL" 
                            {...register("email",
                            {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\[A-Z]{2,}$/i
                            })}/>
                            {errors.email && (
                                <p className="text-red-500">
                                    {errors.email.type === "required" && "This field is required"}
                                    {errors.email.type === "pattern" && "Invalid email structure"}
                                </p>
                            )}

                            {/* MESSAGE */}
                            <textarea className={`${inputStyles} mt-6`} 
                            rows={5}
                            cols={50}
                            placeholder="ENTER MESSAGE HERE" 
                            {...register("message",
                            {
                                required: true,
                                maxLength: 1000
                            })}/>
                            {errors.message && (
                                <p className="text-red-500">
                                    {errors.message.type === "required" && "This field is required"}
                                    {errors.message.type === "maxLength" && "Max length is 1000"}
                                </p>
                            )}

                            {/* SUBMIT BUTTON */}
                            <button type="submit" className="mt-5 px-8 py-2 rounded-lg bg-secondary-500 text-black
                             hover:bg-primary-500 hover:text-secondary-500 transition duration-200">
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>

                    {/* IMAGE */}
                    <motion.div className="relative mt-16 md:mt-0 basis-2/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 1}}
                    variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 }
                    }}>
                        <div className="md:before:absolute md:before:content-evolvetext w-full before:-bottom-10
                        before:-right-10 before:z-[-1]">
                            <img src={ContactUsPageImage}/>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            
        </section>
    )
};

export default ContactUs;