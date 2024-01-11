'use client';

import SearchIcon from "@/svg/search.svg"
import { useRef, useState } from "react";

export default function ShringkingBar() {
    return (
        <div className="flex w-screen items-center  h-24">
            <div>
                <div className="w-20"></div>
            </div>
            <SearchInput/>
            <div>
            </div>
        </div>
    )
}

function SearchInput() {
    let [promptStatus, setPromptStatus] = useState(true)
    let inputRef = useRef<HTMLInputElement>(null)
    
    // 隐藏提示语，并默认选中提示语
    function hiddenPrompt(event: any) {
        console.log(event);
        setPromptStatus(false)
        if (inputRef.current != null) {
            inputRef.current.focus()
        }
    }
    // 当输入框内无值时显示提示语
    function showPrompt() {
        if (inputRef.current?.value == "") {
            setPromptStatus(true)
        }
    }
    return (
        <div className=" w-[10%] h-[30px]  bg-zinc-200 rounded-full" onClick={hiddenPrompt} onBlur={showPrompt}>
            <div className={`${promptStatus ? '' : 'hidden'}   pl-4 absolute bg-zinc-200 flex w-40 h-[30px] rounded-full items-center z-20   `}>
                <SearchIcon className=" fill-zinc-400 w-[20px] h-[20px]" />
                <p className=" text-zinc-400 text-sm">搜索音乐</p>
            </div>
            <div className=" absolute bg-zinc-200 rounded-full  w-40 flex z-10">
                <input type="text" ref={inputRef} className="outline-none pl-3 h-[30px] rounded-full bg-zinc-200 w-[80%] block " />

                <button className=" outline-none w-[20%] h-[30px]  flex items-center">
                    <SearchIcon className="fill-zinc-400 w-[20px] h-[20px]" />
                </button>
            </div>
        </div>
    )
}