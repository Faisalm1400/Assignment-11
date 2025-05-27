import banner1 from '../../assets/photos/Banner-1.jpg';
import banner2 from '../../assets/photos/Banner-2.jpeg';
import banner3 from '../../assets/photos/Banner-3.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            `url(${banner1})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-start">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">The Ultimate Marathon Experience</h1>
                            <p className="mb-5">
                                A marathon is more than just a race—it’s a journey of dedication, endurance, and personal triumph. Whether you're a seasoned runner or a first-timer, every step forward is a testament to your strength and determination.
                            </p>
                            <button className="btn btn-primary">Join the Challenge</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            `url(${banner2})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-end">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Train, Run, Conquer</h1>
                            <p className="mb-5">
                                Success in a marathon starts long before the race day. From smart training strategies to proper hydration and nutrition, preparing for the ultimate challenge is just as rewarding as crossing the finish line.
                            </p>
                            <button className="btn btn-primary">Start Your Training</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            `url(${banner3})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Join a Thriving Community</h1>
                            <p className="mb-5">
                                Running a marathon isn’t just about the miles—it’s about the shared passion, encouragement, and spirit of a community that pushes each other to be better every day. Find your motivation with runners who inspire you.
                            </p>
                            <button className="btn btn-primary">Be Part of the Movement</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;