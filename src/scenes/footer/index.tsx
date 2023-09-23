import Logo from "@/assets/Logo.png";


type Props = {}


const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="w-5/6 mx-auto md:flex justify-between gap-16">
            {/* LEFT */}
            <div className="my-8 basis-1/2 md:mt-0">
                <img src={Logo}/>
                <p className="my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla minus tempora pariatur sapiente dicta libero nihil, 
                    cumque similique veniam quod doloremque! Inventore velit voluptatibus voluptate cumque magni aspernatur aperiam aliquam!
                </p>
                <p>© Evo All Rights Reserved</p>
            </div>
            {/* MIDDLE LINKS */}
            <div className="basis-1/4">
                <h4 className="font-bold md:mb-5 mb-2" >Links</h4>
                <p>Twitter</p>
                <p>Facebook</p>
                <p>Instagram</p>
            </div>
            {/* RIGHT */}
            <div className="basis-1/4">
                <h4 className="font-bold mb-5">Contact Us</h4>
                <p>(+1) 333-333-333</p>
                <p>Fax: <span className="font-bold">041-352-193</span></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;