import { useEffect } from "react"

export default function Example() {

    useEffect(() => {
        console.log('useEffect Hook is called')
    },[]) 

    return (<h1>exmplo de useEffect</h1>)
}