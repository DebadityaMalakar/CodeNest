import {createEffect} from "solid-js";
import { Title } from "@solidjs/meta";
export default function Index() {
    createEffect(()=>{
        if(!(localStorage.getItem("_id"))){
            window.location.href="/login";
        }
    })
    return (
    <>
    <Title>Home</Title>
    <div>Welcome to Hogwarts!</div>
    </>
    )
}