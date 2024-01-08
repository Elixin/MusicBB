
import Link from "next/link";
import { LabelInterface } from "./interfase"
import Icon from "@/svg/icon-.svg"
import Yinle from "@/svg/yinle.svg"
import Shinpin from "@/svg/shipin.svg"



export default function Nav() {
    let label: LabelInterface[] = [
        { 'labelName': "推荐", "url": "/home", "icon": Icon },
        { 'labelName': "音乐馆", "url": "/home", "icon": Yinle },
        { 'labelName': "视频", "url": "/home", "icon": Shinpin },
      ]
    return (
        <div className="mt-8">
            <div className="flex w-[60%] mx-auto  items-center h-8 my-2 text-xs text-gray-500">在线音乐</div>
            <LabelGroup label={label}/>
        </div>
    )
}

function LabelGroup({ label, }: { label: LabelInterface[] }) {
    return (
        <>
            {
                label.map(item => {
                    const Itemicon = item.icon
                    return <div className="flex w-[76%] mx-auto h-8 my-2 hover:bg-gray-200 rounded-md">
                        <div className="flex h-full w-[30%] text-center">
                            <Itemicon className="m-auto h-5 w-5 fill-gray-950" />
                        </div>
                        <Link className="flex h-full w-[70%] items-center text-xs text-gray-950 font-bold" href={item.url}>{item.labelName}</Link>
                    </div>
                })
            }
        </>
    )
}


