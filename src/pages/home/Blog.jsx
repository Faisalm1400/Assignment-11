import pic1 from '../../assets/photos/Banner-1.jpg';
import pic2 from '../../assets/photos/Banner-2.jpeg';
import pic3 from '../../assets/photos/Banner-3.jpg';

const Blog = () => {
    return (
        <div className='text-center space-y-8'>
            <h1 className="text-5xl">Our Latest Blog</h1>
            <p className="text-lg text-gray-600">
                Stay inspired and motivated with our latest marathon insights, training tips, and community stories.
                Join us as we explore everything from race-day strategies to personal success stories from runners like you.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 text-start p-10'>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={pic1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-bold">🏅 Marathon Training Guide</h2>
                        <p>
                            Preparing for your first marathon? Our expert tips will help you build endurance, improve your speed, and avoid common mistakes.
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={pic2}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-bold">🏃‍♂️ Runner Success Stories</h2>
                        <p>
                            Meet passionate runners who overcame challenges and achieved their marathon goals—be inspired to push past your limits.
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={pic3}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-bold">🎽 Race Day Essentials</h2>
                        <p>
                            From hydration strategies to the best running gear, discover everything you need to maximize your performance on race day.
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;