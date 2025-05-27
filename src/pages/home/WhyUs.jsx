import cover from '../../assets/photos/cover.jpeg';
import { MdPeopleAlt } from "react-icons/md";
import { FaCalendarDays, FaPeopleArrows } from "react-icons/fa6";

const WhyUs = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-3">
                <div>
                    <h1 className="text-5xl font-bold">Why Choose Us</h1>
                    <p className="py-6">
                       We are dedicated to creating unforgettable marathon experiences, offering top-tier organization, expert guidance, and a supportive community. Whether you're a seasoned runner or a beginner, we ensure an inspiring and well-managed event for all participants.
                    </p>
                    <button className="btn btn-primary">See More</button>
                </div>
                <img
                    src={cover}
                    className="max-w-sm rounded-lg shadow-2xl"
                />

                <div className='space-y-6'>  
                <div className='flex justify-center gap-2'>
                    <MdPeopleAlt className='text-5xl' />
                    <div>
                        <h1 className="text-4xl">Expert Team</h1>
                        <p>Our team consists of experienced athletes, event planners, and fitness coaches committed to ensuring the best race experience.</p>
                    </div>
                </div>
                <div className='flex justify-center gap-2'>
                    <FaPeopleArrows className='text-5xl' />
                    <div>
                        <h1 className="text-4xl">Fun Mentoring</h1>
                        <p>We provide personalized training programs and expert mentorship to help participants perform at their best.</p>
                    </div>
                </div>
                <div className='flex justify-center gap-2'>
                    <FaCalendarDays className='text-5xl' />
                    <div>
                        <h1 className="text-4xl">Event Support</h1>
                        <p>From start to finish, we ensure seamless logistics, hydration points, medical assistance, and crowd support for an exceptional race experience.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;