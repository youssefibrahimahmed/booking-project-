import type { IconType } from 'react-icons'

interface Card {
    icon: IconType,
    title: string,
    desc: string
}

function WhyChooseUsCards({ icon: Icon, title, desc }: Card) {
    return (
        <div className='group  border border-gray-200 shadow-xl flex flex-col flex-srart bg-gray-100/50 p-3 max-h-70 w-full md:max-w-70 rounded-xl
        hover:-translate-y-1 hover:shadow-2xl transition-all duration-300'>
            <div className="icon w-fit h-fit p-2 mb-5 border border-blue-500  bg-blue-100/70 rounded-xl">
                <Icon size={55}
                    className=' text-blue-500  
                    group-hover:rotate-y-[360deg]
                    transition-all duration-600
                    '
                />
            </div>
            <div className="title text-xl font-bold flex mb-3">{title}</div>
            <div className="desc text-gray-500 font-semibold text-start">{desc}</div>
        </div>
    )
}

export default WhyChooseUsCards