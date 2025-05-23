import { serverSideFunction } from "@/utils/server-utils";
import { ImageSlider } from "@/components/ImageSlider";
// import { ClientSideFunction } from "@/utils/client-utils";
export default function ServerRoutePage() {
    const result = serverSideFunction();
    // const clientResult = ClientSideFunction();
    return (
        <section className="w-full h-screen  my-12 m-auto">
        <h1>Server Route {result}</h1>
        {/* <h1>Client Route {clientResult}</h1> */}

        <ImageSlider />
        </section>
    );
    }