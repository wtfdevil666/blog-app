import { Button } from "../ui/button";

export const Hero = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center">
                <div className="font-['SainteColombe'] text-7xl md:text-8xl lg:text-9xl font-medium leading-none flex flex-col p-6 lg:px-[70px] lg:py-[70px] xl:px-[170px] xl:py-[125px] tracking-tight">
                    <div className="leading-none">
                        Human <br /> stories & ideas
                    </div>
                    <div className="text-xl pt-6 font-['Figtree'] tracking-tight">
                        A place to read, write, and deepen your understanding
                    </div>
                    <div>
                        <Button className=" tracking-tight text-xl lg:bg-black bg-[#1A8917] rounded-full px-8 py-6  font-['Figtree']">
                            Start reading
                        </Button>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <img
                        alt="Brand image"
                        src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
                        width="460"
                        height="600"
                        loading="eager"
                    />
                </div>
            </div>
        </div>
    );
};
