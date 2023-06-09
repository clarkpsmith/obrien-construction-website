import BottomContact from "./BottomContact"
import ContactForm from "./Contact"

const Footer = ({profile}: {profile: any}) => {

    return (
        <div className="">
            <ContactForm profile={profile}/>
            <BottomContact profile={profile} />
        </div>
    )
}

export default Footer;